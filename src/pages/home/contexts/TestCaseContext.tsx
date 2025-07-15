import { createContext, useState } from 'react'
import { IStep } from '../interface/IStep'
import { StepContextType } from '../interface/IStepContextType'

interface StepProviderProps {
  children: React.ReactNode
}

export const StepCaseContext = createContext({} as StepContextType)

export function StepCaseProvider({ children }: StepProviderProps) {
  const [steps, setSteps] = useState<IStep[]>([])

  function handleAddStep(newSteps: IStep[] | undefined) {
    if (!newSteps) return

    setSteps((prevSteps) => {
      const filteredNewSteps = newSteps.filter(
        (newStep) =>
          !prevSteps.some(
            (existingStep) =>
              existingStep.idMockResponse === newStep.idMockResponse &&
              existingStep.idItemMockResponse === newStep.idItemMockResponse,
          ),
      )

      return [...prevSteps, ...filteredNewSteps]
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
