package com.codeclan.restaurantService.projections;

import com.codeclan.restaurantService.models.Booking;
import com.codeclan.restaurantService.models.Customer;
import com.codeclan.restaurantService.models.RestTable;
import org.springframework.data.rest.core.config.Projection;

import java.sql.Time;
import java.util.Date;

@Projection(name = "embedInfoInBooking", types = Booking.class)
public interface EmbedInfoInBooking {
    Long getId();
    Date getDate();
    Customer getCustomer();
    RestTable getRestTable();
    int getNumberOfCovers();
    int getReceipt();
}
