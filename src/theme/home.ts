import { IMedia } from "../media";
import { IProfile } from "../user";
import { IArticleResponse } from "./article";

export const MediaURL = '/-/media';
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
  dataSource: IArticleResponse[],
}

export type Props = {
  meta: IMedia,
  profile: IProfile,
  query: Partial<IMediaRequest>,
}