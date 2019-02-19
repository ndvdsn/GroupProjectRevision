package com.codeclan.restaurantService.projections;


import com.codeclan.restaurantService.models.Booking;
import com.codeclan.restaurantService.models.RestTable;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedInfoInTable", types = RestTable.class )
public interface EmbedInfoInTable {

    Long getId();
    int getTableNumber();
    int getMaxCovers();
    List<Booking> getBookings();
}
