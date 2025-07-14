import { useContext } from 'react'
import { showToast } from '@/utils/showToast'
import { StepCaseContext } from '@/pages/home/contexts/TestCaseContext'
import { IMockResponses } from '@/api/interfaces/IMockResponses'
import { IStep } from '@/pages/home/interface/IStep'

interface StepSelectionProps {
  stepId: string
  stepMockResponse: IMockResponses[]
  handleClose: () => void
}

export function useStepSelection({
  stepId,
  stepMockResponse,
  handleClose,
}: StepSelectionProps) {
  const { handleAddStep, steps } = useContext(StepCaseContext)

  function getSelectedItem(
    stepId: string,
    stepMockResponse: IMockResponses[],
  ):
    | {
        name: string
        id: string
      }
    | undefined {
    return stepMockResponse
      .flatMap((step) => step.items)
      .find((item) => item.id === stepId)
  }

  function buildStep(
    item: { name: string; id: string },
    stepMockResponse: IMockResponses[],
  ): IStep {
    const base = stepMockResponse[0]
    return {
      idMockResponse: base.id,
      description: base.name,
      icon: base.icon,
      name: item.name,
      idItemMockResponse: item.id,
    }
  }

  function stepAlreadyExists(newStep: IStep, steps: IStep[]) {
    return steps.some(
      (step) => step.idItemMockResponse === newStep.idItemMockResponse,
    )
  }

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

  return { handleApply }
}
