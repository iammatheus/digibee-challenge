import { GitCommit } from 'iconoir-react'

interface StepDrawerEmpty {
  message?: string
}

export function StepDrawerEmpty({
  message = 'Choose a step to see.',
}: StepDrawerEmpty) {
  return (
    <div className="flex justify-center items-center flex-col gap-4 mt-14">
      <div className="bg-neutral-100 p-2 rounded-lg">
        <GitCommit width={48} height={48} />
      </div>
      <p className="text-center">{message}</p>
    </div>
  )
}
