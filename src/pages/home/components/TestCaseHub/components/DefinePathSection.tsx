import { BoxForm } from '@/components/Form/BoxForm'
import { SwitchToggle } from '@/components/SwitchToggle'

type Props = {
  onOpen: () => void
}

export function DefinePathSection({ onOpen }: Props) {
  return (
    <div className="mb-8 flex flex-col gap-4">
      <header className="flex items-center justify-between">
        <h2 className="text-xs font-semibold text-gray-900">DEFINE PATH</h2>
        <SwitchToggle toggleLabel="Full flow" quantitySteps={8} />
      </header>
      <BoxForm
        title="Set the start and end"
        description="Choose the path to be tested"
        onOpen={onOpen}
      />
    </div>
  )
}
