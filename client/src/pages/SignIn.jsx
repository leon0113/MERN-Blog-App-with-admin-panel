/* eslint-disable react/no-unescaped-entities */
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { signInFailure, signInStart, signInSuccess } from "../redux/user/userSlice";
import OAuth from "../components/OAuth";


function SignIn() {

    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error: errorMessage } = useSelector(state => state.user);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            return dispatch(signInFailure("Please fill all the fields"));
        }

        try {
            dispatch(signInStart());
            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (data.message === 'E11000 duplicate key error collection: mern-blog.users index: userName_1 dup key: { userName: "leon11" }') {
                return dispatch(signInFailure("Same name or email already in use"));
            }
            if (data.success === false) {
                dispatch(signInFailure(data.message));
            }
            //navigate to singin page after successfull singup
            if (res.ok) {
                dispatch(signInSuccess(data))
                navigate('/');
            }
        } catch (error) {
            dispatch(signInFailure("Something went wrong!"))
        }
    }

    return (
        <div className="min-h-screen mt-20">
            <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-6">
                {/* left side div */}
                <div className="flex-1">
                    <Link to={'/'} className='text-4xl font-bold dark:text-white px-2 py-1 rounded-lg  bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 '>
                        Mern Blog
                    </Link>
                    <p className="text-sm mt-5">This is a demo project. You can sign in with your email and password or with Google.</p>
                </div>
                {/*  right side div  */}
                <div className="flex-1">
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

                        <div>
                            <Label value="Enter your  Email:" />
                            <TextInput
                                type="email"
                                placeholder="example@gmail.com"
                                id="email"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label value="Enter your  Password:" />
                            <TextInput
                                type="password"
                                placeholder="*******"
                                id="password"
                                onChange={handleChange}
                            />
                        </div>

                        <Button gradientDuoTone='purpleToPink' type="submit" disabled={loading}>
                            {
                                loading ? (
                                    <>
                                        <Spinner size="sm" />
                                        <span className="pl-3">Loading...</span>
                                    </>
                                ) : "Sign In"
                            }
                        </Button>
                        <OAuth />
                    </form>
                    <div className="flex gap-2 text-sm mt-3">
                        <span>Don't have an account?</span>
                        <Link to="/sign-up" className="text-blue-500">Sign Up</Link>
                    </div>
                    {
                        errorMessage && (
                            <Alert className="mt-5" color='failure'>
                                {errorMessage}
                            </Alert>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SignIn