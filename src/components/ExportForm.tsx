import { FC } from 'react'

interface ExportFormProps {
  visability: boolean
  onCancel: () => void
}

const ExportForm: FC<ExportFormProps> = ({ visability, onCancel }) => {
  return (
    <div className={`${visability ? 'form form-export' : 'hidden'}`}>
      <button className="button" onClick={onCancel}>
        Cancel
      </button>
    </div>
  )
}

export default ExportForm
