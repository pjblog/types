import { ThemeBaseProps } from "./base";
import { IArticleResponse } from './article';
import { ICategory } from "../category";

export type IArticlesRequest = {
  tag: string | number,
  category: number,
  page: number,
  keyword: string,
}

export type IArticlesResponse = {
  total: number,
  page: number,
  size: number,
  dataSource: IArticleResponse[],
}

export interface Props extends ThemeBaseProps {
  query: Partial<IArticlesRequest>,
  data: IArticlesResponse,
  categories: ICategory[],
}