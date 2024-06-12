import { Controller, useFormContext, FieldValues, Path } from "react-hook-form";
import { Autocomplete, Box, Checkbox, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import { Option } from "../types/option";

type Props<T extends FieldValues> = {
  name: Path<T>;
  options: Option[];
  label: string;
};

export const RHFAutocomplete = <T extends FieldValues>({
  name,
  options,
  label,
}: Props<T>) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
        <Autocomplete
          options={options}
          value={value.map((id: string) =>
            options.find((item) => item.id === id)
          )}
          getOptionLabel={(option) =>
            options.find((item) => item.id === option.id)?.label ?? ""
          }
          isOptionEqualToValue={(options, newValue) =>
            options.id === newValue.id
          }
          onChange={(_, newValue) => {
            onChange(newValue.map((item) => item.id));
          }}
          disableCloseOnSelect
          multiple
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              fullWidth
              inputRef={ref}
              error={!!error}
              helperText={error?.message}
            />
          )}
          renderOption={(props, option, { selected }) => (
            <Box {...props}>
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                checked={selected}
              />
            </Box>
          )}
        />
      )}
    />
  );
};
