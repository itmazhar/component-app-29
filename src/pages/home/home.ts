import { Component, ErrorHandler } from '@angular/core';
import { AlertController, NavController,ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alertCtrl:AlertController,
    public actionSheet:ActionSheetController,
    public navCtrl: NavController) {

  }

  showAction(){
    const acSheet = this.actionSheet.create({
      title:'Test Action',
      buttons:[
        {
        text: 'Information',
        role: 'Info',
        handler: () => {
          console.log('Destructive clicked');
      }
     }
    ]
  });
  acSheet.present();
 }


 showAlert1(){
   const alert = this.alertCtrl.create({
     title: 'Confirm Answer!!',
     subTitle: 'Azhar Musor',
     buttons: [
     { 
      text: 'OK'
    },
  {
      text: 'Cancel',
      handler: () => {
        console.log("Cancel");
      },
    }] 
   });
   alert.present();
 }
}

