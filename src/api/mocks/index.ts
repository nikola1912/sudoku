import { ENVIRONMENT, MOCK_API } from '~/configs/environment'

const initMocks = () => {
  if (MOCK_API) {
    if (ENVIRONMENT === 'test') {
      import('./server').then(({ server }) => server.listen())
    } else {
      import('./browser').then(({ worker }) => worker.start())
    }
  }
}

export { initMocks }
