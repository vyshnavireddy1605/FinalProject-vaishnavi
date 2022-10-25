import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Book } from './common/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bkURL="http://localhost:8080/api/books";  
  
  constructor(private httpClient:HttpClient) 
  {

   }
   getAllBooks():Observable<Book[]>
   {
 return this.httpClient.get<getBookResponse>(this.bkURL).pipe(map(response=>response. _embedded.books))
   }
 SaveBook(book:Book):Observable<Book>
   {
     const httpOptions={
       headers:new HttpHeaders({
         'Content-type':'application/json',
         'Authorization':'auth-token',
         'Access-control-Allow-Origin':'*'
       })
     };
   return this.httpClient.post<Book>(this.bkURL,book,httpOptions);
     
   }
   getBookById(bkId:number):Observable<Book>
    {
     const bkIDURl=this.bkURL+"/"+bkId;
    return this.httpClient.get<Book>(bkIDURl);
    }
    updateBook(book:Book):Observable<Book>{
     const httpOptions = {
       headers : new HttpHeaders({
           'Content-Type' : 'application/json',
           'Authorization' : 'auth-token',
           'Access-Control-Allow-Origin' : '*'
       })
     };
     return this.httpClient.put<Book>(this.bkURL+`/${book.book_id}`,book,httpOptions);
   }
   deleteBook(book_id: Number) {
    
     const httpOptions = {
       headers : new HttpHeaders({
           'Content-Type' : 'application/json',
           'Authorization' : 'auth-token',
           'Access-Control-Allow-Origin' : '*'
       })
     };
     return  this.httpClient.delete<Book>(this.bkURL+`/${book_id}`,httpOptions);
   }
   getAllBooksSearchByBookName(bname : string) : Observable<Book[]> {
     const searchURL = "http://localhost:8080/api/book/search/findBybnameIgnoreCase?bname=" + bname;
     return this.httpClient.get<GetSearchByBookName>(searchURL).pipe(map(response => response._embedded.books));
   }
 }
 interface getBookResponse
 {
   _embedded:
   {
     books: Book[]
   }
 }
 interface GetSearchByBookName{
   _embedded : {
     books : Book[]
   }
}
