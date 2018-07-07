import { Injectable } from '@angular/core';
// Angular http client:
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // DI
  constructor(private http: HttpClient) { }
  // Also import the HttpClient in app.module.ts to use it.
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId);
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}

// In order to use this service in a component, we have to import it.
