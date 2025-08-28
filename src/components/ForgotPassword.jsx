import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../config/config";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmitHandler = async (e) => {
  e.preventDefault();
  console.log("Handler started");
  console.log("Form data:", formData);

  if (!formData.email) {
    console.log("Validation failed");
    toast.error("Please fill in all fields.");
    return;
  }

  try {
    const { error } = await supabase.auth.resetPasswordForEmail(formData.email, {
      redirectTo: 'http://localhost:5173/update-password'
    });

    console.log("Supabase response:", { data, error });

    if (error) {
      toast.error(error.message);
      return;
    }

    setFormData({ email: "", });
    toast.success("Password reset successful! Please check your email.");
    navigate("/login");
  } catch (err) {
    console.error("Catch block error:", err);
    toast.error("Password reset failed. Please try again.");
  }
};


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto flex flex-wrap items-center">
        <form
          onSubmit={onSubmitHandler}
          className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0"
        >
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Forgot Password Up
          </h2>

          {/* Email */}
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={onChangeHandler}
              autoComplete="username"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Forgot Password
          </button>

          {/* Login link */}
          <p className="text-xs text-gray-500 mt-3">
            Already know?{" "}
            <Link to="/login" className="text-blue-700">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
