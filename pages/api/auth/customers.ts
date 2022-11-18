import type { NextApiRequest, NextApiResponse } from "next";
import { getCustomers, ICustomer } from "src/services";

const customers = async (
  req: NextApiRequest,
  res: NextApiResponse<Array<ICustomer> | Error>
) => {
  try {
    const customers = await getCustomers();
    return res.status(200).json(customers);
  } catch (error) {
    return res
      .status(500)
      .json(new Error("There was an error. Please try again later."));
  }
};

export default customers;
