import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIconComponent from "../../components/cart-icon/cart-icon.component";
import CartDropdownComponent
  from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
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
          <CartIconComponent/>
        </div>
        {isCartOpen && <CartDropdownComponent/>}
      </nav>
      <Outlet/>
    </Fragment>
  )
}
export default Navigation;