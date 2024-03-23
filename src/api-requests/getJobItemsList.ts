import { BASE_API_URL } from "../utils/constants";
import { TJobItems } from "../utils/types";

type GetJobItemsListApiResponse = {
  public: boolean;
  sorted: boolean;
  jobItems: TJobItems[];
};

export default async function getJobItemsList(
  searchText: string
): Promise<GetJobItemsListApiResponse> {
  const res = await fetch(`${BASE_API_URL}?search=${searchText}`);
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.description);
  }
  const data = await res.json();

  return data;
}
