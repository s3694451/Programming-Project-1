import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Comment } from '../models/comment'
import { Post } from '../models/post'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postUrl = environment.baseUrl + 'api/post';

  constructor(private httpClient: HttpClient, private router: Router) { }

  //Returns all posts
  public getPosts() {
    return this.httpClient.get(this.postUrl);
  }

  //Gets a post by id
  public getPost(postId: number) {
    return this.httpClient.get(this.postUrl + '/' + postId);
  }

  //Gets posts made by user
  public getPostsByUser(userId: number) {
    return this.httpClient.get(this.postUrl + '/user/' + userId);
  }

  //Gets posts to display on homepage, gets posts by the users friends
  public getPostsForUser(userId: number) {
    return this.httpClient.get(this.postUrl + '/for/' + userId);
  }

  //Adding a comment to a piost
  public addCommentToPost(comment: Comment, postId: number) {

  }

  //Deleting a post
  public deletePost(postId: number) {

  }

  //Validating to make sure its ... valid
  public validatePost(post: Post) {

  }

  //Sending a post to the backend
  public createPost(post: Post) {

  }

  //Deleting a comment
  public deleteComment(commentId: number) {

  }
}
