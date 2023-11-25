import './button.style.scss';

const BUTTON_TYPES_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

const ButtonComponent = ({children, buttonType, ...otherprops}) => {
  return (
    <button {...otherprops} className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}>
      {children}
    </button>
  )
}

export default ButtonComponent