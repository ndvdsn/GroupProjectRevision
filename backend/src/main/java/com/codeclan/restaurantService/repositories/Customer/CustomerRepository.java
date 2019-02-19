package com.codeclan.restaurantService.repositories.Customer;

import com.codeclan.restaurantService.models.Customer;
import com.codeclan.restaurantService.projections.EmbedInfoInBooking;
import com.codeclan.restaurantService.projections.EmbedInfoInCustomer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedInfoInCustomer.class)
public interface CustomerRepository extends JpaRepository<Customer, Long>, CustomerRepositoryCustom {
}
