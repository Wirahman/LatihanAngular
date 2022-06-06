import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PenggunaService {

  private baseUrl = 'https://reqres.in/api/users';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Blubuk-API': 'www.blubuk.com'
    })
  };
  
  constructor(private http: HttpClient) { }

  getDaftarPengguna(pages: string | number) {
    return this.http.get(this.baseUrl + '?page=' + pages);
  }

  
}





// import { Injectable } from '@angular/core';
// import { HttpHeaders, HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse  } from '@angular/common/http';
// import { Observable, throwError, of } from 'rxjs';
// // import {catchError, retry, tap } from 'rxjs/internal/operators';
// import {catchError, retry, tap } from 'rxjs/operators';



// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {

//   // private baseUrl = 'https://localhost/blubuk/Api/ApiLogin';
//   private baseUrl = 'https://localhost:4433/blubuk/Api/ApiLogin';
  
//   private httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type':  'application/json',
//       'Blubuk-API': 'www.blubuk.com'
//     })
//   };


//   constructor(private http: HttpClient) { }

//   login(pengguna: Object): Observable<Object> {
//     return this.http.post<Object>(this.baseUrl + '/login', pengguna, this.httpOptions)
//       .pipe(
//         catchError(this.handleError('Error Ketika Login', pengguna))
//       );
//   }
  
//   loginFacebook(penggunaFacebook: Object): Observable<Object> {
//     return this.http.post<Object>(this.baseUrl + '/loginFacebook', penggunaFacebook, this.httpOptions)
//       .pipe(
//         catchError(this.handleError('Error Ketika Login Facebook', penggunaFacebook))
//       );
//   }
  
//   private handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
//       console.error(error);
//       return of(result as T);
//     };
//   }
  
//   getMahasiswaList(): Observable<any> {
//     // return this.http.get(`${this.baseUrl}`);
//     // return this.http.get('${this.baseUrl}/mahasiswa/json');
//     return this.http.get(this.baseUrl + '/mahasiswa/json');
//   }

//   getMahasiswa(id: number): Observable<any> {
//     // return this.http.get('${this.baseUrl}/mahasiswa/${id}');
//     return this.http.get(this.baseUrl + '/mahasiswa/' + id );
//   }

//   createMahasiswa(mahasiswa: Object): Observable<Object> {
//     // return this.http.post('${this.baseUrl}/mahasiswa', mahasiswa);
//     return this.http.post(this.baseUrl + '/mahasiswa', mahasiswa);
//   }

//   updateMahasiswa(id: number, value: any): Observable<Object> {
//     // return this.http.put('${this.baseUrl}/mahasiswa/${id}', value);
//     return this.http.put(this.baseUrl + '/mahasiswa/' + id, value);
//   }

//   deleteMahasiswa(id: number): Observable<any> {
//     // return this.http.delete('${this.baseUrl}/mahasiswa/${id}', { responseType: 'text' });
//     return this.http.delete(this.baseUrl + '/mahasiswa/' + id, { responseType: 'text' });
//   }

// }

