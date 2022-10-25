package com.example.demo.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="book_category1")
public class Category 
{
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name="category_id")
	    private int category_id;
	    @Column(name="category_name")
	    private String category_name;
	    
	    @OneToMany(mappedBy="book_category")
		private Set<Book>category;
		
	    public Set<Book> getCategory() {
			return category;
		}
		public void setCategory(Set<Book> category) {
			this.category = category;
		}
			
	    public Category()
	    {
	    	
	    }
		public Category(int category_id, String category_name) {
			super();
			this.category_id = category_id;
			this.category_name = category_name;
		}
		public int getCategory_id() {
			return category_id;
		}
		public void setCategory_id(int category_id) {
			this.category_id = category_id;
		}
		public String getCategory_name() {
			return category_name;
		}
		public void setCategory_name(String category_name) {
			this.category_name = category_name;
		}
}
