import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import OAuth from "../components/OAuth";

function SignUp() {

    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.userName || !formData.email || !formData.password) {
            return setErrorMessage("Please fill all the fields");
        }

        try {
            setLoading(true);
            setErrorMessage(null);
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (data.message === 'E11000 duplicate key error collection: mern-blog.users index: userName_1 dup key: { userName: "leon11" }') {
                setLoading(false);
                return setErrorMessage("Same name or email already in use");
            }
            if (data.success === false) {
                setLoading(false);
                return setErrorMessage(data.message);
            }
            setLoading(false);
            //navigate to singin page after successfull singup
            if (res.ok) navigate('/sign-in');
        } catch (error) {
            setLoading(false);
            setErrorMessage("Something went wrong!");
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
                    <p className="text-sm mt-5">This is a demo project. You can sign up with your email and password or with Google.</p>
                </div>
                {/*  right side div  */}
                <div className="flex-1">
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div>
                            <Label value="Enter your  username:" />
                            <TextInput
                                type="text"
                                placeholder="Username"
                                id="userName"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label value="Enter your  Email:" />
                            <TextInput
                                type="text"
                                placeholder="example@gmail.com"
                                id="email"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label value="Enter your  Password:" />
                            <TextInput
                                type="password"
                                placeholder="Password"
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
                                ) : "Sign Up"
                            }
                        </Button>
                        <OAuth />
                    </form>
                    <div className="flex gap-2 text-sm mt-3">
                        <span>Have an account?</span>
                        <Link to="/sign-in" className="text-blue-500">Sign In</Link>
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

export default SignUp