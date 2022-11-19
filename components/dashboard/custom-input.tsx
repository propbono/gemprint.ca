import { UseControllerProps, useController } from "react-hook-form";
export interface CustomInputProps {
  name: string;
  label: string;
  type?: "text" | "email";
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

export const CustomInput = (props: CustomInputProps & UseControllerProps) => {
  const {
    name,
    label,
    type = "text",
    placeholder = "",
    required = false,
    disabled = false,
  } = props;

  const {
    field: { value, onChange },
  } = useController(props);

  return (
    <div className="relative z-0 w-full mb-6 group">
      <input
        type={type}
        name={name}
        id={name}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={name}
        className="absolute text-xs text-secondary dark:text-gray-400 -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-primary peer-focus:dark:text-primary"
      >
        {label}
        {required ? <span className="text-red-600"> *</span> : null}
      </label>
    </div>
  );
};

export default CustomInput;
