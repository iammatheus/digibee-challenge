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
      className="mb-6 -m-t-4"
      classNames={{ trigger: 'min-h-16', label: 'hidden' }}
      label="Choose a step..."
      variant="bordered"
      placeholder="Choose a step..."
      items={items}
      radius="sm"
      labelPlacement="outside"
      renderValue={(selected) => {
        const typedSelected = selected as Array<{
          key: string
          data: IMockResponses
        }>
        return typedSelected.map((item) => (
          <div key={item.key} className="flex gap-2 items-center">
            <Avatar src={item.data.icon} size="sm" />
            <span>{item.data.name}</span>
          </div>
        ))
      }}
    >
      {(item) => (
        <SelectItem key={item.id} textValue={item.name}>
          <div className="flex items-center gap-2">
            <Avatar src={item.icon} size="sm" />
            <span>{item.name}</span>
          </div>
        </SelectItem>
      )}
    </Select>
  )
}
