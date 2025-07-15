import { DrawerFooter, DrawerFooterProps } from '@heroui/react'

export function StepDrawerFooter({ children, ...props }: DrawerFooterProps) {
  return <DrawerFooter {...props}>{children}</DrawerFooter>
}
