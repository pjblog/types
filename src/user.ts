export interface IProfile extends IUser {
  id: number,
  forbiden: boolean,
  level: number,
  thirdpart: boolean,
  thirthpart_name: string,
  website: string,
  gmtc: string | Date,
  gmtm: string | Date,
}

export interface IUser {
  account: string,
  nickname: string,
  email: string,
  avatar: string,
}