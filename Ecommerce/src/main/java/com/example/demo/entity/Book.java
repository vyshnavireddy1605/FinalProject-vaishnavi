package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="my_book")
public class Book 
{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="book_id")
    private int book_id;
    @Column(name="book_name")
    private String book_name;
    @Column(name="book_publisher")
    private String book_publisher;
    @Column(name="book_description")
    private String book_description;
    @Column(name="unit_price")
    private int unit_price;
    @Column(name="book_image")
    private String book_image;
    @Column(name="active")
    private int active;
    @Column(name="available_stock")
    private int available_stock;
    @Column(name="category_id")
    private int category_id;
    
    @ManyToOne(targetEntity=Category.class,fetch=FetchType.EAGER)
   	@JoinColumn(name="category_id",insertable = false,updatable = false)
   	private Category book_category;
    
    public Category getCategory() {
		return book_category;
	}

	public void setCategory(Category book_category) {
		this.book_category = book_category;
	}
	public Book()
    {
    	
    }
	public Book(int book_id, String book_name, String book_publisher, String book_description, int unit_price,
			String book_image, int active, int available_stock, int category_id) {
		super();
		this.book_id = book_id;
		this.book_name = book_name;
		this.book_publisher = book_publisher;
		this.book_description = book_description;
		this.unit_price = unit_price;
		this.book_image = book_image;
		this.active = active;
		this.available_stock = available_stock;
		this.category_id = category_id;
	}
	public int getBook_id() {
		return book_id;
	}
	public void setBook_id(int book_id) {
		this.book_id = book_id;
	}
	public String getBook_name() {
		return book_name;
	}
	public void setBook_name(String book_name) {
		this.book_name = book_name;
	}
	public String getBook_publisher() {
		return book_publisher;
	}
	public void setBook_publisher(String book_publisher) {
		this.book_publisher = book_publisher;
	}
	public String getBook_description() {
		return book_description;
	}
	public void setBook_description(String book_description) {
		this.book_description = book_description;
	}
	public int getUnit_price() {
		return unit_price;
	}
	public void setUnit_price(int unit_price) {
		this.unit_price = unit_price;
	}
	public String getBook_image() {
		return book_image;
	}
	public void setBook_image(String book_image) {
		this.book_image = book_image;
	}
	public int getActive() {
		return active;
	}
	public void setActive(int active) {
		this.active = active;
	}
	public int getAvailable_stock() {
		return available_stock;
	}
	public void setAvailable_stock(int available_stock) {
		this.available_stock = available_stock;
	}
	public int getCategory_id() {
		return category_id;
	}
	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}
}
