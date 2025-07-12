import { cn, Radio, RadioProps } from '@heroui/react'

export function BoxRadioForm({ children, ...props }: RadioProps) {
  return (
    <Radio
      {...props}
      classNames={{
        base: cn(
          'm-0 items-center justify-between',
          'flex-row-reverse max-w-[100%] cursor-pointer p-4',
        ),
        control: cn(
          'group-data-[selected=true]:bg-gray-900',
          'outline outline-1',
        ),
      }}
    >
      {children}
    </Radio>
  )
}
