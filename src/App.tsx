import { FC, Suspense } from 'react'

import { ErrorBoundary } from 'react-error-boundary'

import './App.css'
import { initMocks } from '@/api'
import { ErrorFallback } from '@/components/ErrorFallback'
import { Spinner } from '@/components/Spinner'
import { Sudoku } from '@/components/Sudoku'

initMocks()

const App: FC = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
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
