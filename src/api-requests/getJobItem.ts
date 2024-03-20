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
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.description);
  }
  const data = await res.json();

  return data;
}
