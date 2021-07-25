import { FC } from 'react'

export interface ExportFormProps {
  visability: boolean
  onCancel: () => void
}

export const ExportForm: FC<ExportFormProps> = ({ visability, onCancel }) => {
  return (
    <div className={visability ? 'form form-export' : 'hidden'}>
      <button className="button" onClick={onCancel}>
        Cancel
      </button>
    </div>
  )
}
