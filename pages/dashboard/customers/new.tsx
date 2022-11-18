import { Company } from "@prisma/client";
import { Container, Section } from "components";
import { DashboardLayout } from "layouts";
import { useForm, UseFormRegister } from "react-hook-form";
import { ICustomer } from "src/services";
import DashboardHeaderTitle from "../../../components/dashboard/dashboard-header-title";

export const NewCustomer = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ICustomer>();

  const company: Company = {
    firstName: "",
    lastName: "",
    billingCompany: "",
    billingEmail: "",
    billingAddress1: "",
    billingAddress2: "",
    billingCity: "",
    billingCountry: "",
    billingPhone: "",
    billingPostalCode: "",
    billingProvince: "",
  };

  return (
    <DashboardLayout>
      <Section>
        <Container className="p-6">
          <DashboardHeaderTitle>
            <h3>Add New Customer</h3>
          </DashboardHeaderTitle>
          <form className="p-8 bg-white rounded shadow-lg">
            <h4>Billing Address</h4>
            <div className="grid md:grid-cols-2 md:gap-6">
              <FloatingLabelInput
                name="firstName"
                label="First Name"
                register={register}
                required
              />
              <FloatingLabelInput
                name="lastName"
                label="Last Name"
                register={register}
                required
              />
            </div>
            <FloatingLabelInput
              name="billingCompany"
              label="Company Name"
              register={register}
            />
            <FloatingLabelInput
              name="billingPhone"
              label="Phone"
              register={register}
              required
            />
            <FloatingLabelInput
              name="billingEmail"
              label="Email"
              register={register}
              type="email"
              required
            />
            <FloatingLabelInput
              name="billingAddress1"
              label="Address Line 1"
              register={register}
              required
            />
            <FloatingLabelInput
              name="billingAddress2"
              label="Address Line 2"
              register={register}
            />
            <div className="grid md:grid-cols-2 md:gap-6">
              <FloatingLabelInput
                name="billingCity"
                label="City"
                register={register}
                required
              />
              <FloatingLabelInput
                name="billingCountry"
                label="Country"
                register={register}
              />
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <FloatingLabelInput
                name="billingProvince"
                label="Province"
                register={register}
                required
              />
              <FloatingLabelInput
                name="billingPostalCode"
                label="Postal Code"
                register={register}
                required
              />
            </div>
          </form>
        </Container>
      </Section>
    </DashboardLayout>
  );
};

export default NewCustomer;

interface FloatingLabelInputProps {
  name: string;
  label: string;
  type?: "text" | "email";
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  register: UseFormRegister<ICustomer>;
}

const FloatingLabelInput = (props: FloatingLabelInputProps) => {
  const {
    name,
    label,
    register,
    type = "text",
    placeholder = "",
    required = false,
    disabled = false,
  } = props;

  return (
    <div className="relative z-0 w-full mb-6 group">
      <input
        type={type}
        name={name}
        id={name}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        {...register(name)}
      />
      <label
        htmlFor={name}
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
        {required ? <span className="text-red-600"> *</span> : null}
      </label>
    </div>
  );
};
