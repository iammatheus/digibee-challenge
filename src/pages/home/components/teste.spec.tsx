import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { StepCaseContext } from '@/pages/home/contexts/TestCaseContext'
import { ITestCaseDrawer } from '@/pages/home/interface/ITestCaseDrawer'
import { StepMockResponses } from './DefineConditions/StepMockResponses'

const mockStep: ITestCaseDrawer = {
  isOpen: true,
  onOpen: vi.fn(),
  onClose: vi.fn(),
  onOpenChange: vi.fn(),
}

const mockResponses = [
  {
    id: 'x',
    name: 'Mock Response 1',
    icon: 'icon.png',
    items: [
      { id: 'a', name: 'Step A', date: 'Today' },
      { id: 'b', name: 'Step B', date: 'Tomorrow' },
    ],
  },
]

vi.mock('@tanstack/react-query', async () => {
  const actual = await vi.importActual<any>('@tanstack/react-query')
  return {
    ...actual,
    useQuery: () => ({ data: mockResponses }),
  }
})

beforeEach(() => {
  render(
    <StepCaseContext.Provider
      value={{
        steps: [],
        handleAddStep: vi.fn(),
        handleRemoveStep: vi.fn(),
        handleClearSteps: vi.fn(),
      }}
    >
      <StepMockResponses step={mockStep} />
    </StepCaseContext.Provider>,
  )
})

describe('StepMockResponses', () => {
  it('should enable Apply button after selecting Select and Radio', async () => {
    const applyButton = screen.getByRole('button', { name: /apply/i })

    const selectTrigger = screen.getByRole('button', {
      name: /choose a step/i,
    })

    await userEvent.click(selectTrigger)

    const selectOption = await screen.findByTestId('option-x')
    await userEvent.click(selectOption)

    const radioOption = await screen.findByRole('radio', { name: /step a/i })
    await userEvent.click(radioOption)

    expect(applyButton).toBeEnabled()
  })

  it('should show apply button disabled', async () => {
    const applyButton = screen.getByRole('button', { name: /apply/i })
    expect(applyButton).toBeDisabled()
  })
})
