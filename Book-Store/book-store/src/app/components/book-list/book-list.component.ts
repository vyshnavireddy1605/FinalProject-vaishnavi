import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/common/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[]
  hasSearchName: any;
  searchName: any;
  

  constructor(private bookservice:BookService, public router:Router, public activateRoute: ActivatedRoute) { }

  ngOnInit(): void 
  {
    //this.getAllBook();
    this.activateRoute.paramMap.subscribe(()=>this.getAllBook());
  }
  getAllBook():void {
 
    this.hasSearchName = this.activateRoute.snapshot.paramMap.has("bname");
    if(this.hasSearchName)
    {
     
      this.searchName  = this.activateRoute.snapshot.paramMap.get("bname");
      console.log(this.searchName)
    this.bookservice.getAllBooksSearchByBookName(this.searchName).subscribe(data =>{
      console.log(data);
      this.books= data;
    });

    }
    else{

   
    this.bookservice.getAllBooks().subscribe(data=>{
      console.log(data);
      this.books=data;
    });
  } 
    
  }
  updateBook(book_id : Number){
    this.router.navigateByUrl("/updateBook/" +book_id);
  }
  addbk():void
  {
    this.router.navigateByUrl("/bookform")
  }
  deleteBook(book_id : Number){
    console.log(book_id);
    if(confirm("Do you want to delete ?")){
      this.bookservice.deleteBook(book_id).subscribe((data: any)=>{
        console.log(data);
        this.getAllBook();
      })
    };
  }
}
