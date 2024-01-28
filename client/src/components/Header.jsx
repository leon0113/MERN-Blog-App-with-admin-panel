import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

function Header() {
    const path = useLocation().pathname;
    return (
        <Navbar className='border-b-2'>
            {/* logo  */}
            <Link to={'/'} className='self-center text-sm sm:text-xl font-semibold dark:text-white px-2 py-1 rounded-lg bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 '>
                Mern Blog
            </Link>

            {/* search input for large devices  */}
            <form>
                <TextInput
                    type='text'
                    placeholder='Search...'
                    rightIcon={CiSearch}
                    className='hidden lg:inline'
                />
            </form>

            {/* mobile search button  */}
            <Button className='w-12 h-10 lg:hidden' color='gray' pill>
                <CiSearch />
            </Button>

            {/* dark mode & signIn btn  */}
            <div className='flex gap-2 md:order-2'>
                {/* dark mode btn  */}
                <Button className='w-12 h-10 hidden sm:inline' color='gray' pill >
                    <FaMoon />
                </Button>
                {/* signIn btn  */}
                <Link to={'/sign-in'}>
                    <Button gradientDuoTone='purpleToBlue' outline>
                        Sign In
                    </Button>
                </Link>

                {/* mobile menu items  */}
                <Navbar.Toggle />
            </div>

            {/* menu items  */}
            <Navbar.Collapse>
                <Navbar.Link active={path === '/'} as={'div'}>
                    <Link to={'/'}>
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/about'} as={'div'}>
                    <Link to={'/about'}>
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/projects'} as={'div'}>
                    <Link to={'/projects'}>
                        Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default Header