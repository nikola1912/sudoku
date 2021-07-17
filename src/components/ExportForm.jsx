import PropTypes from 'prop-types'

const ExportForm = ({ visability, onCancel }) => (
  <div className={`${visability ? 'form form-export' : 'hidden'}`}>
    <button className="button" onClick={onCancel}>
      Cancel
    </button>
  </div>
)

ExportForm.propTypes = {
  visability: PropTypes.bool,
  onCancel: PropTypes.func
}

export default ExportForm
