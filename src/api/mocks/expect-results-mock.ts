import { http, HttpResponse } from 'msw'
import stepJolt from '../../assets/pipeline-step-jolt.svg'
import stepRest from '../../assets/pipeline-step-rest.svg'
import stepSession from '../../assets/pipeline-step-session-management.svg'
import { IMockResponses } from '../interfaces/IMockResponses'
import { v4 as uuidv4 } from 'uuid'

export const expectResultsMock = http.get<never, never, IMockResponses[]>(
  '/expect-results-mock',
  () => {
    return HttpResponse.json([
      {
        id: uuidv4(),
        name: 'Session Management',
        icon: stepSession,
        items: [
          {
            id: uuidv4(),
            name: 'Expect results name #1',
            date: 'Created at 2 dec, 2024',
          },
          {
            id: uuidv4(),
            name: 'Expect results name #2',
            date: 'Created at 2 dec, 2024',
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
            name: 'Expect results name #1',
            date: 'Created at 2 dec, 2024',
          },
          {
            id: uuidv4(),
            name: 'Expect results name #2',
            date: 'Created at 2 dec, 2024',
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
            name: 'Expect results name #1',
            date: 'Created at 2 dec, 2024',
          },
          {
            id: uuidv4(),
            name: 'Expect results name #2',
            date: 'Created at 2 dec, 2024',
          },
        ],
      },
    ])
  },
)

export async function getExpectResultsMock(): Promise<IMockResponses[]> {
  const response = await fetch('/expect-results-mock')

  if (!response.ok) {
    throw new Error('Erro ao carregar')
  }

  return response.json()
}
