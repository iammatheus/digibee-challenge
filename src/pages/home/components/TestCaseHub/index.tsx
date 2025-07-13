import { Drawer } from '@/components/Drawer'
import { ITestCaseDrawer } from '../../interface/ITestCaseDrawer'
import { Xmark, Book } from 'iconoir-react'
import { Button, Select, SelectItem } from '@heroui/react'
import { BoxForm } from '@/components/Form/BoxForm'
import { SwitchToggle } from '@/components/SwitchToggle'

import { StepMockResponses } from '../DefineConditions/components/StepMockResponses'
import { StepPayload } from '../DefineConditions/components/StepPayload'
import { StepExpectResults } from '../DefineConditions/components/ExpectResults'
import { StepPaths } from '../DefinePath/components/Paths'
import { InputForm } from '@/components/Form/InputForm'
import { StepCaseContext } from '../../contexts/TestCaseContext'
import { useContext } from 'react'

import './style.css'
import { StepSelected } from '@/components/Drawer/StepSelected'

type TestCaseHubProps = {
  hub: ITestCaseDrawer
  step: ITestCaseDrawer
  payload: ITestCaseDrawer
  expectResults: ITestCaseDrawer
  paths: ITestCaseDrawer
}

export function TestCaseHub({
  hub,
  step,
  payload,
  expectResults,
  paths,
}: TestCaseHubProps) {
  const { onOpenChange, isOpen, onClose } = hub
  const { steps, handleRemoveStep } = useContext(StepCaseContext)

  function handleRemoveStepMockResponses(id: number): void {
    handleRemoveStep(id)
  }

  return (
    <>
      <Drawer.Root isOpen={isOpen} onOpenChange={onOpenChange}>
        <Drawer.Content>
          <Drawer.Header>
            <div className="flex flex-col w-screen">
              <div className="flex justify-between mb-4">
                <Button
                  onPress={onClose}
                  radius="sm"
                  size="sm"
                  variant="light"
                  isIconOnly
                  aria-label="close"
                  className="-ml-2"
                >
                  <Xmark width={20} height={20} fontWeight={700} />
                </Button>
                <Button
                  className="cursor-default -mr-2"
                  radius="sm"
                  size="sm"
                  variant="light"
                  isIconOnly
                >
                  <Book width={20} height={20} />
                </Button>
              </div>

              <div className="mb-4">
                <h1 className="text-[22px] mb-2">Create a test case</h1>
                <p className="text-sm font-normal text-gray-500">
                  Define your coverage area and use tools to simulate the
                  desired paths.
                </p>
              </div>
            </div>
          </Drawer.Header>
          <Drawer.Body>
            <form>
              <div className="flex flex-col gap-4 mb-8">
                <header className="flex justify-between items-center">
                  <h3 className="text-xs text-gray-900 font-semibold">
                    DEFINE PATH
                  </h3>
                  <SwitchToggle toggleLabel="Full flow" quantitySteps={8} />
                </header>
                <BoxForm
                  title="Set the start and end"
                  description="Choose the path to be tested"
                  onOpen={paths.onOpen}
                />
              </div>

              <div className="flex flex-col gap-4 mb-8">
                <header className="flex justify-between items-center gap-2">
                  <h3 className="text-xs text-gray-900 font-semibold text-">
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

                <>
                  {steps.map((stepItem) => {
                    return (
                      <StepSelected.Root>
                        <StepSelected.Info
                          icon={stepItem.icon}
                          name={stepItem.name}
                          description={stepItem.description}
                        />

                        <StepSelected.Delete
                          onDelete={() =>
                            handleRemoveStepMockResponses(
                              stepItem.idItemMockResponse,
                            )
                          }
                        />
                      </StepSelected.Root>
                    )
                  })}
                  {steps.length > 0 && (
                    <StepSelected.AddNew
                      onPress={step.onOpen}
                      text="Add new mock"
                    />
                  )}
                </>

                <BoxForm
                  title="Expect Results"
                  description="Cnfigure assertions"
                  onOpen={expectResults.onOpen}
                />
              </div>

              <div className="flex flex-col gap-4 mb-8">
                <header className="flex justify-between items-center gap-2">
                  <h3 className="text-xs text-gray-900 font-semibold text-">
                    ORGANIZE YOUR TESTS
                  </h3>
                </header>

                <div className="overflow-hidden border border-gray-50 rounded-lg">
                  <div className="p-0 border border-b-1 hover:border-gray-900 rounded-t-lg transition ">
                    <InputForm
                      placeholder="Enter the name of the test"
                      isRequired
                      label="Name"
                      radius="none"
                      className="outline-1 rounded-none"
                    />
                  </div>

                  <div className="p-0 border border-t-gray-50 hover:border-gray-900 transition">
                    <InputForm
                      placeholder="Add information about the test"
                      isRequired
                      label="Description"
                      radius="none"
                    />
                  </div>
                  <div className="p-0 border border-t-gray-50 hover:border-gray-900 transition rounded-b-lg">
                    <Select label="Add your test to a group">
                      <SelectItem key="group1">Group 1</SelectItem>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <Button
                  radius="sm"
                  variant="light"
                  aria-label="open"
                  type="submit"
                  onPress={onClose}
                >
                  Cancel
                </Button>

                <Button
                  radius="sm"
                  variant="bordered"
                  aria-label="open"
                  type="submit"
                  className="border border-gray-900"
                >
                  Save
                </Button>
              </div>
            </form>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <StepMockResponses step={step} />
      <StepPayload payload={payload} />
      <StepExpectResults expectResults={expectResults} />
      <StepPaths paths={paths} />
    </>
  )
}
