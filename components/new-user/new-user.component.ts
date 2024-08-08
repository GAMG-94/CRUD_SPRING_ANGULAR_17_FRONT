import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})

export class NewUserComponent implements OnInit {

  formUsuarios!: FormGroup;

  constructor(
    private usuarioService:UsuarioService,
    private fb: FormBuilder,
    private router:Router
  ){}

  ngOnInit(){
    this.formUsuarios = this.fb.group({
      nombre: [null, [Validators.required]],
      cant: [null, [Validators.required]],
      fees: [null, [Validators.required]],
      block: [null, [Validators.required]]
    });
  }

  nuevoUsuario() {
    console.log(this.formUsuarios.value);
    this.usuarioService.postUsuario(this.formUsuarios.value).subscribe((res) => {
      console.log(res);
      this.router.navigate([""]);
    });
  }
}
