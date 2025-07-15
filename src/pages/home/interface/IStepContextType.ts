import { IStep } from './IStep'

export interface StepContextType {
  steps: IStep[]
  handleAddStep: (steps: IStep[] | undefined) => void
  handleRemoveStep: (stepId: string) => void
  handleClearSteps: () => void
}
