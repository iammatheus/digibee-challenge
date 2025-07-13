import { QueryClientProvider } from '@tanstack/react-query'
import { Home } from './pages/home'
import { queryClient } from './lib/react.query'
import { HeroProvider } from './lib/providers/hero-provider'
import { StepCaseProvider } from './pages/home/contexts/TestCaseContext'
import { ToastProvider } from '@heroui/react'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HeroProvider>
        <ToastProvider placement="top-right" />
        <StepCaseProvider>
          <Home />
        </StepCaseProvider>
      </HeroProvider>
    </QueryClientProvider>
  )
}

export default App
