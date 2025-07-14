import { useQuery } from '@tanstack/react-query'
import { SharedSelection } from '@heroui/react'
import { getMockResponsesMock } from '@/api/mocks/mock-responses-mock'

import { useStepUi } from './useStepUi'
import { useStepFlow } from './useStepFlow'
import { ITestCaseDrawer } from '../../interface/ITestCaseDrawer'
import { IMockResponses } from '@/api/interfaces/IMockResponses'

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

  const selectedStepIds = steps
    .filter((item) => item.idMockResponse === stepMockResponse?.[0]?.id)
    .map((item) => item.idItemMockResponse)

  function clearStepStates() {
    setStepMockResponse([])
    setStepId('')
  }

  function isSameSelectedStep(selectedStep: IMockResponses): boolean {
    const [currentStep] = stepMockResponse
    return currentStep?.id === selectedStep.id
  }

  function handleSelectChange(item: SharedSelection) {
    clearStepStates()
    const selectedId = item.currentKey

    const selectedStep = mockResponses.find(
      (response) => response.id === selectedId,
    )

    if (!selectedStep) {
      clearStepStates()
      return
    }

    if (isSameSelectedStep(selectedStep)) {
      clearStepStates()
      return
    }

    setStepMockResponse([selectedStep])
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
