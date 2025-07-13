import { Button, ButtonProps } from '@heroui/react'

type StepSelectedAddNewProps = ButtonProps & {
  text?: string
}

export function StepSelectedAddNew({
  text = 'Add new',
  ...props
}: StepSelectedAddNewProps) {
  return (
    <div className="flex justify-end items-end -mt-2 w-full">
      <Button
        radius="sm"
        size="sm"
        variant="light"
        aria-label="Add a new mock"
        {...props}
      >
        {text}
      </Button>
    </div>
  )
}
