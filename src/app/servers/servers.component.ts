import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
  // styles : ['h3 { color: red; }'] //alternative inline style
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was created yet!"



  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    },2000)
   }

  ngOnInit(): void {
  }

}
