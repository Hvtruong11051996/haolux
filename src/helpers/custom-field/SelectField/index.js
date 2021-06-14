import React from 'react'
import PropTypes from 'prop-types'
SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disable: PropTypes.bool,
  src: PropTypes.string,
  options: PropTypes.array
}
SelectField.defaultProps = {
  type: 'text',
  title: '',
  label: '',
  placeholder: '',
  disable: false,
  options: []
};
function SelectField(props) {
  const { placeholder, field, form, options, onChangeFiled } = props
  const { name, value } = field
  const { errors, touched } = form
  const showError = errors[name] && touched[name]
  const onChangeValue = (e) => {
    const { name, value } = e.target
    form.setFieldValue(name, value)
    if (name === 'city') {
      onChangeFiled(e)
      form.setFieldValue('district', '')
    }
    if (name === 'district') {
      onChangeFiled(e)
      form.setFieldValue('commune', '')
    }
  }
  return (
    <div className="form__field">
      <div className="form__group">
        <select
          name={name}
          value={value}
          {...field}
          onChange={(e) => onChangeValue(e)}
        >
          <option value="">
            {placeholder}
          </option>
          {
            options.map((option, index) => {
              return (
                <option
                  value={option.name}
                  key={index}
                >
                  {option.name}
                </option>
              )
            })
          }
        </select>
      </div>
      {
        showError ?
          (<div className="form__error">{errors[name]}</div>) : null
      }
    </div >
  )
}

export default SelectField
