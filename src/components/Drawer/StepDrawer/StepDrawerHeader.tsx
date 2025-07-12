import { Button, DrawerHeader } from '@heroui/react'
import { ArrowLeft, Book } from 'iconoir-react'

interface StepDrawerHeaderProps {
  title: string
  description: string
  onBack: () => void
}

export function StepDrawerHeader({
  title,
  description,
  onBack,
}: StepDrawerHeaderProps) {
  return (
    <DrawerHeader className="flex justify-between flex-col">
      <div className="flex justify-between mb-4">
        <Button
          onPress={onBack}
          isIconOnly
          variant="light"
          radius="sm"
          size="sm"
          aria-label="back"
          className="-ml-2"
        >
          <ArrowLeft width={20} height={20} fontWeight={700} />
        </Button>
        <Button
          isIconOnly
          variant="light"
          radius="sm"
          size="sm"
          className="cursor-default -mr-2"
        >
          <Book width={20} height={20} />
        </Button>
      </div>
      <div>
        <h1 className="text-[22px] mb-2">{title}</h1>
        {description && (
          <p className="text-sm font-normal text-gray-500">{description}</p>
        )}
      </div>
    </DrawerHeader>
  )
}
