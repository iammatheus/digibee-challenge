import { Button, Divider } from '@heroui/react'
import { StepDrawer } from '@/components/Drawer/StepDrawer'
import { ITestCaseDrawer } from '@/pages/home/interface/ITestCaseDrawer'
import { useStepSelection } from '@/pages/home/hooks/StepSelection'

type TestCaseStepProps = {
  step: ITestCaseDrawer
}

export function StepMockResponses({ step }: TestCaseStepProps) {
  const {
    stepId,
    isOpen,
    selectedStepIds,
    mockResponses,
    stepMockResponse,
    handleApply,
    onOpenChange,
    handleClose,
    handleSelectChange,
    setStepId,
  } = useStepSelection({ step })

  return (
    <StepDrawer.Root
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      radius="none"
    >
      <StepDrawer.Content>
        <StepDrawer.Header
          title="Mocked Responses"
          description="Choose a connector to simulate the response."
          onBack={handleClose}
        />

        <StepDrawer.Body>
          <StepDrawer.Select
            items={mockResponses || []}
            onSelectionChange={handleSelectChange}
          >
            <></>
          </StepDrawer.Select>

          <Divider />

          <StepDrawer.RadioList
            steps={stepMockResponse[0]?.items}
            onValueChange={(stepId) => setStepId(stepId)}
            selectedStepIds={selectedStepIds}
            value={stepId}
          />

          {!stepMockResponse.length && (
            <StepDrawer.EmptyState message="Choose a step to see mocked responses." />
          )}
        </StepDrawer.Body>

        <StepDrawer.Footer>
          <Button
            className="w-screen"
            variant="bordered"
            radius="sm"
            onPress={handleApply}
            isDisabled={!stepId}
          >
            Apply
          </Button>
        </StepDrawer.Footer>
      </StepDrawer.Content>
    </StepDrawer.Root>
  )
}
