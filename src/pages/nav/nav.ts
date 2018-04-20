import { Component } from '@angular/core';
import {AlertController, IonicPage, ItemSliding, NavController, NavParams} from 'ionic-angular';
import {AccountInterface} from "../../interfaces/account";
import {EmailComposer} from "@ionic-native/email-composer";
import {SMS} from "@ionic-native/sms";

/**
 * Generated class for the NavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'navPage',
})
@Component({
  selector: 'page-nav',
  templateUrl: 'nav.html',
})
export class NavPage {
  private accountData = {} as AccountInterface;

  // private accountData = {
  //   name : '',
  //   email : ''
  // }

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl : AlertController,
              private emailComposer : EmailComposer,
              private sms: SMS) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('account'));
    this.accountData = this.navParams.get('account');
  }

  sendEmail(account) {
    let email = {
      to: account.email,
      subject: 'To :' + account.name,
      body: '',
      isHtml: true
    };

    this.emailComposer.open(email);
  }

  sendSMS(account) {
    let prompt = this.alertCtrl.create({
      title: 'SMS',
      message: "메세지를 작성하여 주시기 바랍니다.",
      inputs: [
        {
          name: 'message',
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
            this.sms.send(account.phoneNumber, data.message);
          }
        }
      ]
    });
    prompt.present();
  }
}
