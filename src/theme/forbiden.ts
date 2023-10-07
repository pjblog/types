import { IUser } from "../user";
import { ThemeBaseProps } from "./base";

export interface Props extends ThemeBaseProps<'forbiden'> {
  template: 'forbiden',
  user: IUser,
}