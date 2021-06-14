import React from 'react'
import PropTypes from 'prop-types'
InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disable: PropTypes.bool,
  src: PropTypes.string
}
InputField.defaultProps = {
  type: 'text',
  title: '',
  label: '',
  placeholder: '',
  disable: false
};
function InputField(props) {
  const { type, placeholder, field, form, src } = props
  const { name, value } = field
  const { errors, touched } = form
  const showError = errors[name] && touched[name]
  return (
    <div className="form__field">
      <div className="form__group">
        <img src={src} alt="" />
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          {...field}
        />
      </div>
      {
        showError ?
          (<div className="form__error">{errors[name]}</div>) : null
      }
    </div>
  )
}

export default InputField
