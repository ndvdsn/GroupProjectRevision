package com.codeclan.restaurantService.repositories.Booking;

import com.codeclan.restaurantService.models.Booking;
import com.codeclan.restaurantService.projections.EmbedInfoInBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedInfoInBooking.class)
public interface BookingRepository extends JpaRepository<Booking, Long>, BookingRepositoryCustom {
}
