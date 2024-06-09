import { useForm } from "react-hook-form";

const Users = () => {
  const { register, formState } = useForm<{ email: string }>();
  return (
    <>
      <input
        {...register("email", {
          required: {
            value: true,
            message: "The email is required",
          },
          maxLength: { value: 10, message: "Too many characters" },
        })}
        placeholder="Emil"
      />
      <p>{}</p>
    </>
  );
};

export { Users };
