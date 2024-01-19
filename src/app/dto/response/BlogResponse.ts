import {CategoryResponse} from "./CategoryResponse";

export interface BlogResponse {
  _id: string;
  title: string;
  link: string;
  category: CategoryResponse;
  description: string;
  status: boolean;
  date: string;
}
