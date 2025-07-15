import { Skeleton } from '@heroui/react'

export function StepSekeleton() {
  return (
    <div className="flex w-full items-center justify-between rounded-xl border-1 border-gray-200 px-4 py-3">
      <Skeleton className="h-8 w-8 rounded-md" />

      <div className="mx-4 flex-1 space-y-2">
        <Skeleton className="h-4 w-3/4 rounded-md" />
        <Skeleton className="h-4 w-1/2 rounded-md" />
      </div>

      <Skeleton className="h-4 w-4 rounded-full" />
    </div>
  )
}
