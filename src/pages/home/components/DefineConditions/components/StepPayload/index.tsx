import { ITestCaseDrawer } from '../../../../interface/ITestCaseDrawer'
import { Button, Divider, SharedSelection } from '@heroui/react'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { StepDrawer } from '@/components/Drawer/StepDrawer'
import { getPayloadMock } from '@/api/mocks/payload-mock'

type TestCaseStepProps = {
  payload: ITestCaseDrawer
}

export function StepPayload({ payload }: TestCaseStepProps) {
  const { onOpenChange, isOpen, onClose } = payload
  const [selectItem, setSelectItem] = useState<any[]>([])

  const { data: payloadData } = useQuery({
    queryKey: ['payloadResponse'],
    queryFn: () => getPayloadMock(),
  })

  function handleSelectChange(item: SharedSelection) {
    const filteredItem = payloadData?.filter(
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
        radius="none"
      >
        <StepDrawer.Content>
          <StepDrawer.Header
            title="Payload"
            description="Choose a connector to simulate the payload."
            onBack={handleClose}
          />

          <StepDrawer.Body>
            <StepDrawer.Select
              items={payloadData || []}
              onSelectionChange={handleSelectChange}
            >
              <></>
            </StepDrawer.Select>

            <Divider />

            <StepDrawer.RadioList steps={selectItem[0]?.items} />

            {!selectItem.length && (
              <StepDrawer.EmptyState message="Choose a step to see payload." />
            )}
          </StepDrawer.Body>

          <StepDrawer.Footer>
            <Button className="w-screen" variant="bordered">
              Apply
            </Button>
          </StepDrawer.Footer>
        </StepDrawer.Content>
      </StepDrawer.Root>
    </>
  )
}
