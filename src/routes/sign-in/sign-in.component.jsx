import {useEffect} from 'react';
import {getRedirectResult} from 'firebase/auth';
import SignUpComponents from "../../components/sign-up/sign-up.components";

import {
  auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

const SignInComponent = () => {
  // useEffect(() => {
  //   (async () => {
  //     const res = await getRedirectResult(auth);
  //     if (res) {
  //       const userDocRef = await createUserDocumentFromAuth(res.user);
  //     }
  //   })();
  // }, []);

  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(res.user);

  }

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google popup</button>
      {/*<button onClick={signInWithGoogleRedirect}>Sign in with Google redirect*/}
      {/*</button>*/}
      <SignUpComponents/>
    </div>
  )
}

export default SignInComponent;