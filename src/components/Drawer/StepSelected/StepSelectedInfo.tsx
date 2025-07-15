import { Avatar } from '@heroui/react'

interface StepSelectedInfoProps {
  icon: string
  name: string
  description: string
}

export function StepSelectedInfo({
  icon,
  name,
  description,
}: StepSelectedInfoProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-50">
        <Avatar src={icon} className="h-[24px] w-[24px]" />
      </div>
      <div>
        <h2 className="text-sm font-medium text-gray-900">{name}</h2>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  )
}
