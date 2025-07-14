import { Button, Divider, SharedSelection } from '@heroui/react'
import { getMockResponsesMock } from '@/api/mocks/mock-responses-mock'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { StepDrawer } from '@/components/Drawer/StepDrawer'
import { useStepSelection } from '../../../hooks/useStepSelection'
import { ITestCaseDrawer } from '@/pages/home/interface/ITestCaseDrawer'
import { IMockResponses } from '@/api/interfaces/IMockResponses'

type TestCaseStepProps = {
  step: ITestCaseDrawer
}

export function StepMockResponses({ step }: TestCaseStepProps) {
  const { onOpenChange, isOpen, onClose } = step
  const [stepMockResponse, setStepMockResponse] = useState<IMockResponses[]>([])
  const [stepId, setStepId] = useState<string>('')

  const { data: mockResponses } = useQuery({
    queryKey: ['mockResponses'],
    queryFn: () => getMockResponsesMock(),
  })

  function handleClose() {
    setStepMockResponse([])
    onClose()
  }

  const { handleApply } = useStepSelection({
    stepId,
    stepMockResponse,
    handleClose,
  })

  function handleSelectChange(item: SharedSelection) {
    const filteredItem = mockResponses?.filter(
      (response) => response.id === item.currentKey,
    )

    setStepMockResponse(filteredItem!)
  }

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
