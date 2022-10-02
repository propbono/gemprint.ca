import type { NextApiRequest, NextApiResponse } from "next";
import { DEFAULT_RESULTS_PER_PAGE } from "src/constants";
import { getPaginatedCustomers, IPaginatedCustomers } from "src/services";

const customers = async (
  req: NextApiRequest,
  res: NextApiResponse<IPaginatedCustomers | Error>
) => {
  const {
    query: { page, resultPerPage = DEFAULT_RESULTS_PER_PAGE },
  } = req;

  try {
    const customers = await getPaginatedCustomers({
      page: Number(page),
      resultPerPage: Number(resultPerPage),
    });
    console.log(customers);
    return res.status(200).json(customers);
  } catch (error) {
    return res
      .status(500)
      .json(new Error("There was an error. Please try again later."));
  }
};

export default customers;
