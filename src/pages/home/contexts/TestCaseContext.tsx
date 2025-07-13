import { IMockResponses } from '@/api/interfaces/IMockResponses'
import { createContext, ReactNode, useState } from 'react'

interface StepProviderProps {
  children: ReactNode
}

interface IStep {
  description: string
  icon: string
  idItemMockResponse: number
  idMockResponse: number
  name: string
}

interface StepContextType {
  steps: IStep[]
  handleAddStep: (steps: IStep[]) => void
  handleRemoveStep: (stepId: number) => void
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

  function handleRemoveStep(itemId: number) {}

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
