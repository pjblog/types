import { IMeta } from "../meta";
import { IProfile } from "../user";

export interface ThemeBaseProps {
  // status: 200 | 450 | 500 | 403 | 404,
  meta: IMeta,
  profile: IProfile,
}