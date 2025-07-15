import { Button, Divider, SharedSelection } from '@heroui/react'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { StepDrawer } from '@/components/Drawer/StepDrawer'
import { getPathsMock } from '@/api/mocks/paths-mock'
import { ITestCaseDrawer } from '@/pages/home/interface/ITestCaseDrawer'
import { IMockResponses } from '@/api/interfaces/IMockResponses'

type TestCaseStepProps = {
  paths: ITestCaseDrawer
}

export function StepPaths({ paths }: TestCaseStepProps) {
  const { onOpenChange, isOpen, onClose } = paths
  const [selectItem, setSelectItem] = useState<IMockResponses[]>([])

  const { data: pathsData } = useQuery({
    queryKey: ['pathsResponse'],
    queryFn: () => getPathsMock(),
  })

  function handleSelectChange(item: SharedSelection) {
    const filteredItem = pathsData?.filter(
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
            title="Paths"
            description="Choose a connector to simulate the paths."
            onBack={handleClose}
          />

          <StepDrawer.Body>
            <StepDrawer.Select
              items={pathsData || []}
              onSelectionChange={handleSelectChange}
              placeholder="Choose a step to paths..."
            >
              <></>
            </StepDrawer.Select>

            <Divider />

            <StepDrawer.RadioList steps={selectItem[0]?.items} />

            {!selectItem.length && (
              <StepDrawer.EmptyState message="Choose a step to see paths." />
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
