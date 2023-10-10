import { ThemeBaseProps } from "./base";

export interface Props extends Omit<ThemeBaseProps, 'profile'> {
  status: 450,
  reason: string,
};