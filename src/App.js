import { Routes, Route } from 'react-router';
import Home from './routes/home/home';

const Shop = () => {
  return (
    <h1>I am a shop page</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App;