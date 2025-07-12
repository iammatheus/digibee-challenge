import { Button } from '@heroui/react'
import { Plus } from 'iconoir-react'

interface BoxFormProps {
  title: string
  description: string
  onOpen?: () => void
}

export function BoxForm({ title, description, onOpen }: BoxFormProps) {
  return (
    <div className="w-full text-left rounded-lg border border-gray-200 hover:border-gray-800 p-3 transition flex items-center justify-between">
      <div>
        <h2 className="font-medium text-sm text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
      <Button
        onPress={onOpen}
        radius="sm"
        size="sm"
        variant="light"
        isIconOnly
        aria-label="open"
      >
        <Plus className="w-5 h-5 text-gray-900" />
      </Button>
    </div>
  )
}
