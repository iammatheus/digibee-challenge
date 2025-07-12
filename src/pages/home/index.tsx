import { Button } from '@heroui/react'
import { useTestCaseDrawer } from './hooks/useTestCaseDrawer'
import { TestCaseHub } from './components/TestCaseHub'

export function Home() {
  const { hub, step, payload, expectResults, paths } = useTestCaseDrawer()
  return (
    <>
      <div className="flex justify-center items-center m-auto w-dvw h-dvh">
        <Button
          onPress={hub.onOpen}
          variant="bordered"
          className="border-2 border-gray-900 font-semibold"
          size="lg"
        >
          Open Drawer
        </Button>
        <TestCaseHub
          hub={hub}
          step={step}
          payload={payload}
          expectResults={expectResults}
          paths={paths}
        />
      </div>
    </>
  )
}
