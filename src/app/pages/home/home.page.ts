import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Router } from '@angular/router';
import { QueryValueType } from '@angular/compiler/src/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usersList: any;
  now: Date = new Date();
  
  constructor(
    private api: ApiService,
    private router: Router
  ) { 
    this.getUsersList();

    
  }

  ngOnInit() {
    console.log('home user', this.api.user);
  }

  logout() {
    console.log('lgout');
    this.api.signOut();
  }

  getUsersList() {
    this.api.db.collection("users")
    .onSnapshot((querySnapshot)=> {
      this.usersList=[];
      console.log('userlist query', querySnapshot);
      querySnapshot.forEach((doc) =>{
        this.usersList.push(doc.data());
        console.log('users list data', doc.data());
      });
    });
  }

  openChat(usr: any){
    this.router.navigate(['/chat-room/'], { queryParams: usr, skipLocationChange: false });
  }

}
