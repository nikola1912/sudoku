import { FC } from 'react'

export type ExportFormProps = {
  visability: boolean
  onCancel: () => void
}

const ExportForm: FC<ExportFormProps> = ({ visability, onCancel }) => {
  return (
    <div className={visability ? 'form form-export' : 'hidden'}>
      <button className="button" onClick={onCancel}>
        Cancel
      </button>
    </div>
  )
}

export { ExportForm }
