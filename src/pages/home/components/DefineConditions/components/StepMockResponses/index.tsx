import { ITestCaseDrawer } from '../../../../interface/ITestCaseDrawer'
import { Button, Divider, SharedSelection } from '@heroui/react'
import { getMockResponsesMock } from '@/api/mocks/mock-responses-mock'
import { useQuery } from '@tanstack/react-query'
import { useContext, useState } from 'react'
import { StepDrawer } from '@/components/Drawer/StepDrawer'
import { StepCaseContext } from '@/pages/home/contexts/TestCaseContext'

type TestCaseStepProps = {
  step: ITestCaseDrawer
}

export function StepMockResponses({ step }: TestCaseStepProps) {
  const { onOpenChange, isOpen, onClose } = step
  const [stepMockResponse, setStepMockResponse] = useState<any[]>([])

  const { handleAddStep } = useContext(StepCaseContext)

  const { data: mockResponses } = useQuery({
    queryKey: ['mockResponses'],
    queryFn: () => getMockResponsesMock(),
  })

  function handleSelectChange(item: SharedSelection) {
    const filteredItem = mockResponses?.filter(
      (response) => response.id === Number(item.currentKey),
    )

    setStepMockResponse(filteredItem!)
  }

  function handleClose() {
    setStepMockResponse([])
    onClose()
  }

  function handleApply(stepId: number) {
    const { name, id } = stepMockResponse
      .flatMap((step) => step.items)
      .find((item) => item.id === Number(stepId))

    const itemSelected = {
      idMockResponse: stepMockResponse[0].id,
      description: stepMockResponse[0].name,
      icon: stepMockResponse[0].icon,
      name,
      idItemMockResponse: id,
    }

    handleAddStep([itemSelected])
  }

  return (
    <>
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
              onValueChange={(stepId) => handleApply(Number(stepId))}
            />

            {!stepMockResponse.length && (
              <StepDrawer.EmptyState message="Choose a step to see mocked responses." />
            )}
          </StepDrawer.Body>

          <StepDrawer.Footer>
            <Button className="w-screen" variant="bordered" radius="sm">
              Apply
            </Button>
          </StepDrawer.Footer>
        </StepDrawer.Content>
      </StepDrawer.Root>
    </>
  )
}
