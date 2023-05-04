import { user } from '../module/user.module';

export interface userInterFace {
  user: any | null;
  UserDataManual:user[];
}

export const userImplememtation: userInterFace = {
  user: null,
  UserDataManual:[
    { name:'Ronoa Zoro',age:'22',number:'2',company:'Strawhats',position:'Right hand'},
    { name:'Sanji',age:'22',number:'3',company:'Strawhats',position:'Cook'},
  ]
};
