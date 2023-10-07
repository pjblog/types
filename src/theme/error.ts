import { ThemeBaseProps } from "./base";

export interface Props extends Omit<ThemeBaseProps, 'profile'> {
  status: number,
  message: string,
}