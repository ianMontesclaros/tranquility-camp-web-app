<img width="1693" alt="Screenshot 2024-10-17 at 11 09 10 AM" src="https://github.com/user-attachments/assets/59e37e50-46cd-4321-b9a4-13f6016115a0">

# Tranquility Camp Web App

Tranquility Camp Web App is a hotel management web app for Tranquility Camp, a boutique hotel that offers luxurious wooden cabins, where its employees can manage bookings and cabins.

# Features

1. Authentication
   * Log in to the application with your email address and password.

     ![Log in](https://github.com/user-attachments/assets/290498e3-e875-41be-88f1-53bb3200c2c0)

   * Add new users by filling a form with their full name, email address, password, and repeat password.

     ![Add user](https://github.com/user-attachments/assets/08269a3f-f04c-49e7-944e-1e242139802f)

2. Cabins
   * View, filter, and sort cabins that each show the cabin's photo, name, capacity, price, and current discount.
   
     ![View cabins](https://github.com/user-attachments/assets/f85ccfca-e583-4614-829f-79bfd55e749c)

   * Update or delete a cabin.
   
     ![Update or delete cabin](https://github.com/user-attachments/assets/b458c419-4869-4ec9-8657-8860bc26df24)


   * Create a new cabin by filling a form that includes uploading a photo and providing a description of the cabin.
   
     ![Add a cabin](https://github.com/user-attachments/assets/0714b14e-e4bd-4cef-8089-8ac90e61c0bc)

3. Bookings
   * View, filter, and sort bookings that each show the booking's cabin name, guest name, arrival and departure dates, status, and cost amount.
   
     ![View bookings](https://github.com/user-attachments/assets/4a946c50-8e68-41dc-a9c4-227aad5f27d6)

   * View booking details such as the number of guests, number of nights, guest observations, breakfast option, and the breakfast price, and guest details
     such as their full name, email, national ID, nationality, and a country flag.

     ![Booking details](https://github.com/user-attachments/assets/a779df80-a999-41e1-baf8-0fadbcb48617)

   * Check in "unconfirmed" bookings and check out "checked in" bookings. On check in, accept only cash from the guest, and
     confirm that payment has been received.

     ![Check in:Check out](https://github.com/user-attachments/assets/26ef06f4-16ea-4c29-9121-d717291cbb2f)


3. Dashboard
   *  View a list of guests checking in and out for today and check in or check out each guest.
   *  View the number of guests, sales, checkins, and occupancy rate in the last 7, 30, or 90 days.
   *  View a chart showing statistics on stay durations in the last 7, 30, or 90 days.
   *  View a chart showing all daily hotel sales, showing both “total” sales and “extras” sales (only breakfast) in the last 7, 30, or 90 days.
  
4. Settings: Configure the minimum number of nights per booking, maximum number of nights per booking, maximum number of guests per booking, and breakfast price.
  
   ![Settings](https://github.com/user-attachments/assets/30e80eb1-9e51-4951-a87a-e59184d65301)

7. Light and Dark Mode: Toggle between light and dark mode.
  
   ![Dark mode](https://github.com/user-attachments/assets/fa482f59-2d5d-4bf6-8699-15b6714946f1)

# Built with

* React Query
* Styled Components
* React Hook Form
* Supabase
* Advanced compound component pattern
* Authentication
