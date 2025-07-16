import './style.css'
import { IMockResponses } from '@/api/interfaces/IMockResponses'
import { Select, SelectItem, Avatar, SelectProps } from '@heroui/react'

type StepDrawerSelectProps = SelectProps & {
  items: IMockResponses[]
}

export function StepDrawerSelect({
  items = [],
  ...props
}: StepDrawerSelectProps) {
  return (
    <Select
      {...props}
      className="-m-t-4 mb-6"
      classNames={{
        trigger: 'min-h-16 border-1 cursor-pointer',
        label: 'hidden',
        popoverContent:
          'rounded-none rounded-b-md shadow-[0px_10px_15px_0px_#0000000f]',
      }}
      label="Choose a step"
      variant="bordered"
      items={[
        ...items,
        // footer do select
        {
          id: '__info__',
          name: 'You can also select a step by clicking on the canvas.',
          icon: '/src/assets/light-on.svg',
          items: [],
        },
      ]}
      radius="lg"
      labelPlacement="outside"
      renderValue={(selected) => {
        const typedSelected = selected as Array<{
          key: string
          data: IMockResponses
        }>
        return typedSelected.map((item) => (
          <div key={item.key} className="flex items-center gap-2">
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-md bg-neutral-50">
              <Avatar
                src={item.data.icon}
                className="h-[24px] w-[24px] bg-transparent"
              />
            </div>
            <span>{item.data.name}</span>
          </div>
        ))
      }}
    >
      {(item: IMockResponses) => {
        return (
          <SelectItem
            key={item.id}
            textValue={item.name}
            data-testid={`option-${item.id}`}
            id={item.id}
            isReadOnly={item.id === '__info__'}
          >
            <div
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              id={item.id}
            >
              <Avatar
                src={item.icon}
                className="h-[24px] w-[24px] bg-transparent"
              />
              <span className="font-semibold">{item.name}</span>
            </div>
          </SelectItem>
        )
      }}
    </Select>
  )
}
