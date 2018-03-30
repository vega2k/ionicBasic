import { Component } from '@angular/core';
import {AlertController, IonicPage, ItemSliding, NavController, NavParams} from 'ionic-angular';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import {EmailComposer} from "@ionic-native/email-composer";
import {SMS} from "@ionic-native/sms";

/**
 * Generated class for the DatabasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name : 'databasePage',
})
@Component({
  selector: 'page-database',
  templateUrl: 'database.html',
})
export class DatabasePage {
  private users : any;

  constructor(public navCtrl: NavController,
              private sqlite : SQLite,
              private alertCtrl : AlertController,
              private emailComposer : EmailComposer,
              private sms: SMS,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getData();
  }

  ionViewWillEnter() {
    this.getData();
  }

  getData() {
    this.sqlite.create({
      name : 'mydb.db',
      location : "default"
    }).then((db:SQLiteObject) => {
      let sql = "create table if not exists account(id INTEGER PRIMARY KEY,name TEXT,email TEXT,phone TEXT,gender TEXT)";
      db.executeSql(sql,{}).then(result => { console.log(result);})
        .catch((error) => {console.log(error)});

      let sql2 = "select * from account order by id DESC";
      db.executeSql(sql2,{}).then((result) => {
        this.users = [];
        for(let i=0; i < result.rows.length;i++){
          this.users.push({
            id:result.rows.item(i).id,
            name:result.rows.item(i).name,
            email:result.rows.item(i).email,
            phone:result.rows.item(i).phone,
            gender:result.rows.item(i).gender,
          });
        }
      }).catch((error) => {console.log(error);})

    }).catch((error) => {
      console.log(error);
    });
  }

  addData() {
    this.navCtrl.push('addDataPage',{
      mode : "add",
      profile : ''
    });
  }

  editData(item:ItemSliding,user) {
    item.close();
    this.navCtrl.push('addDataPage',{
      mode : "edit",
      user : user
    });
  }

  deleteData(item:ItemSliding,user) {
    item.close();
    let confirm = this.alertCtrl.create({
      title: '삭제',
      message: user.name + '을 삭제하시겠습니까?',
      buttons: [
        {
          text: '아니요',
          handler: () => {
            console.log('아니요 clicked');
          }
        },
        {
          text: '예',
          handler: () => {
            console.log('예 clicked');
            this.sqlite.create({
              name:'mydb.db',
              location : 'default'
            }).then((db:SQLiteObject) => {
              db.executeSql("delete from account where id=?",[user.id])
                .then((result) => {
                  this.getData();})
                .catch((error) => {console.log(error);});
            }).catch((error) => {console.log(error);});
          }
        }
      ]
    });
    confirm.present();
  }

  sendEmail(item:ItemSliding,user) {
    item.close();
    let email = {
      to: user.email,
      subject: 'To :' + user.name,
      body: '',
      isHtml: true
    };

// Send a text message using default options
    this.emailComposer.open(email);
  }

  sendSMS(item:ItemSliding,user) {
    item.close();
    let prompt = this.alertCtrl.create({
      title: 'SMS',
      message: "메세지를 작성하여 주시기 바랍니다.",
      inputs: [
        {
          name: 'Message',
          placeholder: 'Message Here....'
        },
      ],
      buttons: [
        {
          text: '취소',
          handler: data => {
            console.log('취소 clicked');
          }
        },
        {
          text: '보내기',
          handler: data => {
            this.sms.send(user.phone, data.message);
          }
        }
      ]
    });
    prompt.present();


  }

  sendCall(item:ItemSliding,user) {

  }
}
