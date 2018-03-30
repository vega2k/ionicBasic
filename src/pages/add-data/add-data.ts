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

  constructor(public navCtrl: NavController, public sqlite:SQLite, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDataPage');
  }

  save() {
    this.sqlite.create({
      name : 'mydb.db',
      location : 'default'
    }).then((db : SQLiteObject) => {
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
    }).catch((error) => {console.log(error);});
  }
}
