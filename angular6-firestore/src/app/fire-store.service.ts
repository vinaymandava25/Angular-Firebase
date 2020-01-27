import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class FireStoreService {

  constructor(private firestore: AngularFirestore) { }

  getUsers() {
    return this.firestore.collection('users_data').snapshotChanges();
  }
  createUser(user: User) {
    return this.firestore.collection('users_data').add(user);
  }

  updateUser(user: User) {
    delete user.id;
    this.firestore.doc('users/' + user.id).update(user);
  }
  deleteUser(userId: string) {
    console.log(userId)
    this.firestore.doc(userId).delete();
  }


}
