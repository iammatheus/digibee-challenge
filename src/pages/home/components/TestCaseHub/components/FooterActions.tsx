import { Button } from '@heroui/react'

type Props = {
  isDisabled: boolean
  isSubmitting: boolean
  onCancel: () => void
}

export function FooterActions({ isDisabled, isSubmitting, onCancel }: Props) {
  return (
    <div className="flex items-center justify-between">
      <Button
        radius="sm"
        variant="light"
        aria-label="cancel"
        onPress={onCancel}
      >
        Cancel
      </Button>

      <Button
        radius="sm"
        variant="bordered"
        aria-label="submit"
        type="submit"
        className="border border-gray-900"
        isLoading={isSubmitting}
        isDisabled={isDisabled}
      >
        Save
      </Button>
    </div>
  )
}
