import { useForm } from "react-hook-form";

type LoginFormInputs = {
  mobile: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium">Password *</label>
            <input
              type="password"
              maxLength={5}
              {...register("password", {
                required: "Password is required",
                maxLength: { value: 5, message: "Password must be 5 digits" },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Password must contain only numbers",
                },
              })}
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
