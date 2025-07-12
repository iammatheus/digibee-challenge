import { DrawerFooter as Footer } from '@heroui/react'

interface DrawerFooterProps {
  children: React.ReactNode
}

export function DrawerFooter({ children }: DrawerFooterProps) {
  return (
    <>
      <Footer>{children}</Footer>
    </>
  )
}
