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
    <div className="flex flex-col gap-4 mb-8">
      <header className="flex justify-between items-center gap-2">
        <h3 className="text-xs text-gray-900 font-semibold">
          DEFINE THE CONDITIONS
        </h3>
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
        <StepSelected.AddNew onPress={step.onOpen} text="Add new mock" />
      )}

      <BoxForm
        title="Expect Results"
        description="Cnfigure assertions"
        onOpen={expectResults.onOpen}
      />
    </div>
  )
}
