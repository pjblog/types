import { IArticle } from "../article";
import { IMedia } from "../media";
import { IProfile } from "../user";

export const ArticlesURL = '/-/article';
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
  dataSource: (IMedia & {
    article: IArticle
  })[],
}

export type Props = {
  meta: IMedia,
  profile: IProfile,
  query: Partial<IArticlesRequest>,
}