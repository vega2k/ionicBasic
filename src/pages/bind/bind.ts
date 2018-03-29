import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'bindPage',
})
@Component({
  selector: 'page-bind',
  templateUrl: 'bind.html',
})
export class BindPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BindPage 1');
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter BindPage 2');
  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter BindPage 3');
  }
  ionViewWillLeave() {
    console.log('ionViewWillLeave BindPage 4');
  }
  ionViewDidLeave() {
    console.log('ionViewDidLeave BindPage 5');
  }
  ionViewWillUnload() {
    console.log('ionViewWillUnload BindPage 6');
  }
  ionViewCanEnter() {
    console.log('ionViewCanEnter BindPage 7');
  }
  ionViewCanLeave() {
    console.log('ionViewCanLeave BindPage 8');
  }

  goBack() {
    this.navCtrl.pop();
  }

}
