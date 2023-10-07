import { IArticle } from "../article";
import { IMedia } from "../media";
import { ThemeBaseProps } from "./base";

export type IArticleResponse = IMedia & {
  article: IArticle,
}

export interface Props extends ThemeBaseProps<'article'> {
  query: {
    page: number,
  },
  data: IArticleResponse,
}