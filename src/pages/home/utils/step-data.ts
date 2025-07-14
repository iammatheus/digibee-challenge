import { IMockResponses } from '@/api/interfaces/IMockResponses'
import { IStep } from '@/pages/home/interface/IStep'

export function getSelectedItem(
  id: string,
  stepMockResponse: IMockResponses[],
) {
  return stepMockResponse
    .flatMap((step) => step.items)
    .find((item) => item.id === id)
}

export function buildStep(
  item: { name: string; id: string },
  stepMockResponse: IMockResponses[],
): IStep {
  const stepItem = stepMockResponse[0]
  return {
    idMockResponse: stepItem.id,
    description: stepItem.name,
    icon: stepItem.icon,
    name: item.name,
    idItemMockResponse: item.id,
  }
}

export function stepAlreadyExists(newStep: IStep, steps: IStep[]) {
  return steps.some(
    (step) => step.idItemMockResponse === newStep.idItemMockResponse,
  )
}
