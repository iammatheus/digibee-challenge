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
      <h3 className="text-xs font-semibold text-gray-900">
        {toggleLabel}{' '}
        {quantitySteps && (
          <span className="font-normal tracking-tighter text-gray-500">
            ({quantitySteps} steps)
          </span>
        )}
      </h3>
      <Switch isDisabled className="items-center rounded-full bg-gray-200" />
    </div>
  )
}
