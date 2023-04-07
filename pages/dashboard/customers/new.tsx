import { Company, ShippingAddress } from "@prisma/client";
import { Container, Input, Section, Dropdown, Checkbox } from "components";
import { Provinces, Countries, States } from "constants/default-constants";
import { DashboardLayout } from "layouts";
import { useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import DashboardHeaderTitle from "../../../components/dashboard/dashboard-header-title";

// TODO fix mapping of the data it should map string to the value
const defaultValues: ICustomer = {
  firstName: "",
  lastName: "",
  billingCompany: "",
  billingCity: "",
  billingEmail: "",
  billingPhone: "",
  billingPostalCode: "",
  billingProvince: "",
  billingAddress1: "",
  billingAddress2: "",
  billingCountry: "CAN",
  isShippingSameAsBilling: false,
  shippingAddresses: [
    {
      firstName: "",
      lastName: "",
      shippingAddress1: "",
      shippingAddress2: "",
      shippingCity: "",
      shippingCompany: "",
      shippingCountry: "",
      shippingPhone: "",
      shippingPostalCode: "",
      shippingProvince: "",
    },
  ],
};

interface ICustomer extends Omit<Company, "id"> {
  isShippingSameAsBilling: boolean;
  shippingAddresses: Omit<ShippingAddress, "id" | "companyId">[];
}

export const NewCustomer = () => {
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<ICustomer>({
    defaultValues: defaultValues,
    shouldUseNativeValidation: false,
  });

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
  const formData = watch();
  console.log("FormData: ", formData);

  //TODO formData is not working
  const isUSA = formData.billingCountry === "USA";
  const isCanada = formData.billingCountry === "CAN";
  const isShippingSameAsBilling = formData.isShippingSameAsBilling;

  const onSubmit: SubmitHandler<ICustomer> = (data) => {
    console.log("SUBMITTED: ", data);
  };

  console.log("ERRORS: ", errors);

  return (
    <DashboardLayout>
      <Section>
        <Container className="p-6">
          <DashboardHeaderTitle>
            <h3>Add New Customer</h3>
          </DashboardHeaderTitle>
          <form
            className="p-8 bg-white rounded shadow-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            <fieldset>
              <legend className="mb-4 md:mb-10">
                <h4>Billing Address</h4>
              </legend>
              <div className="grid md:grid-cols-2 md:gap-6">
                <Input
                  name="firstName"
                  control={control}
                  rules={{ required: true }}
                  label="First Name"
                  required // FInd a way to pass control value
                />
                <Input
                  name="lastName"
                  control={control}
                  rules={{ required: true }}
                  label="Last Name"
                  required // FInd a way to pass control value
                />
              </div>
              <Input
                name="billingCompany"
                control={control}
                rules={{ required: true }}
                label="Company Name"
                required // FInd a way to pass control value
              />
              <div className="grid md:grid-cols-2 md:gap-6">
                <Input
                  name="billingPhone"
                  control={control}
                  rules={{ required: true }}
                  label="Phone"
                  required // FInd a way to pass control value
                />
                <Input
                  name="billingEmail"
                  control={control}
                  rules={{ required: true }}
                  label="Email"
                  required // FInd a way to pass control value
                />
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <Input
                  name="billingAddress1"
                  control={control}
                  rules={{ required: true }}
                  label="Address Line 1"
                  required // FInd a way to pass control value
                />
                <Input
                  name="billingAddress2"
                  control={control}
                  rules={{ required: true }}
                  label="Address Line 2"
                  required // FInd a way to pass control value
                />
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <Input
                  name="billingCity"
                  control={control}
                  rules={{ required: true }}
                  label="City"
                  required // FInd a way to pass control value
                />
                <Dropdown
                  name={"billingCountry"}
                  control={control}
                  label="Country"
                  rules={{ required: true }}
                  data={countries}
                  required
                />
              </div>
              {isCanada ? (
                <div className="grid md:grid-cols-2 md:gap-6">
                  <Dropdown
                    name="billingProvince"
                    control={control}
                    rules={{ required: isCanada }}
                    label="Province"
                    data={provinces}
                    required={isCanada}
                  />
                  <Input
                    name="billingPostalCode"
                    control={control}
                    rules={{ required: isCanada }}
                    label="Postal Code"
                    required={isCanada} // FInd a way to pass control value
                  />
                </div>
              ) : null}
              {isUSA ? (
                <div className="grid md:grid-cols-2 md:gap-6">
                  <Dropdown
                    name="billingProvince"
                    control={control}
                    rules={{ required: isUSA }}
                    label="State"
                    data={states}
                    required={isUSA}
                  />
                  <Input
                    name="billingPostalCode"
                    control={control}
                    rules={{ required: isUSA }}
                    label="ZIP"
                    required={isUSA} // FInd a way to pass control value
                  />
                </div>
              ) : null}
            </fieldset>
            <Checkbox
              name="isShippingSameAsBilling"
              label="Is Shipping Address same as Billing?"
              control={control}
            />
            {!isShippingSameAsBilling ? (
              <fieldset>
                <legend>Shipping Address</legend>
              </fieldset>
            ) : null}
            <div className="grid justify-end align-middle">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </Container>
      </Section>
    </DashboardLayout>
  );
};

export default NewCustomer;
