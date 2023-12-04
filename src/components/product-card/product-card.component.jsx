import './product-card.styles.scss';

import Button from '../button/button.component';

const ProductCardComponent = ({ product }) => {
  const { name, price, imageUrl } = product
  return (
    <div className={`product-card-container`}>
      <img
        src={imageUrl}
        alt={`${name} image`}
      />
      <div className={`footer`}>
        <span className={`name`}>{name}</span>
        <span className={`price`}>{price}</span>
      </div>
      <Button buttonType={`inverted`}>Add to cart</Button>
    </div>
  )
}

export default ProductCardComponent;