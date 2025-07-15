import './style.css'

import { DefineConditionsSection } from './components/DefineConditionSection'
import { DefinePathSection } from './components/DefinePathSection'
import { Drawer } from '@/components/Drawer'
import { FooterActions } from './components/FooterActions'
import { HeaderSection } from './components/HeaderSection'
import { ITestCaseDrawer } from '../../interface/ITestCaseDrawer'
import { OrganizeTestSection } from './components/OrganizeTestSection'
import { StepCaseContext } from '../../contexts/TestCaseContext'
import { StepExpectResults } from '../DefineConditions/ExpectResults'
import { StepMockResponses } from '../DefineConditions/StepMockResponses'
import { StepPaths } from '../DefinePath/Paths'
import { StepPayload } from '../DefineConditions/StepPayload'
import { useContext } from 'react'
import { useTestCaseForm } from '../../hooks/useTestCaseForm'

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

  const {
    handleSubmit,
    handleSubmitForm,
    control,
    formState: { isValid, isSubmitting, isDirty },
  } = useTestCaseForm({ hub })

  return (
    <>
      <Drawer.Root isOpen={isOpen} onOpenChange={onOpenChange}>
        <Drawer.Content>
          <Drawer.Header>
            <HeaderSection onClose={onClose} />
          </Drawer.Header>
          <Drawer.Body>
            <form onSubmit={handleSubmit(handleSubmitForm)}>
              <DefinePathSection onOpen={paths.onOpen} />
              <DefineConditionsSection
                step={step}
                steps={steps}
                expectResults={expectResults}
                onRemoveStep={handleRemoveStep}
                payload={payload}
              />

              <OrganizeTestSection control={control} />

              <FooterActions
                isDisabled={!isValid || !isDirty}
                isSubmitting={isSubmitting}
                onCancel={onClose}
              />
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
