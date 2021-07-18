import { FC } from 'react'

interface HeaderButtonsProps {
  onSolve: () => void
  onRestart: () => void
}

interface FooterButtonsProps {
  visability: boolean
  onImport: () => void
  onGenerate: () => void
  onExport: () => void
}

interface ButtonProps {
  text: string
  onClick: () => void
}

const HeaderButtons: FC<HeaderButtonsProps> = ({ onSolve, onRestart }) => {
  return (
    <div className="buttons-container">
      <Button text="Solve" onClick={onSolve} />
      <Button text="Restart" onClick={onRestart} />
    </div>
  )
}

const FooterButtons: FC<FooterButtonsProps> = ({
  visability,
  onImport,
  onGenerate,
  onExport
}) => {
  return (
    <div className={visability ? 'buttons-container' : 'hidden'}>
      <Button text="Import" onClick={onImport} />
      <Button text="Generate" onClick={onGenerate} />
      <Button text="Export" onClick={onExport} />
    </div>
  )
}

const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  )
}

export { HeaderButtons, FooterButtons }
