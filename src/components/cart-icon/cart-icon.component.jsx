import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import './cart-icon.styles.scss';

const CartIconComponent = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const onIconClick = (e) => {
    e.preventDefault();
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div
      onClick={onIconClick}
      className={`cart-icon-container`}
    >
      <ShoppingIcon className={`shopping-icon`}/>
      <span className={`item-count`}>0</span>
    </div>
  )
}

export default CartIconComponent;