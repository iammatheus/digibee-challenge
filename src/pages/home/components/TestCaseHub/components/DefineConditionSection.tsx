import { StepSelected } from '@/components/Drawer/StepSelected'
import { BoxForm } from '@/components/Form/BoxForm'
import { ITestCaseDrawer } from '../../../interface/ITestCaseDrawer'
import { IStep } from '../../../interface/IStep'

type Props = {
  step: ITestCaseDrawer
  payload: ITestCaseDrawer
  expectResults: ITestCaseDrawer
  steps: IStep[]
  onRemoveStep: (id: string) => void
}

export function DefineConditionsSection({
  step,
  payload,
  expectResults,
  steps,
  onRemoveStep,
}: Props) {
  return (
    <div className="mb-8 flex flex-col gap-4">
      <header className="flex items-center justify-between gap-2">
        <h2 className="text-xs font-semibold text-gray-900">
          DEFINE THE CONDITIONS
        </h2>
      </header>

      <BoxForm
        title="Payload"
        description="Create or use a saved payload"
        onOpen={payload.onOpen}
      />

      <BoxForm
        title="Mock Responses"
        description="Create or use a saved mock"
        onOpen={step.onOpen}
      />

      {steps.map((stepItem) => (
        <StepSelected.Root key={stepItem.idItemMockResponse}>
          <StepSelected.Info
            icon={stepItem.icon}
            name={stepItem.name}
            description={stepItem.description}
          />
          <StepSelected.Delete
            onDelete={() => onRemoveStep(stepItem.idItemMockResponse)}
          />
        </StepSelected.Root>
      ))}

      {steps.length > 0 && (
        <StepSelected.AddNew onPress={step.onOpen} text="Add a new mock" />
      )}

      <BoxForm
        title="Expect Results"
        description="Configure assertions"
        onOpen={expectResults.onOpen}
      />
    </div>
  )
}
