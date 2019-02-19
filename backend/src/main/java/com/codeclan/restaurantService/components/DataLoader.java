package com.codeclan.restaurantService.components;

import com.codeclan.restaurantService.models.Booking;
import com.codeclan.restaurantService.models.Customer;
import com.codeclan.restaurantService.models.RestTable;
import com.codeclan.restaurantService.models.Restaurant;
import com.codeclan.restaurantService.repositories.Booking.BookingRepository;
import com.codeclan.restaurantService.repositories.Customer.CustomerRepository;
import com.codeclan.restaurantService.repositories.RestTable.RestTableRepository;
import javafx.scene.input.DataFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.sql.Time;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Component

public class DataLoader implements ApplicationRunner {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    RestTableRepository restTableRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args) {

        DateFormat sfd = new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z");
        String bookingDate = "Thu, 13 Dec 2018 13:00:00 +0100";
        Date date01 = null;
        try {
            date01 = sfd.parse(bookingDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }

//        Restaurant restaurant = new Restaurant("78", "Finneston", "12:00:00","23:00:00","Christmas");

        Customer customer1 = new Customer("Jordan", "Davidson", "jd@growlmail.com", "749473829");
        customerRepository.save(customer1);

        Customer customer2 = new Customer("Neil", "Davidson", "nd@growlmail.com", "749473003");
        customerRepository.save(customer2);

        Customer customer3 = new Customer("Valentina", "Bonetti", "vb@growlmail.com", "749473034");
        customerRepository.save(customer3);

        Customer customer4 = new Customer("Craig", "Dunlop", "cd@growlmail.com", "749475703");
        customerRepository.save(customer4);

        RestTable table1 = new RestTable(1,2);
        restTableRepository.save(table1);

        RestTable table2 = new RestTable(2, 4);
        restTableRepository.save(table2);

        RestTable table3 = new RestTable(3,6);
        restTableRepository.save(table3);

        RestTable table4 = new RestTable(4,2);
        restTableRepository.save(table4);

        RestTable table5 = new RestTable(5,2);
        restTableRepository.save(table5);

        RestTable table6 = new RestTable(6, 4);
        restTableRepository.save(table6);

        RestTable table7 = new RestTable(7,8);
        restTableRepository.save(table7);

        RestTable table8 = new RestTable(8,2);
        restTableRepository.save(table8);

        Booking booking1 = new Booking(date01 , customer1, table2, 3,0);

        booking1.setReceipt(50);
        bookingRepository.save(booking1);

        Booking booking2 = new Booking(date01 , customer2, table1, 2,0);
        booking2.setReceipt(80);
        bookingRepository.save(booking2);

        Booking booking3 = new Booking(date01 , customer3, table3, 6,0);
        booking3.setReceipt(200);
        bookingRepository.save(booking3);

        Booking booking4 = new Booking(date01 , customer4, table4,4,0);
        booking4.setReceipt(900);
        bookingRepository.save(booking4);



    }
}
