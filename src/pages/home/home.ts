import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  disabledSwitch = false;

  items = [
    {"id":1, name:"UI Component"},
    {"id":2, name:"SQLite"},
    {"id":3, name:"세번째 item"},
    {"id":4, name:"네번째 item"},
    {"id":5, name:"다섯번째 item"},
  ];

  userName : any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad HomePage 1');
  // }
  // ionViewWillEnter() {
  //   console.log('ionViewWillEnter HomePage 2');
  // }
  // ionViewDidEnter() {
  //   console.log('ionViewDidEnter HomePage 3');
  // }
  // ionViewWillLeave() {
  //   console.log('ionViewWillLeave HomePage 4');
  // }
  // ionViewDidLeave() {
  //   console.log('ionViewDidLeave HomePage 5');
  // }
  // ionViewWillUnload() {
  //   console.log('ionViewWillUnload HomePage 6');
  // }
  // ionViewCanEnter() {
  //   console.log('ionViewCanEnter HomePage 7');
  // }
  // ionViewCanLeave() {
  //   console.log('ionViewCanLeave HomePage 8');
  // }

  itemSelected(item){
    if (item.id === 1) {
      this.navCtrl.push('componentPage');
    }else if ( item.id === 2) {
      this.navCtrl.push('databasePage');
    }
  }

  clickButton(event) {
    console.log(event);
    this.navCtrl.push('bindPage');
  }
}
