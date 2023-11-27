// import {useEffect} from 'react';
// import {getRedirectResult} from 'firebase/auth';
// import {
//   auth,
//   signInWithGoogleRedirect,
// } from '../../utils/firebase/firebase.utils';

import SignInFormComponents
  from "../../components/sign-in-form/sign-in-form.components";
import SignUpComponents from "../../components/sign-up/sign-up.components";

import './sign-in.style.scss';

const AuthenticationComponent = () => {
  // useEffect(() => {
  //   (async () => {
  //     const res = await getRedirectResult(auth);
  //     if (res) {
  //       const userDocRef = await createUserDocumentFromAuth(res.user);
  //     }
  //   })();
  // }, []);

  return (
    <div className={'sign-in-form'}>
      <SignInFormComponents/>
      <SignUpComponents/>
    </div>
  )
}

export default AuthenticationComponent;