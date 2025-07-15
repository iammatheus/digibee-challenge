import { Button, Divider } from '@heroui/react'
import { StepDrawer } from '@/components/Drawer/StepDrawer'
import { ITestCaseDrawer } from '@/pages/home/interface/ITestCaseDrawer'
import { useStepSelection } from '@/pages/home/hooks/StepSelection'
import { useEffect } from 'react'

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
    clearStepStates,
  } = useStepSelection({ step })

  useEffect(() => {
    clearStepStates()
  }, [isOpen])

  return (
    <StepDrawer.Root isOpen={isOpen} onOpenChange={onOpenChange} radius="none">
      <StepDrawer.Content>
        <StepDrawer.Header
          title="Mocked Responses"
          description="Choose a connector to simulate the response."
          onBack={handleClose}
        />

        <StepDrawer.Body>
          <StepDrawer.Select
            items={mockResponses}
            onSelectionChange={handleSelectChange}
          >
            <></>
          </StepDrawer.Select>

          <Divider />

          <StepDrawer.RadioList
            steps={stepMockResponse?.items}
            onValueChange={setStepId}
            selectedStepIds={selectedStepIds}
            value={stepId}
          />

          {!stepMockResponse && (
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
