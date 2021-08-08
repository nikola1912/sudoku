import { FC, Suspense } from 'react'

import { ErrorBoundary } from 'react-error-boundary'

import { initMocks } from '@/api'
import { ErrorFallback } from '@/components/ErrorFallback'
import { Spinner } from '@/components/Spinner'
import { Sudoku } from '@/components/Sudoku'

import './App.scss'

initMocks()

const App: FC = () => {
  return (
    <Suspense fallback={<Spinner fullPage size="lg" />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Sudoku />
      </ErrorBoundary>
    </Suspense>
  )
}

export { App }
