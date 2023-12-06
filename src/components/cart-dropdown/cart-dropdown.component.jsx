import { useContext } from 'react';
import { CartContext } from "../../contexts/cart.context";
import ButtonComponent from "../button/button.component";
import CartItemComponent from '../../components/cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdownComponent = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className={`cart-dropdown-container`}>
      <div className={`cart-items`}>
        {cartItems.map((item) => {
          return (
            <CartItemComponent
              key={item.id}
              cartItem={item}
            />
          )
        })}
      </div>
      <ButtonComponent>
        Go to Checkout
      </ButtonComponent>
    </div>
  )
}

export default CartDropdownComponent;