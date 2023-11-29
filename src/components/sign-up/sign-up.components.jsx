import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';
import FormInputComponent
  from '../../components/form-input/form-input.component';
import ButtonComponent from "../button/button.component";
import './sign-up.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpComponents = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formFields.password !== formFields.confirmPassword) {
      alert('Password does not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      alert('User successfully created');
      resetFields();
    } catch (err) {
      // console.error('error creating user', err.message);
      if (err.code === 'auth/email-already-in-use') {
        alert('Email already in use')
      } else {
        console.log(err);
        console.log('user creation error');
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div className={'sign-up-container'}>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form
        onSubmit={handleSubmit}
      >
        <FormInputComponent
          label={'Display Name'}
          id='displayName'
          name='displayName'
          required
          type="text"
          onChange={handleChange}
          value={displayName}
        />
        <FormInputComponent
          label={'Email'}
          id='email'
          name='email'
          required
          type="email"
          onChange={handleChange}
          value={email}
        />
        <FormInputComponent
          label={'Password'}
          id='password'
          name='password'
          required
          type="password"
          onChange={handleChange}
          value={password}
        />
        <FormInputComponent
          label={'Confirm password'}
          id='confirmPassword'
          name='confirmPassword'
          required
          type="password"
          onChange={handleChange}
          value={confirmPassword}
        />
        <ButtonComponent type={'submit'}>
          Sign up
        </ButtonComponent>
      </form>
    </div>
  )
}

export default SignUpComponents;