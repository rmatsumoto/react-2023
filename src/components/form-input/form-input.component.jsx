import './form-input.style.scss';

const FormInputComponent = ({label, ...otherprops}) => {
  return (
    <div className={'group'}>
      <input className={`form-input`} {...otherprops}/>
      {label && (
        <label
          className={`${otherprops.value.length ? 'shrink' : ''} form-input-label`}
          htmlFor={otherprops.name}
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default FormInputComponent;