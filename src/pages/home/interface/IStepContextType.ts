import { IStep } from './IStep'

export interface StepContextType {
  steps: IStep[]
  handleAddStep: (steps: IStep[]) => void
  handleRemoveStep: (stepId: string) => void
  handleClearSteps: () => void
}
