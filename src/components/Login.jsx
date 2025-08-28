import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { supabase } from "../config/config";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    const onSubmitHandler = async(e) => {
    e.preventDefault();
       try {
            if(!formData.email || !formData.password) {
                toast.error("Please fill in all fields.");
                return;
            }

            const { data, error} = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            })
            if(error){
                throw error
            }

            setFormData({
                email: '',
                password: ''
            });
            navigate('/');
            console.log("User logged in:", data);
            toast.success("Login successful!");
       } catch (error) {
             console.error("Login error:", error.message);
            toast.error("Login failed. Please check your forms.");
       }
    }

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto flex flex-wrap items-center">
                
                    <form onSubmit={onSubmitHandler} className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={onChangeHandler}  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                         <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" id="password" name="password" value={formData.password} onChange={onChangeHandler} autoComplete="current-password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            <p className="text-xs text-gray-500 mt-1">
                            <Link to="/forgot" className="text-blue-700">Forgot Password?</Link>
                        </p>
                        </div>
                        <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
                        <p className="text-xs text-gray-500 mt-3">
                            Don’t have an account?{" "}
                            <Link to="/register" className="text-blue-700">Sign Up</Link>
                        </p>

                        
                    </form>
                </div>
            </section>
        </>
    );
}
export default Login;