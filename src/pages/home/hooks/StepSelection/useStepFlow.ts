import { useContext } from 'react'
import { showToast } from '@/utils/show-toast'
import { StepCaseContext } from '@/pages/home/contexts/TestCaseContext'
import { IMockResponses } from '@/api/interfaces/IMockResponses'
import {
  buildStep,
  getSelectedItem,
  stepAlreadyExists,
} from '../../utils/step-data'

interface StepFlowProps {
  stepId: string
  stepMockResponse: IMockResponses[]
  handleClose: () => void
}

export function useStepFlow({
  stepId,
  stepMockResponse,
  handleClose,
}: StepFlowProps) {
  const { steps, handleAddStep } = useContext(StepCaseContext)

  function handleApply() {
    const selectedItem = getSelectedItem(stepId, stepMockResponse)
    if (!selectedItem) return handleClose()

    const itemSelected = buildStep(selectedItem, stepMockResponse)
    const alreadyExists = stepAlreadyExists(itemSelected, steps)

    handleClose()
    if (alreadyExists) return

    handleAddStep([itemSelected])

    showToast({
      title: 'Mock responses added',
      description: itemSelected.name,
      color: 'primary',
    })
  }

  return { handleApply, steps }
}
