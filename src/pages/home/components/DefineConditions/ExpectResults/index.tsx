import { Button, Divider, SharedSelection } from '@heroui/react'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { StepDrawer } from '@/components/Drawer/StepDrawer'
import { getExpectResultsMock } from '@/api/mocks/expect-results-mock'
import { IMockResponses } from '@/api/interfaces/IMockResponses'
import { ITestCaseDrawer } from '@/pages/home/interface/ITestCaseDrawer'

type TestCaseStepProps = {
  expectResults: ITestCaseDrawer
}

export function StepExpectResults({ expectResults }: TestCaseStepProps) {
  const { onOpenChange, isOpen, onClose } = expectResults
  const [selectItem, setSelectItem] = useState<IMockResponses[]>([])

  const { data: expectResultsData } = useQuery({
    queryKey: ['expectResultsResponse'],
    queryFn: () => getExpectResultsMock(),
  })

  function handleSelectChange(item: SharedSelection) {
    const filteredItem = expectResultsData?.filter(
      (response) => response.id === item.currentKey,
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
            title="Expect Results"
            description="Choose a connector to simulate the expect results."
            onBack={handleClose}
          />

          <StepDrawer.Body>
            <StepDrawer.Select
              items={expectResultsData || []}
              onSelectionChange={handleSelectChange}
            >
              <></>
            </StepDrawer.Select>

            <Divider />

            <StepDrawer.RadioList steps={selectItem[0]?.items} />

            {!selectItem.length && (
              <StepDrawer.EmptyState message="Choose a step to see expect results." />
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
