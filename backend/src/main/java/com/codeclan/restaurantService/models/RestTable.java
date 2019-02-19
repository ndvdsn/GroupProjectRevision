package com.codeclan.restaurantService.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="tables")
public class RestTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="table_number")
    private int tableNumber;

    @Column(name = "max_covers")
    private int maxCovers;

    @OneToMany(mappedBy = "restTable")
    private List<Booking> bookings;

    public RestTable(int tableNumber, int maxCovers) {
        this.tableNumber = tableNumber;
        this.maxCovers = maxCovers;
        this.bookings = new ArrayList<Booking>();
    }

    public RestTable() {
    }

    public int getTableNumber() {
        return tableNumber;
    }

    public void setTableNumber(int tableNumber) {
        this.tableNumber = tableNumber;
    }

    public int getMaxCovers() {
        return maxCovers;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
