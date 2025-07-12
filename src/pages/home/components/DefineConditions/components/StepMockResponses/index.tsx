import { ITestCaseDrawer } from '../../../../interface/ITestCaseDrawer'
import { Button, Divider, SharedSelection } from '@heroui/react'
import { getMockResponsesMock } from '@/api/mocks/mock-responses-mock'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { StepDrawer } from '@/components/Drawer/StepDrawer'

type TestCaseStepProps = {
  step: ITestCaseDrawer
}

export function StepMockResponses({ step }: TestCaseStepProps) {
  const { onOpenChange, isOpen, onClose } = step
  const [selectItem, setSelectItem] = useState<any[]>([])

  const { data: mockResponses } = useQuery({
    queryKey: ['mockResponses'],
    queryFn: () => getMockResponsesMock(),
  })

  function handleSelectChange(item: SharedSelection) {
    const filteredItem = mockResponses?.filter(
      (response) => response.id === Number(item.currentKey),
    )

    setSelectItem(filteredItem!)
  }

  function handleClose() {
    setSelectItem([])
    onClose()
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

            <StepDrawer.RadioList steps={selectItem[0]?.items} />

            {!selectItem.length && (
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
