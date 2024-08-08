import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})

export class UpdateUserComponent implements OnInit{

  actualizarUsuario!: FormGroup;
  id: number = this.activateRoute.snapshot.params['id'];

  constructor(
    private activateRoute: ActivatedRoute,
    private service: UsuarioService,
    private fb: FormBuilder,
    private router:Router
  ){}

  ngOnInit():void {
    this.actualizarUsuario = this.fb.group({
      nombre: [null, [Validators.required]],
      cant: [null, [Validators.required]],
      fees: [null, [Validators.required]],
      block: [null, [Validators.required]]
    });

    this.getUsuarioPorId();
  }

  getUsuarioPorId(){
    this.service.getUsuarioPorId(this.id).subscribe((res) => {
      console.log(res);
      this.actualizarUsuario.patchValue(res);
    });
  }

  actUsuario(){
    this.service.getActualizarUsuario(this.id, this.actualizarUsuario.value).subscribe((res) => {
      console.log(res);
      if (this.id != null)
        this.router.navigate(['/']);
    });
  }

}
