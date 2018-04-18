import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import {UserProfileInterface} from "../../interfaces/user-profile";

/**
 * Generated class for the AddDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name : 'addDataPage',
})
@Component({
  selector: 'page-add-data',
  templateUrl: 'add-data.html',
})
export class AddDataPage {
  private userData = {} as UserProfileInterface;

  private mode : any;

  constructor(public navCtrl: NavController, public sqlite:SQLite, public navParams: NavParams) {
    this.mode = this.navParams.get('mode');
    if (this.mode === "edit") {
      this.userData = this.navParams.get('user');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDataPage');
  }

  save() {
    this.sqlite.create({
      name : 'mydb.db',
      location : 'default'
    }).then((db : SQLiteObject) => {

      if (this.mode === "add") {
        let sql = "insert into account values(NULL,?,?,?,?)";
        db.executeSql(sql,[
          this.userData.name,
          this.userData.email,
          this.userData.phone,
          this.userData.gender
        ]).then((result) => {
          console.log(result);
          this.navCtrl.pop();
        }).catch((error) => {console.log(error);})
      }else if(this.mode === "edit") {
        let sql2 = "update account set name=?,email=?,phone=?,gender=? where id=?";
        db.executeSql(sql2,[
          this.userData.name, this.userData.email, this.userData.phone, this.userData.gender,this.userData.id
        ]).then((result) => { this.navCtrl.pop();})
          .catch((error) => { console.log(error);})
      }
    }).catch((error) => {console.log(error);});
  }
}
