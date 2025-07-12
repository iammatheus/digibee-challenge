import { DrawerContent as Content } from '@heroui/react'

interface DrawerContentProps {
  children: React.ReactNode
}

export function DrawerContent({ children }: DrawerContentProps) {
  return (
    <>
      <Content>{children}</Content>
    </>
  )
}
