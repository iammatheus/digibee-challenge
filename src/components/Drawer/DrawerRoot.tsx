import { Drawer } from '@heroui/react'

interface DrawerRootProps {
  children: React.ReactNode
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function DrawerRoot({
  children,
  isOpen,
  onOpenChange,
}: DrawerRootProps) {
  return (
    <>
      <Drawer
        radius="none"
        hideCloseButton
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="lg"
        backdrop="transparent"
      >
        {children}
      </Drawer>
    </>
  )
}
