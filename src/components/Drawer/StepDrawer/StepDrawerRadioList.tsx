import { BoxRadioForm } from '@/components/Form/BoxRadioForm'
import { Avatar, RadioGroup, RadioGroupProps } from '@heroui/react'

import tagMock from '../../../assets/tag-mock.svg'
import { IItemsMockResponses } from '@/api/interfaces/IMockResponses'
import { Check } from 'iconoir-react'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { StepSekeleton } from './StepSkeleton'

type StepDrawerRadioListProps = RadioGroupProps & {
  steps: IItemsMockResponses[] | undefined
  selectedStepIds?: string[]
  isDisabled?: boolean
}

export function StepDrawerRadioList({
  steps,
  isDisabled,
  selectedStepIds,
  ...props
}: StepDrawerRadioListProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (steps && steps.length > 0) {
      setIsLoading(true)
      const timeout = setTimeout(() => {
        setIsLoading(false)
      }, 800)
      return () => clearTimeout(timeout)
    }
  }, [steps])

  return (
    <RadioGroup key="stepDrawer" size="sm" color="default" {...props}>
      {steps?.map((step) => {
        const isStepAlreadySelected = selectedStepIds?.includes(step.id)
        {
          return isLoading ? (
            <StepSekeleton key={step.id} />
          ) : (
            <div
              className={clsx(
                'relative flex cursor-not-allowed items-center rounded-lg border-1 border-gray-200 transition',
                {
                  'hover:border-gray-900': !isStepAlreadySelected,
                },
              )}
              key={step.id}
            >
              {isStepAlreadySelected && (
                <span className="absolute top-5 right-4 z-10 flex items-center justify-end rounded-md bg-neutral-100 p-1 text-xs">
                  <Check />
                  selected
                </span>
              )}
              <div className="bg-neutral- ml-4 flex h-[32px] w-[32px] items-center justify-center rounded-md bg-neutral-50 p-2">
                <Avatar
                  src={tagMock}
                  radius="sm"
                  className={`h-[16px] w-[16px] ${isStepAlreadySelected ? 'opacity-50' : 'opacity-100'}`}
                />
              </div>
              <div className="flex w-[100%] items-center justify-end">
                <BoxRadioForm
                  isDisabled={isStepAlreadySelected}
                  description={step.date}
                  value={step.id}
                  key={step.id}
                  className="w-[100%] border-0 font-[500] hover:bg-transparent"
                >
                  {step.name}{' '}
                  <span className="text-xs font-normal text-gray-400">
                    ({step.quantity})
                  </span>
                </BoxRadioForm>
              </div>
            </div>
          )
        }
      })}
    </RadioGroup>
  )
}
