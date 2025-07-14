import { Button } from '@heroui/react'
import { Book, Xmark } from 'iconoir-react'

interface HeaderSectionProps {
  onClose: () => void
}

export function HeaderSection({ onClose }: HeaderSectionProps) {
  return (
    <div className="flex w-screen flex-col">
      <div className="mb-4 flex justify-between">
        <Button
          onPress={onClose}
          radius="sm"
          size="sm"
          variant="light"
          isIconOnly
          aria-label="close"
          className="-ml-2"
        >
          <Xmark width={20} height={20} fontWeight={700} />
        </Button>
        <Button
          className="-mr-2 cursor-default"
          radius="sm"
          size="sm"
          variant="light"
          isIconOnly
        >
          <Book width={20} height={20} />
        </Button>
      </div>

      <div className="mb-4">
        <h1 className="mb-2 text-[22px]">Create a test case</h1>
        <p className="text-sm font-normal text-gray-500">
          Define your coverage area and use tools to simulate the desired paths.
        </p>
      </div>
    </div>
  )
}
