import { BoxRadioForm } from '@/components/Form/BoxRadioForm'
import { RadioGroup } from '@heroui/react'

import tagMock from '../../../assets/tag-mock.svg'

interface StepDrawerRadioListProps {
  steps: any[]
}

export function StepDrawerRadioList({ steps }: StepDrawerRadioListProps) {
  return (
    <>
      <RadioGroup key="stepDrawer" size="sm" color="default">
        {steps?.map((step) => {
          return (
            <div
              className="border-1 border-gray-200 hover:border-gray-900 transition flex items-start"
              key={step.id}
            >
              <div className="ml-4 mt-6">
                <img src={tagMock} />
              </div>
              <div className="w-[100%]">
                <BoxRadioForm
                  description={step.date}
                  value={step.name}
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
    </>
  )
}
