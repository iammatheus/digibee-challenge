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
          title="Mock Response"
          description="Choose a connector to simulate the response."
          onBack={handleClose}
        />

        <StepDrawer.Body className="relative">
          <StepDrawer.Select
            items={mockResponses}
            onSelectionChange={handleSelectChange}
            placeholder="Choose a step to mock..."
          >
            <></>
          </StepDrawer.Select>

          <Divider className="absolute left-0 top-[265px] w-[100%]" />

          <StepDrawer.RadioList
            steps={stepMockResponse?.items}
            onValueChange={setStepId}
            selectedStepIds={selectedStepIds}
            value={stepId}
            className="mt-8"
          />

          {!stepMockResponse && (
            <StepDrawer.EmptyState message="Choose a step to see saved mocked responses." />
          )}
        </StepDrawer.Body>

        <StepDrawer.Footer className="flex items-center justify-center">
          <Button
            className={`w-[100%] max-w-[400px] rounded-md border-1 font-semibold ${
              stepId ? 'border-gray-900' : 'cursor-not-allowed border-gray-300'
            }`}
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
