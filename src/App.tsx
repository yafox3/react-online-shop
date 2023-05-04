import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import Cart from './pages/Cart/Cart'
import Shop from './pages/Shop/Shop'

const App: FC = () => {
	return (
        <BrowserRouter>
            <div className='container'>
                <NavBar />
               <main className='main'>
                    <Routes>
                        <Route path='/' element={<Shop />} />
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='*' element={<Shop />} />
                    </Routes>
               </main>
    			<Footer />
            </div>
        </BrowserRouter>
	)
}

export default App
