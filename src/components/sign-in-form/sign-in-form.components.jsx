import {useState} from 'react';

import FormInputComponent from "../form-input/form-input.component";
import ButtonComponent from "../button/button.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import './sign-in-form.style.scss';

const defaultFormFields = {
  signInEmail: '',
  signInPassword: '',
}

const SignInFormComponents = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {signInEmail, signInPassword,} = formFields

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  const resetFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormFields({...formFields, [name]: value});
  }

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(signInEmail, signInPassword);
      resetFields();
      console.log(user);
    } catch (err) {
      if (err.code === 'auth/invalid-login-credentials') alert('Invalid login credentials!');
      console.log(err);
    }
  }


  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={onFormSubmit}>
        <FormInputComponent
          label={'Email'}
          id={'signInEmail'}
          name={'signInEmail'}
          onChange={handleChange}
          type={'email'}
          value={signInEmail}
        />
        <FormInputComponent
          label={'Password'}
          id={'signInPassword'}
          name={'signInPassword'}
          onChange={handleChange}
          type={'password'}
          value={signInPassword}
        />
        <div className={'buttons-container'}>
          <ButtonComponent type={'submit'}>Sign in</ButtonComponent>
          <ButtonComponent
            buttonType={'google'}
            onClick={signInWithGoogle}
          >Sign in with Google</ButtonComponent>
        </div>
      </form>
    </div>
  )
}

export default SignInFormComponents;