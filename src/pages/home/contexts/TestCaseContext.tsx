import { createContext, ReactNode, useState } from 'react'

interface StepProviderProps {
  children: ReactNode
}

interface IStep {
  description: string
  icon: string
  idItemMockResponse: string
  idMockResponse: string
  name: string
}

interface StepContextType {
  steps: IStep[]
  handleAddStep: (steps: IStep[]) => void
  handleRemoveStep: (stepId: string) => void
}

export const StepCaseContext = createContext({} as StepContextType)

export function StepCaseProvider({ children }: StepProviderProps) {
  const [steps, setSteps] = useState<IStep[]>([])

  function handleAddStep(steps: IStep[]) {
    setSteps((prevSteps) => {
      const mergedData = [
        ...prevSteps.filter(
          (existingStep) =>
            !steps.some(
              (newStep) =>
                newStep.idMockResponse === existingStep.idMockResponse &&
                newStep.idItemMockResponse === existingStep.idItemMockResponse,
            ),
        ),
        ...steps,
      ]

      return mergedData
    })
  }

  function handleRemoveStep(stepId: string) {
    setSteps((prevSteps) =>
      prevSteps.filter((step) => step.idItemMockResponse !== stepId),
    )
  }

  return (
    <StepCaseContext.Provider
      value={{
        steps,
        handleAddStep,
        handleRemoveStep,
      }}
    >
      {children}
    </StepCaseContext.Provider>
  )
}
