import { useContext, useEffect } from 'react'
import { StepCaseContext } from '../contexts/TestCaseContext'
import { useForm } from 'react-hook-form'
import { ITestCaseDrawer } from '../interface/ITestCaseDrawer'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { registerTestCase } from '@/api/register-test-case'
import { showToast } from '@/utils/showToast'
import z from 'zod'

type TestCaseHubProps = {
  hub: ITestCaseDrawer
}

const stepSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  icon: z.string().min(1, 'Icon is required'),
  idItemMockResponse: z.uuid(),
  idMockResponse: z.uuid(),
  name: z.string().min(1, 'Name is required'),
})

const stepSchemaArray = z.object({
  steps: z.array(stepSchema),
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  group: z.string().optional(),
})

type StepSchema = z.infer<typeof stepSchemaArray>

export function useTestCaseForm({ hub }: TestCaseHubProps) {
  const { steps, handleRemoveStep, handleClearSteps } =
    useContext(StepCaseContext)

  const {
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { isSubmitting, isValid, isDirty },
  } = useForm<StepSchema>({
    resolver: zodResolver(stepSchemaArray),
    defaultValues: {
      steps: [],
      name: '',
      description: '',
      group: '',
    },
  })

  const { mutateAsync: registerTestCaseFn } = useMutation({
    mutationFn: registerTestCase,
  })

  useEffect(() => {
    setValue('steps', steps)
  }, [steps, setValue])

  function closeAndClearForm() {
    hub.onClose()
    reset()
    handleClearSteps()
  }

  async function handleSubmitForm(data: StepSchema) {
    const { name, description, group, steps } = data
    try {
      await registerTestCaseFn({ name, description, group, steps })

      showToast({
        title: 'Your test has been created successfully.',
        color: 'success',
      })
      closeAndClearForm()
    } catch (error) {
      showToast({
        title: 'Error creating your test.',
        color: 'danger',
      })
    }
  }

  return {
    handleSubmit,
    handleSubmitForm,
    control,
    formState: { isSubmitting, isValid, isDirty },
    handleRemoveStepMockResponses: (id: string) => handleRemoveStep(id),
  }
}
