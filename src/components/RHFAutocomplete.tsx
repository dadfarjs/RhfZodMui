import { Controller, useFormContext, FieldValues, Path } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";

type Props<T extends FieldValues> = {
  name: Path<T>;
};

export const RHFAutocomplete = <T extends FieldValues>({ name }: Props<T>) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={(params) => (
        <Autocomplete
          options={[
            { id: "1", label: "Texas" },
            { id: "2", label: "LA" },
          ]}
          renderInput={(params) => <TextField {...params} label="States" />}
        />
      )}
    />
  );
};
