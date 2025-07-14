import { useQuery } from '@tanstack/react-query'
import { SharedSelection } from '@heroui/react'
import { getMockResponsesMock } from '@/api/mocks/mock-responses-mock'

import { useStepUi } from './useStepUi'
import { useStepFlow } from './useStepFlow'
import { ITestCaseDrawer } from '../../interface/ITestCaseDrawer'
import { IMockResponses } from '@/api/interfaces/IMockResponses'
import { useMemo } from 'react'

interface StepSelectionProps {
  step: ITestCaseDrawer
}

export function useStepSelection({ step }: StepSelectionProps) {
  const {
    stepId,
    isOpen,
    stepMockResponse,
    setStepId,
    setStepMockResponse,
    onOpenChange,
    handleClose,
  } = useStepUi(step)

  const { handleApply, steps } = useStepFlow({
    stepId,
    stepMockResponse,
    handleClose,
  })

  const { data: mockResponses = [] } = useQuery({
    queryKey: ['mockResponses'],
    queryFn: getMockResponsesMock,
  })

  const currentStep = stepMockResponse

  const selectedStepIds = useMemo(() => {
    if (!currentStep) return []
    return steps
      .filter((item) => item.idMockResponse === currentStep.id)
      .map((item) => item.idItemMockResponse)
  }, [steps, currentStep])

  function clearStepStates() {
    setStepMockResponse(undefined)
    setStepId('')
  }

  function isSameSelectedStep(
    currentStep: IMockResponses | undefined,
    selectedStep: IMockResponses,
  ): boolean {
    return currentStep?.id === selectedStep.id
  }

  function handleSelectChange(item: SharedSelection) {
    const selectedId = item.currentKey
    const selectedStep = mockResponses.find(
      (response) => response.id === selectedId,
    )

    if (!selectedStep || isSameSelectedStep(currentStep, selectedStep)) {
      clearStepStates()
      return
    }

    setStepMockResponse(selectedStep)
  }

  return {
    steps,
    stepId,
    stepMockResponse,
    mockResponses,
    selectedStepIds,
    isOpen,
    onOpenChange,
    setStepId,
    handleClose,
    handleApply,
    handleSelectChange,
  }
}
