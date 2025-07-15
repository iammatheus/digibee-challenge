import { IMockResponses } from '@/api/interfaces/IMockResponses'
import { IStep } from '@/pages/home/interface/IStep'

export function getSelectedItem(
  id: string,
  stepMockResponse: IMockResponses | undefined,
) {
  if (!stepMockResponse) return undefined

  return stepMockResponse.items.find((item) => item.id === id)
}

export function buildStep(
  item: { name: string; id: string },
  stepMockResponse: IMockResponses | undefined,
): IStep | undefined {
  const stepItem = stepMockResponse
  if (!stepItem) return

  return {
    idMockResponse: stepItem.id,
    description: stepItem.name,
    icon: stepItem.icon,
    name: item.name,
    idItemMockResponse: item.id,
  }
}

export function stepAlreadyExists(newStep: IStep | undefined, steps: IStep[]) {
  return steps.some(
    (step) => step.idItemMockResponse === newStep?.idItemMockResponse,
  )
}
