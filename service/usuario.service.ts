import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  URL: string = 'http://localhost:9090/usuarios';

  constructor(private http: HttpClient) { }

  postUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.URL}/nuevo`, usuario);
  }

  getAllUsuarios(): Observable<any> {
    return this.http.get(`${this.URL}/todos`);
  }

  getUsuarioPorId(id: number): Observable<any> {
    return this.http.get(`${this.URL}/usuario/${id}`);
  }

  getActualizarUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put(`${this.URL}/${id}`, usuario);
  }

  eliminarPorId(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`);
  }

}
