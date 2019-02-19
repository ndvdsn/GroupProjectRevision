package com.codeclan.restaurantService.models;

import java.util.ArrayList;

//@Entity
//@Table(name = "restaurants")
public class Restaurant {

//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @Column
    private String name;
//    @Column
    private String location;
//    @Column(name = "opening_time")
    private String openingTime;
//    @Column(name = "closing_time")
    private String closingTime;
    private String closingDate;
    private ArrayList<Booking>bookings;
    private ArrayList<RestTable>restTables;
    private ArrayList<Customer>customers;

    public Restaurant(String name, String location, String openingTime, String closingTime, String closingDate) {
        this.name = name;
        this.location = location;
        this.openingTime = openingTime;
        this.closingTime = closingTime;
        this.closingDate = closingDate;
        this.bookings = new ArrayList<Booking>();
        this.restTables = new ArrayList<RestTable>();
        this.customers = new ArrayList<Customer>();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOpeningTime() {
        return openingTime;
    }

    public void setOpeningTime(String openingTime) {
        this.openingTime = openingTime;
    }

    public String getClosingTime() {
        return closingTime;
    }

    public void setClosingTime(String closingTime) {
        this.closingTime = closingTime;
    }

    public String getClosingDate() {
        return closingDate;
    }

    public void setClosingDate(String closingDate) {
        this.closingDate = closingDate;
    }

    public ArrayList<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(ArrayList<Booking> bookings) {
        this.bookings = bookings;
    }

    public ArrayList<RestTable> getRestTables() {
        return restTables;
    }

    public void setRestTables(ArrayList<RestTable> restTables) {
        this.restTables = restTables;
    }

    public ArrayList<Customer> getCustomers() {
        return customers;
    }

    public void setCustomers(ArrayList<Customer> customers) {
        this.customers = customers;
    }


    public void addCustomerToRestaurantCustomersList(Customer customer) {
        this.customers.add(customer);
    }

    public int getRestCustomerAmount() {
        return customers.size();
    }
}
