import { Component } from '@angular/core';
import {
  ActionSheetController, AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams,
  Platform, ToastController
} from 'ionic-angular';
import {LoadingProvider} from "../../providers/loading/loading";
import {AccountInterface} from "../../interfaces/account";

/**
 * Generated class for the ComponentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'componentPage',
})
@Component({
  selector: 'page-component',
  templateUrl: 'component.html',
})
export class ComponentPage {
  private accountData = {} as AccountInterface;

  // private accountData = {
  //   name : '',
  //   email : ''
  // }

  constructor(public navCtrl: NavController,
              public actionsheetCtrl:ActionSheetController,
              public platform:Platform,
              public modalCtrl : ModalController,
              public alertCtrl : AlertController,
              public toastCtrl : ToastController,
              public loadingCtrl : LoadingController,
              public loadingProvider : LoadingProvider,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentPage');
  }

  actionSheet() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Choose Menu',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Search',
          icon: !this.platform.is('ios') ? 'search' : null,
          handler: () => {
            console.log('Search clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  modal() {
    let modal = this.modalCtrl.create('modalPage');
    modal.onDidDismiss(data => {
      console.log(data);
    });
    modal.present();
  }

  slide() {
    this.navCtrl.push('slidePage');
  }

  promptAlert() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "이름과 E-Mail를 입력하세요",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name 입력'
        },
        {
          name: 'email',
          placeholder: 'Email 입력'
        },
      ],
      buttons: [
        {
          text: '취소',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '저장',
          handler: data => {
            this.accountData = {
              name : data.name,
              email : data.email
            }
            this.navCtrl.push('navPage',{account:this.accountData});
          }
        }
      ]
    });
    prompt.present();
    console.log(this.accountData);
  }

  toast() {
    let toast = this.toastCtrl.create({
      message: '3초 동안 보였다가 사라집니다.',
      duration: 3000,
      position : 'top',
    });
    toast.present();
  }

  // loading() {
  //   let loading = this.loadingCtrl.create({
  //     content: '잠시만 기다려주세요...'
  //   });
  //
  //   loading.present();
  //
  //   setTimeout(() => {
  //     loading.dismiss();
  //   }, 3000);
  // }

  loading() {
    this.loadingProvider.show()

    setTimeout(() => {
      this.loadingProvider.hide();
    }, 3000);
  }
}
