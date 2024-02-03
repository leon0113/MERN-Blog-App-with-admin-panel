import { Footer } from 'flowbite-react';
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




export default function FooterCom() {
    return (
        <Footer container className='border border-t-8 border-teal-500'>
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                    {/* logo section  */}
                    <div className="">
                        <Link to={'/'} className='self-center text-lg sm:text-xl font-semibold dark:text-white px-2 py-1 rounded-lg bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 '>
                            Mern Blog
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-4 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title='About' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='/' target='_blank' rel='noopener noreferrer'>
                                    My Goal
                                </Footer.Link>
                                <Footer.Link href='/' target='_blank' rel='noopener noreferrer'>
                                    Vision 2024
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Follow Us' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='/' target='_blank' rel='noopener noreferrer'>
                                    Github
                                </Footer.Link>
                                <Footer.Link href='/' target='_blank' rel='noopener noreferrer'>
                                    Discord
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Legal' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='/' target='_blank' rel='noopener noreferrer'>
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href='/' target='_blank' rel='noopener noreferrer'>
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href='#' by="Tahjib Hossain Leon" year={new Date().getFullYear()} />
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <Footer.Icon href='#' icon={FaFacebook} />
                        <Footer.Icon href='#' icon={FaTwitter} />
                        <Footer.Icon href='#' icon={FaDiscord} />
                        <Footer.Icon href='#' icon={FaSnapchatGhost} />
                        <Footer.Icon href='#' icon={FaInstagram} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}