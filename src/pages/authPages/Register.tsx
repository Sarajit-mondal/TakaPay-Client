import { useForm } from "react-hook-form";
import { NavLink } from "react-router";

type RegisterFormInputs = {
  name: string;
  surname?: string;
  mobile: string;
  password: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const onSubmit = (data: RegisterFormInputs) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium">Name *</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Surname */}
          <div>
            <label className="block text-sm font-medium">
              Surname 
            </label>
            <input
              type="text"
              {...register("surname")}
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium">Mobile Number *</label>
            <input
              type="tel"
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Enter a valid mobile number",
                },
              })}
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">
                {errors.mobile.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium">
              Password (must be exactly 5 digits) *
            </label>
            <input
              type="password"
              maxLength={5} // prevents typing more than 5
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Password must be exactly 5 digits",
                },
                maxLength: {
                  value: 5,
                  message: "Password must be exactly 5 digits",
                },
                pattern: {
                  value: /^[0-9]{5}$/, // only 5 digits allowed
                  message: "Password must be exactly 5 digits (numbers only)",
                },
              })}
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
    
          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
        {/* Login Link - Right Side */}
      <div className="flex justify-end mt-4">
        <NavLink
          to="/login"
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          Already have an account? Login
        </NavLink>
      </div>
      </div>
    </div>
  );
}
