package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entity.Book;

@RepositoryRestResource(path="books")
@CrossOrigin("http://localhost:4200/")
public interface BookRepository extends JpaRepository<Book, Integer>
{

}
