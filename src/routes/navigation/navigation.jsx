import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { CartContext } from '../../contexts/cart';
import { selectCurrentUser } from '../../store/user/user.selector';

import { signOutUser } from '../../utils/firebase/firebase';

import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';

import { NavigationContainer, LogoContainer, LogoPic, NavLinks, NavLink } from './navigation.styles';

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const { isCartOpen } = useContext(CartContext);
     
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <div>
                        <LogoPic as={Logo}/>
                    </div>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser ? 
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink> : 
                        <NavLink to='/auth'>
                            SIGN IN
                        </NavLink>
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;