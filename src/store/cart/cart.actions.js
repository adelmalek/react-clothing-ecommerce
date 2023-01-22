import { createAction } from '../../utils/reducer/reducer';
import { CART_ACTION_TYPES } from './cart.types';

export const setCart = (cart) => {
    return createAction(CART_ACTION_TYPES, cart);
};