import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import { UserContext } from '../../contexts/user';

import './navigation.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='navigation-logo-container' to='/'>
                    <div>
                        <Logo className='logo'/>
                    </div>
                </Link>
                <div className='navigation-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/auth'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;