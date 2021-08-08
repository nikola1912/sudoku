import { FC } from 'react'

import { cnb } from 'cnbuilder'

import styles from './styles.module.scss'

export type SpinnerProps = {
  className?: string
  fullPage?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'primary' | 'light'
}

const Spinner: FC<SpinnerProps> = ({
  className = '',
  fullPage = false,
  size = 'md',
  variant = 'primary'
}) => {
  return (
    <div className={cnb({ [styles.fullPageContainer]: fullPage })}>
      <div className={cnb(styles.spinner, styles[size], styles[variant], className)} />
    </div>
  )
}

export { Spinner }
