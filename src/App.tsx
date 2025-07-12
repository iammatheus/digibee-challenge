import { QueryClientProvider } from '@tanstack/react-query'
import { Home } from './pages/home'
import { queryClient } from './lib/react.query'
import { HeroProvider } from './lib/providers/hero-provider'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HeroProvider>
        <Home />
      </HeroProvider>
    </QueryClientProvider>
  )
}

export default App
