import { BoxRadioForm } from '@/components/Form/BoxRadioForm'
import { RadioGroup, RadioGroupProps } from '@heroui/react'

import tagMock from '../../../assets/tag-mock.svg'
import { IItemsMockResponses } from '@/api/interfaces/IMockResponses'
import { Check } from 'iconoir-react'
import clsx from 'clsx'

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
  return (
    <RadioGroup key="stepDrawer" size="sm" color="default" {...props}>
      {steps?.map((step) => {
        const isStepAlreadySelected = selectedStepIds?.includes(step.id)
        return (
          <div
            className={clsx(
              'relative flex cursor-not-allowed items-start rounded-lg border-1 border-gray-200 transition',
              {
                'hover:border-gray-900': !isStepAlreadySelected,
              },
            )}
            key={step.id}
          >
            {isStepAlreadySelected && (
              <span className="absolute right-4 top-5 z-10 flex items-center justify-end rounded-md bg-gray-100 p-1 text-xs">
                <Check />
                selected item
              </span>
            )}
            <div className="ml-4 mt-6">
              <img
                src={tagMock}
                className={isStepAlreadySelected ? 'opacity-50' : 'opacity-100'}
              />
            </div>
            <div className="flex w-[100%] items-center justify-end">
              <BoxRadioForm
                isDisabled={isStepAlreadySelected}
                description={step.date}
                value={step.id}
                key={step.id}
                className="w-[100%] border-0 hover:bg-transparent"
                classNames={{
                  control:
                    'w-5 h-5 border-2 border-gray-300 rounded-full transition-colors ' +
                    'data-[selected=true]:bg-pink-600 data-[selected=true]:border-pink-600',
                }}
              >
                {step.name}
              </BoxRadioForm>
            </div>
          </div>
        )
      })}
    </RadioGroup>
  )
}
