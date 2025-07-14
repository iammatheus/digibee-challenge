import { IMockResponses } from '@/api/interfaces/IMockResponses'

export function isSameSelectedStep(
  currentStep: IMockResponses | undefined,
  selectedStep: IMockResponses,
): boolean {
  return currentStep?.id === selectedStep.id
}
