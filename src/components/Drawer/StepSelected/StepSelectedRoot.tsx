interface StepSelectedRootProps {
  children: React.ReactNode
}

export function StepSelectedRoot({ children }: StepSelectedRootProps) {
  return (
    <div className="border-1 border-gray-200 rounded-lg hover:border-gray-900 transition flex items-center justify-between p-3 w-full">
      {children}
    </div>
  )
}
