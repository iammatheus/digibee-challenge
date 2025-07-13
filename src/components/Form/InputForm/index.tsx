import { Input, InputProps } from '@heroui/react'
import { forwardRef } from 'react'

export const InputForm = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return <Input ref={ref} {...props} />
  },
)

InputForm.displayName = 'InputForm'
