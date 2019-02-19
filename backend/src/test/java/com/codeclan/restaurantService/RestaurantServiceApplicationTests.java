package com.codeclan.restaurantService;

import com.codeclan.restaurantService.models.Booking;
import com.codeclan.restaurantService.models.Customer;
import com.codeclan.restaurantService.models.RestTable;
import com.codeclan.restaurantService.models.Restaurant;
import com.codeclan.restaurantService.repositories.Booking.BookingRepository;
import com.codeclan.restaurantService.repositories.Customer.CustomerRepository;
import com.codeclan.restaurantService.repositories.RestTable.RestTableRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.sql.Time;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RestaurantServiceApplicationTests {

	@Autowired
	BookingRepository bookingRepository;

	@Autowired
	RestTableRepository restTableRepository;

	@Autowired
	CustomerRepository customerRepository;

	Restaurant restaurant;
	Customer customer;
	Customer customer2;
	RestTable table;
	Time time;
	Date date;


	@Test
	public void contextLoads() {
	}


//	@Before
//	public void setUp() {
//		Restaurant restaurant = new Restaurant("78", "Finneston", "12:00:00","23:00:00","Christmas");
//
//		customer = new Customer("Florence", "Machine", "fm@growlmail.com", "749473829");
//		customerRepository.save(customer);
//
//		customer2 = new Customer("Florence", "Car", "fm@growlmail.com", "749473829");
//		customerRepository.save(customer2);
//
//		table = new RestTable(1,3);
//		restTableRepository.save(table);
//
//		DateFormat sfd = new SimpleDateFormat("dd-MM-yy");
//		String bookingDate = "24-07-2018";
//		Date date = null;
//		try {
//			date = sfd.parse(bookingDate);
//		} catch (ParseException e) {
//			e.printStackTrace();
//		}
//
//		time = new Time(12, 00, 00);
////	}



	@Test
	public void customerCanAddBookingToOwnBookingList() {

		Booking booking1 = new Booking(date, customer, table, 3,0);
		bookingRepository.save(booking1);

		customer.addBooking(booking1);
		assertEquals(1,customer.getBookings().size());


	}

	@Test  // this works with the @Before commented out
	public void canGetCustomerByLastName() {
		List<Customer> found = customerRepository.getCustomerByLastName("Machine");
		assertEquals(1, found.size());
	}




//
//	DateFormat sfd = new SimpleDateFormat("dd-MM-yy");
//	String newDate = "24-07-2018";
//	Date date = null;
//		try {
//		date = sfd.parse(newDate);
//	} catch (
//	ParseException e) {
//		e.printStackTrace();
}
