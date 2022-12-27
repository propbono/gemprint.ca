import {
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
export interface CustomInputProps {
  label: string;
  type?: "text" | "email";
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

export const CustomInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: CustomInputProps & UseControllerProps<TFieldValues, TName>
) => {
  const {
    label,
    type = "text",
    placeholder = "",
    required = false,
    disabled = false,
  } = props;

  const { field, fieldState } = useController(props);

  return (
    <div className="relative z-0 w-full mb-6 group">
      <input
        {...field}
        type={type}
        name={field.name}
        id={field.name}
        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none dark:text-white ${
          !!fieldState.error
            ? "border-red-300 dark:border-red-600 dark:focus:border-red-500"
            : "border-gray-300 dark:border-gray-600 dark:focus:border-blue-500"
        } focus:outline-none focus:ring-0 focus:border-primary peer`}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
      <label
        htmlFor={field.name}
        className="absolute text-xs text-secondary dark:text-gray-400 -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-primary peer-focus:dark:text-primary"
      >
        {label}
        {required ? <span className="text-red-600"> *</span> : null}
      </label>
    </div>
  );
};

export default CustomInput;
