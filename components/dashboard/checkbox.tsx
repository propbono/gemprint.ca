import { Switch } from "@headlessui/react";
import {
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

export interface ICustomCheckboxProps {
  label: string;
  required?: boolean;
}

export const Checkbox = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: ICustomCheckboxProps & UseControllerProps<TFieldValues, TName>
) => {
  const { field, fieldState } = useController(props);
  const { label, required = false } = props;

  return (
    <Switch.Group>
      <div className="flex items-center gap-2 mb-4">
        <Switch
          checked={field.value}
          onChange={field.onChange}
          className={`${
            field.value ? "bg-primary" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
            !!fieldState.error ? "bg-red-300" : ""
          }`}
        >
          <span
            className={`${
              field.value ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
        <Switch.Label className="mr-4">
          {label}
          {required ? <span className="text-red-600"> *</span> : null}
        </Switch.Label>
      </div>
    </Switch.Group>
  );
};

export default Checkbox;
