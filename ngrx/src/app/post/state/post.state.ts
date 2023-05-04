import { post } from "src/app/module/post.module";


export interface postinterface{
    post:post[];
}

export const postvalue:postinterface ={
    post:[
        {id:1,content:'Hello',discription:'Good Bye'},
        {id:2,content:'H1',discription:'Bye'}
    ]
}