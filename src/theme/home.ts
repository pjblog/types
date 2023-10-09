import { ICategory } from "../category";
import { IArticleResponse } from "./article";
import { ThemeBaseProps } from "./base";

export type IMediaItem = IArticleResponse;
export type IMediaRequest = {
  tag: string | number,
  category: number,
  page: number,
  keyword: string,
}

export type IMediaResponse = {
  total: number,
  page: number,
  size: number,
  dataSource: IMediaItem[],
}

export interface Props extends ThemeBaseProps {
  query: Partial<IMediaRequest>,
  data: IMediaResponse,
  categories: ICategory[],
}