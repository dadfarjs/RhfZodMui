import { useForm } from "react-hook-form";
import { Stack, TextField } from "@mui/material";
import { SchemaType, schema } from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";

const Users = () => {
  const { register } = useForm<SchemaType>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  return (
    <Stack>
      <TextField label="name" {...register("name")} />
      <TextField label="email" {...register("email")} />
    </Stack>
  );
};

export { Users };
