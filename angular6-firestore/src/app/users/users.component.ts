import { Component, OnInit } from '@angular/core';
import { FireStoreService } from '../fire-store.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor(private service: FireStoreService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(data => {
      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()
        } as User;
      })
    });
  }
  create(user: User) {
    this.service.createUser(user);
  }

  update(user: User) {
    this.service.updateUser(user);
  }

  delete(id: string) {
    this.service.deleteUser(id);
  }

}
