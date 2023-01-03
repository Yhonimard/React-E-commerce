import React from "react";
import { Label, TextInput } from "flowbite-react";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, placeholder, label }) => {
  const { control } = useFormContext();
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <>
            <div className="mb-2 block">
              <Label value={label} />
            </div>
            <TextInput
              sizing="sm"
              placeholder={placeholder}
              required
              onChange={onChange}
            />
          </>
        )}
      />
    </div>
  );
};

export default FormInput;
