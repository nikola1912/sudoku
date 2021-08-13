import { Button } from '~/components/Button'

import styles from './styles.module.scss'

const ErrorFallback = () => {
  return (
    <div className={styles.errorFallback} role="alert">
      <h2 className={styles.errorMessage}>Ooops, something went wrong :( </h2>
      <Button onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </div>
  )
}

export { ErrorFallback }
