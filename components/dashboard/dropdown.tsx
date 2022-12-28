import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import {
  FieldPath,
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

export interface IDropdownOption {
  id: string;
  name: string;
  value: string;
}

export interface DropdownProps {
  label: string;
  data: Array<IDropdownOption>;
  required?: boolean;
}

export const Dropdown = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: DropdownProps & UseControllerProps<TFieldValues, TName>
) => {
  const { data, required = false, label } = props;
  const { field, fieldState } = useController(props);
  const [query, setQuery] = useState("");

  const filteredData =
    query === ""
      ? data
      : data.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="relative z-50 w-full mb-6 group">
      <Combobox {...field}>
        <div className="relative">
          <div>
            <Combobox.Label className="absolute text-xs text-secondary dark:text-gray-400 -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-primary peer-focus:dark:text-primary">
              {label}
              {required ? <span className="text-red-600"> *</span> : null}
            </Combobox.Label>
            <Combobox.Input
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white ${
                !!fieldState.error
                  ? "border-red-300 focus:red-primary dark:border-red-600 dark:focus:border-primary"
                  : "border-gray-300 focus:border-primary dark:border-gray-600 dark:focus:border-primary"
              } focus:outline-none focus:ring-0  peer`}
              onChange={(event) => setQuery(event.target.value)}
              displayValue={(value: string) =>
                value
                  ? data.filter((item) => item.value === value)[0]?.name
                  : ""
              }
            />

            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredData.length === 0 && query !== "" ? (
                <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">
                  Nothing found.
                </div>
              ) : (
                filteredData.map((item) => (
                  <Combobox.Option
                    key={item.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-primary text-white" : "text-secondary"
                      }`
                    }
                    value={item.value}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-primary"
                            }`}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default Dropdown;
