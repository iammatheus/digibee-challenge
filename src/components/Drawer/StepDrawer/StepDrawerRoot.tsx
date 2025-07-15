import { Drawer, DrawerProps } from '@heroui/react'

export function StepDrawerRoot({ children, ...props }: DrawerProps) {
  return (
    <Drawer
      {...props}
      radius="none"
      hideCloseButton
      size="lg"
      backdrop="transparent"
      className="shadow-[0px_0px_30px_0px_#0000001F]"
    >
      {children}
    </Drawer>
  )
}
