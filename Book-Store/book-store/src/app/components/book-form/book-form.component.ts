import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/common/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

    books:Book=new Book(0,"Harry Potter","Bloomsbury","Childrens fiction",700,'iii',100,500,9);
  isEditable: boolean;
  
    

  constructor(public booksService:BookService,public router:Router,public activateRoute :ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.activateRoute.paramMap.subscribe(()=>this.books);
     this.getBookById();
  }
  onSubmit():void
   {
     if(this.isEditable)
     {
       this.booksService.updateBook(this.books).subscribe(data=>
         this.router.navigateByUrl("/book"));
 
     }
     else{
 
     
     console.log("hello");
     console.log(this.books);
     this.booksService.SaveBook(this.books).
     subscribe(data=>console.log(data));
     this.router.navigateByUrl("/book");
     }
 
   }
 
   getBookById(){
    const bkId= parseFloat(this.activateRoute.snapshot.paramMap.get("book_id"))
   
   console.log(bkId)
   if(bkId> 0){
     this.isEditable = true;
     this.booksService.getBookById(bkId).subscribe(data=>{
       this.books = data;
       console.log(this.books)
     });
   }

   }

}
