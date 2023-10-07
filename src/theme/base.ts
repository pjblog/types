import { IMeta } from "../meta";
import { IProfile } from "../user";

export type Pages = 'article' | 'articles' | 'close' | 'error' | 'forbiden' | 'home' | 'notfound';

export interface ThemeBaseProps<T extends Pages> {
  meta: IMeta,
  profile: IProfile,
  tempalte: T,
}