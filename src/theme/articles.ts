import { ThemeBaseProps } from "./base";
import { IArticleResponse } from './article';

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

export interface Props extends ThemeBaseProps<'articles'> {
  query: Partial<IArticlesRequest>,
  data: IArticlesResponse,
}