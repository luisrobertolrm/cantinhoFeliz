import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(
      private service: AuthService
    , private fb: FormBuilder
    , private _snackBar: MatSnackBar
    , private router: Router
    ) {  }

  tipo:string = "1";

  aba1Completed = false;

  selectedStepIndex = 0;

  authForm = this.fb.group({
    email: this.fb.control<string | null>(null, [Validators.required, Validators.email]),
    senha: this.fb.control<string | null>(null, Validators.required),
  });


  creaUserForm = this.fb.group({
    id: this.fb.control<string | null>(null, [Validators.required]),
    nome: this.fb.control<string | null>(null, [Validators.required, Validators.email]),
    telefone: this.fb.control<string | null>(null, Validators.required),
    whatsApp: this.fb.control<string | null>(null, Validators.required),
  });

  public loginOrCreate() {
    if(this.authForm.invalid){
      return;
    }

    if (this.tipo == "1") {
      if(this.selectedStepIndex == 0){

      this.service
        .emailSingIn(this.authForm.value.email as string, this.authForm.value.senha as string)
        .subscribe(usr => {
          if(usr.id) this.router.navigateByUrl("/");
        }, error => {
          this._snackBar.open("Erro ao realizar login", "Erro");
        })
      }
    } else {

      this.service
        .createUser(this.authForm.controls.email.value as string, this.authForm.controls.senha.value as string)
        .subscribe((usr: any) => {
          this.creaUserForm.controls.id.setValue(usr.id);
          this.selectedStepIndex = 1;
        }, error => {
          this._snackBar.open("Erro ao cadastar usuario", "Erro");
      });

    }
  }

  salvarDadosUsuario(){
    this.service
    .addUserInfo(
          this.creaUserForm.controls.id.value as string
        , this.creaUserForm.controls.nome.value as string
        , this.creaUserForm.controls.telefone.value as string
        , this.creaUserForm.controls.telefone.value as string
        )
    .subscribe(usr => {
        this.router.navigate(["/"]);
      }, error => {
        this._snackBar.open("Erro ao cadastar usuario", "Erro");
    });
  }

  public googleSingIn() {
    this.service.googleSingIn();
  }


  getErrorMessage() {

    if (this.authForm.controls.email.hasError('required') || this.authForm.controls.senha.hasError('required')) {
      return 'Campo Obrigatorio';
    }

    return this.authForm.controls.email.hasError('email') ? 'Email invalido' : '';
  }

  onStepChange($event:any){
    console.log($event);
  }
}
