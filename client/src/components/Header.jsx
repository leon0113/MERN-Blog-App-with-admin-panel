import { Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Navbar className='border-b-2'>
            <Link to={'/'} className='self-center text-sm sm:text-xl font-semibold dark:text-white px-2 py-1 rounded-lg bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 '>
                Mern Blog
            </Link>
        </Navbar>
    )
}

export default Header