import { Container, CustomInput, Section, Dropdown } from "components";
import { Provinces, Countries, States } from "constants/default-constants";
import { DashboardLayout } from "layouts";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { ICustomer } from "src/services";
import DashboardHeaderTitle from "../../../components/dashboard/dashboard-header-title";

const defaultValues: ICustomer = {
  billingCountry: { id: "1", name: "Canada", value: "CAN" },
};

export const NewCustomer = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<ICustomer>({
    defaultValues,
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldUseNativeValidation: false,
  });
  console.log("Errors: ", errors);
  const formData = watch();

  const provinces = useMemo(
    () =>
      Object.keys(Provinces).map((province, index) => {
        return {
          id: index.toString(),
          name: Provinces[province],
          value: province,
        };
      }),
    []
  );

  const states = useMemo(
    () =>
      Object.keys(States).map((state, index) => {
        return {
          id: index.toString(),
          name: States[state],
          value: state,
        };
      }),
    []
  );

  const countries = useMemo(
    () =>
      Object.keys(Countries).map((country, index) => {
        return {
          id: index.toString(),
          name: Countries[country],
          value: country,
        };
      }),
    []
  );

  console.log("FormData: ", formData);
  //TODO formData is not working
  const isUSA = false;
  const isCanada = true;

  return (
    <DashboardLayout>
      <Section>
        <Container className="p-6">
          <DashboardHeaderTitle>
            <h3>Add New Customer</h3>
          </DashboardHeaderTitle>
          <form className="p-8 bg-white rounded shadow-lg">
            <fieldset className="grid md:grid-cols-2 md:gap-6">
              <legend className="mb-4 md:mb-10">
                <h4>Billing Address</h4>
              </legend>
              <CustomInput
                name="firstName"
                label="First Name"
                control={control}
                required //TODO how to add rules
              />
              <CustomInput
                name="lastName"
                label="Last Name"
                control={control}
                required
              />
            </fieldset>
            <CustomInput
              name="billingCompany"
              label="Company Name"
              control={control}
              required
            />
            <div className="grid md:grid-cols-2 md:gap-6">
              <CustomInput
                name="billingPhone"
                label="Phone"
                control={control}
                required
              />
              <CustomInput
                name="billingEmail"
                label="Email"
                control={control}
                type="email"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <CustomInput
                name="billingAddress1"
                label="Address Line 1"
                control={control}
                required
              />
              <CustomInput
                name="billingAddress2"
                label="Address Line 2"
                control={control}
              />
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <CustomInput
                name="billingCity"
                label="City"
                control={control}
                required
              />
              <Dropdown
                name="billingCountry"
                label="Country"
                control={control}
                data={countries}
                defaultValue={countries[0]}
                required
              />
            </div>
            {isCanada ? (
              <div className="grid md:grid-cols-2 md:gap-6">
                <Dropdown
                  label="Choose Province"
                  name="billingProvince"
                  data={provinces}
                  control={control}
                  defaultValue={{}}
                  required={isCanada}
                />

                <CustomInput
                  name="billingPostalCode"
                  label="Postal Code"
                  control={control}
                  required={isCanada}
                />
              </div>
            ) : null}
            {isUSA ? (
              <div className="grid md:grid-cols-2 md:gap-6">
                <Dropdown
                  label="Choose State"
                  name="billingProvince"
                  data={states}
                  control={control}
                  defaultValue={{}}
                  required={isUSA}
                />

                <CustomInput
                  name="billingPostalCode"
                  label="ZIP Code"
                  control={control}
                  required={isUSA}
                />
              </div>
            ) : null}
            <button>Submit</button>
          </form>
        </Container>
      </Section>
    </DashboardLayout>
  );
};

export default NewCustomer;
