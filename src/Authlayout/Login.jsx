import React from 'react'
import { useAuth } from '../Authprovider/CustomAuthhook'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router'

const Login = () => {
    const { user, setUser, signInUseremail, googleSignIn } = useAuth()
const navigate = useNavigate()
    const handleEmaillogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const pass = e.target.pass.value

        signInUseremail(email, pass)
        .then(result => {
            setUser(result.user)
            console.log(result.user)
            navigate('/')
        })
        .catch(er => console.log(er.message))
    }

    const handleGoogle = () => {
        googleSignIn()
        .then(result => {
            setUser(result.user)
            console.log(result.user)
            navigate('/')
        })
        .catch(er => console.log(er.message))
    }

    return (
        <div className="flex justify-center mt-16">
            <form onSubmit={handleEmaillogin} className="bg-white p-7 rounded-xl shadow-md w-80">
                <h2 className="text-2xl font-semibold mb-5 text-center">Login</h2>
                <div className="mb-4">
                    <label className="block text-sm mb-1">Email</label>
                    <input 
                        type="email" 
                        name="email"
                        className="border w-full p-2 rounded outline-none focus:ring-2 focus:ring-[#34533f]" 
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-sm mb-1">Password</label>
                    <input 
                        type="password" 
                        name="pass"
                        className="border w-full p-2 rounded outline-none focus:ring-2 focus:ring-[#34533f]" 
                    />
                </div>
                <button 
                    type="submit" 
                    className="bg-[#34533f] text-white py-2 rounded w-full hover:bg-[#2a4132] transition mb-4">
                    Login
                </button>

                <button 
                    type="button" 
                    onClick={handleGoogle}
                    className="flex items-center justify-center gap-2 bg-black text-white py-2 rounded w-full hover:bg-gray-800 transition">
                    <FcGoogle className="text-xl bg-white rounded-full" />
                    Sign in with Google
                </button>
                <Link to={'/auth/register'} >don't have an account? <span className='text-red-500'>Register</span></Link>
            </form>
        </div>
    )
}

export default Login
