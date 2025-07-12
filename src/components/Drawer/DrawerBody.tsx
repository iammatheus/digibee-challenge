import { DrawerBody as Body } from '@heroui/react'

interface DrawerBodyProps {
  children: React.ReactNode
}

export function DrawerBody({ children }: DrawerBodyProps) {
  return (
    <>
      <Body>{children}</Body>
    </>
  )
}
