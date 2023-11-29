import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const onSignOutClick = async (e) => {
    e.preventDefault();
    await signOutUser();
  }

  return (
    <Fragment>
      <nav className={'navigation'}>
        <Link
          to={'/'}
          className={'logo-container'}
        >
          <CrwnLogo className={'logo'}/>
        </Link>
        <div className={'nav-links-container'}>
          <Link
            className={'nav-link'}
            to={'/shop'}
          >Shop</Link>
          {currentUser ? (
            <Link
              className={'nav-link'}
              to={'/authentication'}
              onClick={onSignOutClick}
            >Sign out</Link>
          ) : (
            <Link
              className={'nav-link'}
              to={'/sign-in'}
            >Sign in</Link>
          )}
        </div>
      </nav>
      <Outlet/>
    </Fragment>
  )
}
export default Navigation;