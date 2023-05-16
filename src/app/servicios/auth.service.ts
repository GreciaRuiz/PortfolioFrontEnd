import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL= 'https://backendgruiz.onrender.com/auth/';

  constructor(private httpClient: HttpClient) { }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
  }
}
