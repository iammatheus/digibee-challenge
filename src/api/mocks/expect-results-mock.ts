import { http, HttpResponse } from 'msw'
import stepJolt from '../../assets/pipeline-step-jolt.svg'
import stepRest from '../../assets/pipeline-step-rest.svg'
import stepSession from '../../assets/pipeline-step-session-management.svg'
import { IMockResponses } from '../interfaces/IMockResponses'

export const expectResultsMock = http.get<never, never, IMockResponses[]>(
  '/expect-results-mock',
  () => {
    return HttpResponse.json([
      {
        id: 1,
        name: 'Session Management',
        icon: stepSession,
        items: [
          {
            id: 1,
            name: 'Expect results name #1',
            date: 'Created at 2 dec, 2024',
          },
          {
            id: 2,
            name: 'Expect results name #2',
            date: 'Created at 2 dec, 2024',
          },
        ],
      },
      {
        id: 2,
        name: 'Rest V2 (HTTP / APIs)',
        icon: stepRest,
        items: [
          {
            id: 1,
            name: 'Expect results name #1',
            date: 'Created at 2 dec, 2024',
          },
          {
            id: 2,
            name: 'Expect results name #2',
            date: 'Created at 2 dec, 2024',
          },
        ],
      },
      {
        id: 3,
        name: 'Transformer (JOLT)',
        icon: stepJolt,
        items: [
          {
            id: 1,
            name: 'Expect results name #1',
            date: 'Created at 2 dec, 2024',
          },
          {
            id: 2,
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
