import { IArticle } from "../article";
import { IMedia } from "../media";
import { IMeta } from "../meta";
import { IProfile } from "../user";

export const ArticleURL = (code: string) => `/-/article/${code}`;
export type IArticleResponse = IMedia & {
  article: IArticle,
}

export type Props = {
  meta: IMeta,
  profile: IProfile,
  query: {
    page: number,
  },
}