import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController,ToastController} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  user = {
    email:'',
    username:'',
    password:'',
    gender:'male',
    age:'',
    city:'Beijing'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
          public httpClient:HttpClient,public alertCtrl:AlertController,
          public  toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp():void{
    console.log("user:",this.user);

    let url = '/signUp';
    this.httpClient.post(url,{user:this.user}).subscribe(
      (res:any)=>{
        console.log(res);
        //TODO
        if(res.status == 'exists'){
          console.error(res.status);
          //注册之前，查询邮箱是存在的，不能注册
          this.alertCtrl.create({
            title:'Error',
            subTitle:'Email is already exists.',
            buttons:['OK']
          }).present();
        }else if(res.status == 'err'){
          //注册时发生了其它错误
          this.toastCtrl.create({
            message:'服务器错误'
          }).present();
        }else{
          //status is OK
          //跳转到 homePage
          this.navCtrl.push('testPage');
        }

      },
      (error)=>{
        console.log(error);
        //TODO
      }
    );
  }

}
