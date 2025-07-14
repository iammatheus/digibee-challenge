import { addToast } from '@heroui/react'
import { Xmark } from 'iconoir-react'

interface toasProps {
  title: string
  color:
    | 'default'
    | 'foreground'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | undefined
  description?: string
  timeout?: number
  closeIcon?: React.ReactNode
}

export function showToast({
  title,
  color = 'default',
  description,
  timeout = 3000,
  closeIcon,
}: toasProps) {
  addToast({
    title,
    color,
    timeout,
    description,
    shouldShowTimeoutProgress: true,
    classNames: {
      closeButton:
        'opacity-100 absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 font-semibold text-gray-900 ml-4',
    },
    closeIcon: closeIcon ? closeIcon : <Xmark fontSize={60} fontWeight={700} />,
  })
}
