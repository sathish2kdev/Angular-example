import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { post } from 'src/app/module/post.module';
import { appState } from 'src/app/store/app.state';
import { savepostData } from '../state/post.actions';
import { getpostvalue } from '../state/post.selectors';
import { postinterface } from '../state/post.state';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {


  postList$!: Observable<post[]>;
  constructor(private store:Store<appState>,private fb:FormBuilder) { }

  postForm = this.fb.group({
    id:'',
    content:'',
    discription:''
  });
  ngOnInit(): void {
    
    this.postList$ = this.store.select(getpostvalue)
    console.log(this.postList$);
    
    
  }
  savePostForm(){
    console.log(this.postForm.value);
    
    const data:post ={
      id: 3,
      content: this.postForm.value.content,
      discription: this.postForm.value.discription
    }
    this.store.dispatch(savepostData({post:data}))
  }

}
