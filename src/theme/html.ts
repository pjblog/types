import { IMeta } from "../meta";

export interface Props {
  meta: IMeta,
  dev?: boolean,
  stylesheets: string[],
  scriptLinks: string[],
  styles?: string[],
  bodyPrefixScripts?: string[],
  bodySuffixScripts?: string[],
}