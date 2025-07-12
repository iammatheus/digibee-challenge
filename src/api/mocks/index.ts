import { expectResultsMock } from './expect-results-mock'
import { mockResponsesMock } from './mock-responses-mock'
import { setupWorker } from 'msw/browser'
import { payloadMock } from './payload-mock'
import { pathsMock } from './paths-mock'

export const worker = setupWorker(
  mockResponsesMock,
  expectResultsMock,
  payloadMock,
  pathsMock,
)

export async function enableMSW() {
  await worker.start()
}
