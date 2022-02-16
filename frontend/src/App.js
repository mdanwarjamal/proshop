import Header from './components/Header'
import Footer from './components/Footer'

import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container className='py-3'>
          <h1>MERN eCommerce</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
