import { IArticle } from "../article";
import { ICategory } from "../category";
import { IMedia } from "../media";
import { ThemeBaseProps } from "./base";

export type IArticleResponse = IMedia & {
  article: IArticle,
}

export interface Props extends ThemeBaseProps {
  query: {
    page: number,
  },
  data: IArticleResponse,
  categories: ICategory[],
}