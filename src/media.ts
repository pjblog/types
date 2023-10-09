import { ITag } from "./tag";
import { IUser } from "./user";

export interface IMedia {
  id: number,
  title: string,
  token: string,
  count: number,
  description: string,
  date: string | Date,
  modified: string | Date,
  type: MEDIA_TYPE,
  category: {
    id: number,
    name: string,
  },
  author: IUser,
  tags?: ITag[],
}

export enum MEDIA_TYPE {
  ARTICLE,
  PICTURE,
  VIDEO,
}