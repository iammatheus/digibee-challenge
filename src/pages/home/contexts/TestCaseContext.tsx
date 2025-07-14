import { createContext, useState } from 'react'
import { IStep } from '../interface/IStep'
import { StepContextType } from '../interface/IStepContextType'

interface StepProviderProps {
  children: React.ReactNode
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

  function handleClearSteps() {
    setSteps([])
  }

  return (
    <StepCaseContext.Provider
      value={{
        steps,
        handleAddStep,
        handleRemoveStep,
        handleClearSteps,
      }}
    >
      {children}
    </StepCaseContext.Provider>
  )
}
