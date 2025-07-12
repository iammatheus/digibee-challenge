import { Switch } from '@heroui/react'

type SectionHeaderProps = {
  toggleLabel?: string
  quantitySteps?: number
}

export function SwitchToggle({
  toggleLabel,
  quantitySteps,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-3">
      <p className="text-xs text-gray-900 font-semibold">
        {toggleLabel}{' '}
        {quantitySteps && (
          <span className="text-gray-500 font-normal">
            ({quantitySteps}) steps
          </span>
        )}
      </p>
      <Switch isDisabled className="bg-gray-200 items-center rounded-full" />
    </div>
  )
}
