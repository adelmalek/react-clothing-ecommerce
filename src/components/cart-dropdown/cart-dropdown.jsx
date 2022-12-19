import './cart-dropdown.scss';

import Button from '../button/button';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'></div>
            <Button buttonType='default'>Go to checkout</Button>
        </div>
    )
};

export default CartDropdown;