import { ThemeBaseProps } from "./base";

export interface Props extends ThemeBaseProps<'error'> {
  status: number,
  message: string,
}