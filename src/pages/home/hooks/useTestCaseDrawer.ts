import { useDisclosure } from '@heroui/react'

export function useTestCaseDrawer() {
  const hub = useDisclosure()
  const step = useDisclosure()
  const payload = useDisclosure()
  const expectResults = useDisclosure()
  const paths = useDisclosure()

  return {
    hub,
    step,
    payload,
    expectResults,
    paths,
  }
}
