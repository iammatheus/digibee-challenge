import { Button, Popover, PopoverContent, PopoverTrigger } from '@heroui/react'
import { MoreVert, Trash } from 'iconoir-react'

interface StepSelectedActionsProps {
  onDelete: () => void
}

export function StepSelectedDelete({ onDelete }: StepSelectedActionsProps) {
  return (
    <>
      <Popover placement="bottom" showArrow={true}>
        <div className="rounded-small hover:bg-gray-200 transition">
          <PopoverTrigger>
            <Button
              radius="sm"
              size="sm"
              variant="light"
              isIconOnly
              aria-label="open"
            >
              <MoreVert className="text-gray-900" />
            </Button>
          </PopoverTrigger>
        </div>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="text-tiny">
              <Button
                onPress={onDelete}
                radius="sm"
                size="sm"
                variant="light"
                isIconOnly
                aria-label="delete"
              >
                <Trash className="text-red-600" />
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  )
}
