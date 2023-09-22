export interface IProfile {
  id: number,
  account: string,
  nickname: string,
  email: string,
  avatar: string,
  forbiden: boolean,
  level: number,
  thirdpart: boolean,
  thirthpart_name: string,
  website: string,
  gmtc: string,
  gmtm: string,
}

export interface IUser {
  account: string,
  nickname: string,
  email: string,
  avatar: string,
}