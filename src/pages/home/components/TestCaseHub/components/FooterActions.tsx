import { Button } from '@heroui/react'

type Props = {
  isDisabled: boolean
  isSubmitting: boolean
  onCancel: () => void
}

export function FooterActions({ isDisabled, isSubmitting, onCancel }: Props) {
  return (
    <div className="flex w-[100%] max-w-[400px] items-center justify-between">
      <Button
        radius="md"
        variant="light"
        aria-label="cancel"
        onPress={onCancel}
        className="font-semibold"
      >
        Cancel
      </Button>

      <Button
        radius="md"
        variant="bordered"
        aria-label="submit"
        type="submit"
        className={`border-1 font-semibold ${isDisabled ? 'cursor-not-allowed border-gray-300' : 'border-gray-900'}`}
        isLoading={isSubmitting}
        isDisabled={isDisabled}
      >
        Save
      </Button>
    </div>
  )
}
