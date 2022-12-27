import { Company, ShippingAddress } from "@prisma/client";
import { Container, CustomInput, Section, Dropdown } from "components";
import { Provinces, Countries, States } from "constants/default-constants";
import { DashboardLayout } from "layouts";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
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
  shippingAddresses: Omit<ShippingAddress, "id" | "companyId">[];
}

export const NewCustomer = () => {
  const {
    watch,
    control,
    formState: { errors },
  } = useForm<ICustomer>({
    defaultValues: defaultValues,
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
  console.log("IsUSA: ", isUSA);
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
                control={control}
                rules={{ required: true }}
                label="First Name"
                required // FInd a way to pass control value
              />
              <CustomInput
                name="lastName"
                control={control}
                rules={{ required: true }}
                label="Last Name"
                required // FInd a way to pass control value
              />
            </fieldset>
            <CustomInput
              name="billingCompany"
              control={control}
              rules={{ required: true }}
              label="Company Name"
              required // FInd a way to pass control value
            />
            <div className="grid md:grid-cols-2 md:gap-6">
              <CustomInput
                name="billingPhone"
                control={control}
                rules={{ required: true }}
                label="Phone"
                required // FInd a way to pass control value
              />
              <CustomInput
                name="billingEmail"
                control={control}
                rules={{ required: true }}
                label="Email"
                required // FInd a way to pass control value
              />
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <CustomInput
                name="billingAddress1"
                control={control}
                rules={{ required: true }}
                label="Address Line 1"
                required // FInd a way to pass control value
              />
              <CustomInput
                name="billingAddress2"
                control={control}
                rules={{ required: true }}
                label="Address Line 2"
                required // FInd a way to pass control value
              />
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <CustomInput
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
                <CustomInput
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
                <CustomInput
                  name="billingPostalCode"
                  control={control}
                  rules={{ required: isUSA }}
                  label="ZIP"
                  required={isUSA} // FInd a way to pass control value
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
