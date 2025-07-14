import { useState } from 'react'
import { ITestCaseDrawer } from '@/pages/home/interface/ITestCaseDrawer'
import { IMockResponses } from '@/api/interfaces/IMockResponses'

export function useStepUi(step: ITestCaseDrawer) {
  const { onOpenChange, isOpen, onClose } = step
  const [stepMockResponse, setStepMockResponse] = useState<IMockResponses[]>([])
  const [stepId, setStepId] = useState<string>('')

  function handleClose() {
    setStepMockResponse([])
    setStepId('')
    onClose()
  }

  return {
    stepId,
    stepMockResponse,
    isOpen,
    setStepId,
    setStepMockResponse,
    onOpenChange,
    handleClose,
  }
}
