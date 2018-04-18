import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {
  private images = [
    {src : 'assets/imgs/1.jpg',title:'클론의습격',subtitle:'41 Listings'},
    {src : 'assets/imgs/2.jpg',title:'제국의역습',subtitle:'64 Listings'},
    {src : 'assets/imgs/3.jpg',title:'제다이의귀환',subtitle:'72 Listings'},
    {src : 'assets/imgs/4.jpg',title:'시스의복습',subtitle:'28 Listings'},
    {src : 'assets/imgs/5.jpg',title:'클론전쟁',subtitle:'30 Listings'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPage');
  }

}
