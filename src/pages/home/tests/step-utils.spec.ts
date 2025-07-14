import { describe, it, expect } from 'vitest'
import { isSameSelectedStep } from '@/pages/home/utils/is-same-selected-step'

describe('isSameSelectedStep', () => {
  it('should return true if ids match', () => {
    const stepA = { id: '123' } as any
    const stepB = { id: '123' } as any

    expect(isSameSelectedStep(stepA, stepB)).toBe(true)
  })

  it('should return false if ids differ', () => {
    const stepA = { id: '123' } as any
    const stepB = { id: '456' } as any

    expect(isSameSelectedStep(stepA, stepB)).toBe(false)
  })

  it('should return false if currentStep is undefined', () => {
    const stepB = { id: '456' } as any

    expect(isSameSelectedStep(undefined, stepB)).toBe(false)
  })
})
