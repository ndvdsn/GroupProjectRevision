package com.codeclan.restaurantService.projections;

import com.codeclan.restaurantService.models.Booking;
import com.codeclan.restaurantService.models.Customer;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedInfoInCustomer", types = Customer.class)
public interface EmbedInfoInCustomer {
    Long getId();
    String getFirstName();
    String getLastName();
    String getEmail();
    String getContactNumber();
    List<Booking> getBookings();

}
