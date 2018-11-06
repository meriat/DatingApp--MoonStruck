import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom-window',
  templateUrl: './chatroom-window.component.html',
  styleUrls: ['./chatroom-window.component.css']
})
export class ChatroomWindowComponent implements OnInit {

  //replace with firebase data
  public dummyData = [
    {
      message: "test message from David",
      createdAt: new Date(),
      sender:{
        firstName: "David",
        lastName: "Zhu",
        photoUrl: 'https://avatars1.githubusercontent.com/u/41922877?s=460&v=4'
      }
    },
    {
      message: "test message from Connor",
      createdAt: new Date(),
      sender:{
        firstName: "Connor",
        lastName: "McCarthy",
        photoUrl: 'https://avatars3.githubusercontent.com/u/40745991?s=460&v=4'
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
