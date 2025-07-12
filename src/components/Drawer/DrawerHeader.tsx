import { DrawerHeader as Header } from '@heroui/react'

interface DrawerHeaderProps {
  children: React.ReactNode
}

export function DrawerHeader({ children }: DrawerHeaderProps) {
  return (
    <>
      <Header className="flex justify-between">{children}</Header>
    </>
  )
}
