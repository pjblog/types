import { IArticle } from "../article";
import { IMedia } from "../media";
import { IMeta } from "../meta";
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
  meta: IMeta,
  profile: IProfile,
  query: Partial<IArticlesRequest>,
}