import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrl: './get-user.component.css'
})
export class GetUserComponent implements OnInit{

  usuarios:any = [];

  constructor(
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(){
    this.getAllUsuarios();
  }

  getAllUsuarios() {
    this.usuarioService.getAllUsuarios().subscribe((res) => {
      console.log(res);
      this.usuarios = res;
    });
  }

  eliminarUsuario(id: number){
    this.usuarioService.eliminarPorId(id).subscribe((res) => {
      console.log(res);
      this.getAllUsuarios();
    });
  }
}
