import type { NextApiRequest, NextApiResponse } from "next";
import { getCustomers } from "src/services";
import { IPaginatedCustomers } from "../../../src/services/getPaginatedCustomers";

const customers = async (
  req: NextApiRequest,
  res: NextApiResponse<IPaginatedCustomers | Error>
) => {
  try {
    const customers = await getCustomers();
    console.log(customers);
    return res.status(200).json(customers);
  } catch (error) {
    return res
      .status(500)
      .json(new Error("There was an error. Please try again later."));
  }
};

export default customers;
