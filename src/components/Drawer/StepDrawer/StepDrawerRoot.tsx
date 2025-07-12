import { Drawer, DrawerProps } from '@heroui/react'

export function StepDrawerRoot({ children, ...props }: DrawerProps) {
  return (
    <Drawer {...props} radius="none" hideCloseButton>
      {children}
    </Drawer>
  )
}
