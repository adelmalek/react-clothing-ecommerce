import { Routes, Route } from 'react-router';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';

import Spinner from './components/spinner/spinner';
import { checkUserSession } from './store/user/user.action';
import { GlobalStyle } from './global.styles';

/*
import Navigation from './routes/navigation/navigation';
import Home from './routes/home/home';
import Authentication from './routes/authentication/authentication';
import Shop from './routes/shop/shop';
import Checkout from './routes/checkout/checkout';
*/

const Navigation = lazy(() => import('./routes/navigation/navigation'));
const Home = lazy(() => import('./routes/home/home'));
const Authentication = lazy(() => import('./routes/authentication/authentication'));
const Shop = lazy(()=> import('./routes/shop/shop'));
const Checkout = lazy(() => import('./routes/checkout/checkout'));

const App = () => {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;