import { ThemeBaseProps } from "./base";

export interface Props extends ThemeBaseProps<'close'> {
  reason: string,
};