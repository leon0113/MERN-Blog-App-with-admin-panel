import { Button, Label, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"

function SignUp() {
    return (
        <div className="min-h-screen mt-20">
            <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-6">
                {/* left side div */}
                <div className="flex-1">
                    <Link to={'/'} className='text-4xl font-bold dark:text-white px-2 py-1 rounded-lg  bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 '>
                        Mern Blog
                    </Link>
                    <p className="text-sm mt-5">This is a demo project. You can sign up with your email and password or with Google.</p>
                </div>
                {/*  right side div  */}
                <div className="flex-1">
                    <form className="flex flex-col gap-4">
                        <div>
                            <Label value="Enter your  username:" />
                            <TextInput
                                type="text"
                                placeholder="Username"
                                id="username"
                            />
                        </div>
                        <div>
                            <Label value="Enter your  Email:" />
                            <TextInput
                                type="text"
                                placeholder="example@gmail.com"
                                id="email"
                            />
                        </div>
                        <div>
                            <Label value="Enter your  Password:" />
                            <TextInput
                                type="text"
                                placeholder="Password"
                                id="password"
                            />
                        </div>

                        <Button gradientDuoTone='purpleToPink' type="submit">Sign Up</Button>
                    </form>
                    <div className="flex gap-2 text-sm mt-3">
                        <span>Have an account?</span>
                        <Link to="/sign-in" className="text-blue-500">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp