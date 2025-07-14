import { api } from '@/lib/axios'

export interface RegisterTestCaseBody {
  description: string
  name: string
  group?: string

  steps: {
    description: string
    icon: string
    idItemMockResponse: string
    idMockResponse: string
    name: string
  }[]
}

export async function registerTestCase({
  name,
  description,
  steps,
  group,
}: RegisterTestCaseBody) {
  await api.post('/test-case', { name, description, steps, group })
}
