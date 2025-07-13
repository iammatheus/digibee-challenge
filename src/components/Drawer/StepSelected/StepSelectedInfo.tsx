interface StepSelectedInfoProps {
  icon: string
  name: string
  description: string
}

export function StepSelectedInfo({
  icon,
  name,
  description,
}: StepSelectedInfoProps) {
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="w-10 h-10 bg-gray-50 flex justify-center items-center">
        <img src={icon} width={24} height={24} />
      </div>
      <div>
        <h2 className="font-medium text-sm text-gray-900">{name}</h2>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  )
}
