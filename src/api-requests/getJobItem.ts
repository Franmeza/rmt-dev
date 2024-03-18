import { BASE_API_URL } from "../utils/constants";
import { TJobItem } from "../utils/types";

type GetJobItemApiResponse = {
  public: boolean;
  jobItem: TJobItem;
};

export default async function getJobItem(
  id: number | null
): Promise<GetJobItemApiResponse> {
  const res = await fetch(`${BASE_API_URL}/${id}`);
  const data = await res.json();

  return data;
}
