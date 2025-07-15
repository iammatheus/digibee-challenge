import { Button } from '@heroui/react'
import { useTestCaseDrawer } from './hooks/useTestCaseDrawer'
import { TestCaseHub } from './components/TestCaseHub'

export function Home() {
  const { hub, step, payload, expectResults, paths } = useTestCaseDrawer()
  return (
    <>
      <div className="m-auto flex h-dvh w-dvw items-center justify-center">
        <Button
          onPress={hub.onOpen}
          variant="bordered"
          className="border-2 border-gray-900 font-semibold"
          size="lg"
        >
          Open drawer
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
