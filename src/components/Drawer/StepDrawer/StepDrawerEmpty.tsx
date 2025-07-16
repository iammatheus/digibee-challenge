import { GitCommit } from 'iconoir-react'

interface StepDrawerEmpty {
  message?: string
}

export function StepDrawerEmpty({
  message = 'Choose a step to see.',
}: StepDrawerEmpty) {
  return (
    <div className="mt-9 flex flex-col items-center justify-center gap-6">
      <div className="rounded-xl bg-[#f2f2f2] p-2">
        <GitCommit width={48} height={48} />
      </div>
      <p className="w-[100%] max-w-[220px] text-center text-[16px] tracking-[0.5px]">
        {message}
      </p>
    </div>
  )
}
