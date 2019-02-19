package com.codeclan.restaurantService.repositories.Customer;

import com.codeclan.restaurantService.models.Customer;

import java.util.List;

public interface CustomerRepositoryCustom {
    List<Customer> getCustomerByLastName(String lastName);

}
