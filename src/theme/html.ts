import { ThemeBaseProps } from "./base";

export interface Props extends Omit<ThemeBaseProps, 'profile'> {
  dev?: boolean,
  stylesheets: string[],
  scriptLinks: string[],
  styles?: string[],
  bodyPrefixScripts?: string[],
  bodySuffixScripts?: string[],
}