import { Button } from '@heroui/react'
import { Plus } from 'iconoir-react'

interface BoxFormProps {
  title: string
  description: string
  onOpen?: () => void
}

export function BoxForm({ title, description, onOpen }: BoxFormProps) {
  return (
    <div className="flex w-full items-center justify-between rounded-lg border-1 border-neutral-200 p-3 text-left transition hover:border-gray-800">
      <div>
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
      <Button
        onPress={onOpen}
        radius="sm"
        size="sm"
        variant="light"
        isIconOnly
        aria-label="open"
      >
        <Plus className="h-5 w-5 text-gray-900" />
      </Button>
    </div>
  )
}
