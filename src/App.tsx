import { FC, Suspense } from 'react'

import { ErrorBoundary } from 'react-error-boundary'

import { initMocks } from '@/api'
import { ErrorFallback } from '@/components/ErrorFallback'
import { Spinner } from '@/components/Spinner'
import { Sudoku } from '@/components/Sudoku'

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
