import { Textarea, TextAreaProps } from '@heroui/react'
import { forwardRef } from 'react'

export const TextAreaForm = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    return <Textarea ref={ref} {...props} />
  },
)

TextAreaForm.displayName = 'TextAreaForm'
