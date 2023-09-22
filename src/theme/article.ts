import { IArticle } from "../article";
import { IMedia } from "../media";
import { IProfile } from "../user";

export const ArticleURL = (code: string) => `/-/article/${code}`;
export type IArticleResponse = IMedia & {
  article: IArticle,
}

export type Props = {
  meta: IMedia,
  profile: IProfile,
  query: {
    page: number,
  },
}