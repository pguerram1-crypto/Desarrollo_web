import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post, PostService } from './services/post';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.obtenerPosts();
  }

  obtenerPosts(): void {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        console.log(data);
      },
      error: (error) => {
        console.error('Error al consumir la API:', error);
      }
    });
  }
}
