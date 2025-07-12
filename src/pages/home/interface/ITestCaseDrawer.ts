export type ITestCaseDrawer = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onOpenChange: (open: boolean) => void
}
