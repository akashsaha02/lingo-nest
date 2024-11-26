import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
    return (
        <div className='max-w-[1920px] mx-auto min-h-screen grid grid-rows-[auto_1fr_auto]'>
            <Header />
            <Outlet />
            <Footer />
            <Toaster />
        </div>
    )
}

export default Layout;