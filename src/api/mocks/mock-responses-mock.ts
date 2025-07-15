import { http, HttpResponse } from 'msw'
import stepJolt from '../../assets/pipeline-step-jolt.svg'
import stepRest from '../../assets/pipeline-step-rest.svg'
import stepSession from '../../assets/pipeline-step-session-management.svg'
import { IMockResponses } from '../interfaces/IMockResponses'
import { v4 as uuidv4 } from 'uuid'

export const mockResponsesMock = http.get<never, never, IMockResponses[]>(
  '/mock-responses',
  () => {
    return HttpResponse.json([
      {
        id: uuidv4(),
        name: 'Session Management',
        icon: stepSession,
        items: [
          {
            id: uuidv4(),
            name: 'Mock name #1',
            date: 'Created at 2 dec, 2024',
            quantity: 1,
          },
          {
            id: uuidv4(),
            name: 'Mock name #2',
            date: 'Created at 2 dec, 2024',
            quantity: 3,
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Rest V2 (HTTP / APIs)',
        icon: stepRest,
        items: [
          {
            id: uuidv4(),
            name: 'Mock name #1',
            date: 'Created at 2 dec, 2024',
            quantity: 4,
          },
          {
            id: uuidv4(),
            name: 'Mock name #2',
            date: 'Created at 2 dec, 2024',
            quantity: 2,
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Transformer (JOLT)',
        icon: stepJolt,
        items: [
          {
            id: uuidv4(),
            name: 'Mock name #1',
            date: 'Created at 2 dec, 2024',
            quantity: 6,
          },
          {
            id: uuidv4(),
            name: 'Mock name #2',
            date: 'Created at 2 dec, 2024',
            quantity: 3,
          },
        ],
      },
    ])
  },
)

export async function getMockResponsesMock(): Promise<IMockResponses[]> {
  const response = await fetch('/mock-responses')

  return response.json()
}
