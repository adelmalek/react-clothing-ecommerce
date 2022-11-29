import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='navigation-logo-container' to='/'>
                    <div>
                        Logo
                    </div>
                </Link>
                <div className='navigation-link-container'>
                    <Link to='/shop'>
                        Shop
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;