import { FC, Suspense } from 'react'

import { ErrorBoundary } from 'react-error-boundary'

import { initMocks } from '@/api'
import { Button } from '@/components/Button'
import { Spinner } from '@/components/Spinner'
import { Sudoku } from '@/components/Sudoku'

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  )
}

initMocks()

const App: FC = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen flex items-center justify-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Sudoku />
      </ErrorBoundary>
    </Suspense>
  )
}

export { App }
