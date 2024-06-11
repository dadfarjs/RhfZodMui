import { Autocomplete, Stack, TextField } from "@mui/material";
import { RHFAutocomplete } from "../../components/RHFAutocomplete";
import { useFormContext } from "react-hook-form";
import { Schema } from "../types/schema";

const Users = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Schema>();

  return (
    <Stack sx={{ gap: 2 }}>
      {/* Stack: <div style={{display: "flex", flexDirection: "column", gap: 2}}></div> */}
      <TextField
        label="Name"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <RHFAutocomplete<Schema> name="email" />
    </Stack>
  );
};

export { Users };
