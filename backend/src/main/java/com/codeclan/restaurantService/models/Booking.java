package com.codeclan.restaurantService.models;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import javax.persistence.Table;
import java.sql.Time;
import java.util.Date;

@Entity
@Table(name="bookings")

public class Booking {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Date date;

//    @Column
//    private Time time;

    @ManyToOne
    @JoinColumn(name="customer_id", nullable=false)
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "table_id", nullable = false)
    private RestTable restTable;

    @Column
    private int numberOfCovers;
    @Column
    private int receipt;

    public Booking(Date date, Customer customer, RestTable restTable, int numberOfCovers,int receipt) {
        this.date = date;
//        this.time = time;
        this.customer = customer;
        this.restTable = restTable;
        this.numberOfCovers = numberOfCovers;
        this.receipt = receipt;
    }

    public int getReceipt() {
        return receipt;
    }

    public void setReceipt(int receipt){
        this.receipt = receipt;
    }

    public Booking() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

//    public Time getTime() {
//        return time;
//    }
//
//    public void setTime(Time time) {
//        this.time = time;
//    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public RestTable getRestTable() {
        return restTable;
    }

    public void setRestTable(RestTable restTable) {
        this.restTable = restTable;
    }

    public int getNumberOfCovers() {
        return numberOfCovers;
    }

    public void setNumberOfCovers(int numberOfCovers) {
        this.numberOfCovers = numberOfCovers;
    }
}
