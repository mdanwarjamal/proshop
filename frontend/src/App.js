import Header from './components/Header'
import Footer from './components/Footer'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ProductDetails from './screens/ProductDetails'



const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container className='py-3'>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path={`/product/:id`} element={<ProductDetails />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
