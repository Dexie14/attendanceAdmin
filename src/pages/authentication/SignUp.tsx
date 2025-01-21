import InputField from "@/components/input/InputField";
import PasswordInput from "@/components/input/PasswordInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";

import { useNavigate } from "react-router-dom";

const Registerschema = z
  .object({
    email: z
      .string()
      .email({
        message: "Please enter the correct email for a staff account.",
      })
      .refine((s) => !s.includes(" "), "No spaces allowed"),
    companyName: z
      .string()
      .min(1, { message: "Company name must be filled" })
      .refine((s) => !s.includes(" "), { message: "No spaces allowed" }),
    password: z
      .string()
      .min(8, { message: "password must contain at least 8 characters" }),
    confirmPassword: z.string().min(8, {
      message: "Confirm Password must contain at least 8 characters",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof Registerschema>;

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      companyName: "",
      password: "",
    },
    resolver: zodResolver(Registerschema),
    mode: "onChange",
  });

  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (data[key] !== undefined && data[key] !== null) {
          formData.append(key, data[key].toString());
        }
      });

      console.log(formData);
      if (formData) {
        navigate("/admin");
      }
    } catch (error) {
      console.log("An error occurred: ", error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-[50%] sm:p-8 p-4 w-11/12 h-[70vh] overflow-y-scroll scrollbar-hidden rounded-[12px] bg-white shadow-authshadow"
      >
        <h2 className="text-center text-2xl font-bold text-mediumBlue my-6">
          Sign Up
        </h2>
        <section>
          {errors.companyName && (
            <div className="w-full border border-dashed border-red-500 px-4 py-1  my-4 text-black text-sm font-semibold">
              {errors.companyName?.message}
            </div>
          )}
          <InputField
            label="Company Name"
            type="text"
            {...register("companyName")}
            name="companyName"
            placeholder="Enter company name"
          />

          {errors.email && (
            <div className="w-full border border-dashed border-red-500 px-4 py-1  my-4 text-black text-sm font-semibold">
              {errors.email?.message}
            </div>
          )}
          <InputField
            label="Email Address"
            type="email"
            {...register("email")}
            name="email"
            placeholder="Enter email address"
          />

          <div className="mb-4">
            {errors.password && (
              <div className="w-full border border-dashed border-red-500 px-4 py-1  my-7 text-errorBlack text-sm font-semibold">
                {errors.password?.message}
              </div>
            )}
            <PasswordInput
              {...register("password")}
              name="password"
              placeholder="Enter your password"
              label="Password"
            />
          </div>
          <div>
            {errors.confirmPassword && (
              <div className="w-full border border-dashed border-red-500 px-4 py-1  my-7 text-errorBlack text-sm font-semibold">
                {errors.confirmPassword?.message}
              </div>
            )}
            <PasswordInput
              {...register("confirmPassword")}
              name="confirmPassword"
              placeholder="Confirm your password"
              label="Confirm Password"
            />
          </div>
          <Button className="h-14 w-full mt-8  rounded-[28px] text-white bg-deepBlue mx-auto">
            Signup
          </Button>
        </section>
      </form>
    </div>
  );
};

export default SignUp;
