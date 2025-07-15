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
      classNames={{ trigger: 'min-h-16', label: 'hidden' }}
      label="Choose a step..."
      variant="bordered"
      items={items}
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
              <Avatar src={item.data.icon} className="h-[24px] w-[24px]" />
            </div>
            <span>{item.data.name}</span>
          </div>
        ))
      }}
    >
      {(item) => (
        <SelectItem
          key={item.id}
          textValue={item.name}
          data-testid={`option-${item.id}`}
        >
          <div className="flex items-center gap-2">
            <Avatar src={item.icon} className="h-[24px] w-[24px]" />
            <span>{item.name}</span>
          </div>
        </SelectItem>
      )}
    </Select>
  )
}
