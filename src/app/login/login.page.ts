import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonInput, AlertController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   public formularioLogin: FormGroup;
  //public validationMessages: Object;
  constructor(public fb: FormBuilder, private alertController: AlertController, private router: Router) {  
    this.formularioLogin = this.fb.group({
    token: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[A-Z][0-9][0-9][0-9][0-9]+')]],
  })
}
get errorControl() {
  return this.formularioLogin.controls;
}

  ngOnInit() {
    this.formularioLogin = this.fb.group({
      token: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[A-Z][0-9][0-9][0-9][0-9]+')]]
    })
  }

  public async alerta() {
    const alert = await this.alertController.create({
      header: 'Precaución',
      subHeader: 'No existe las credenciales',
      message: 'Esto es una advertencia',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: ()=> {
          }
        },
        {
          text: 'Aceptar',
          role: 'confirm',
          handler: ()=> {
            
          }
        }
      ]
    });
    await alert.present();
  }

  ingresar(){
    var f = this.formularioLogin.value;
    if(f.token == 'A1242'){
        console.log('ingresado');
        this.router.navigate(['/tabs'])
        this.formularioLogin.setValue({token: ''});
    }else{
      this.alerta();
      this.formularioLogin.setValue({token: ''});
    }
  }
}
