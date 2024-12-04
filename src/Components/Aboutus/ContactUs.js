import React from "react";





export const ContactUs = () => {
  return (
    <>
    <div className="container">
     







      <div className="row">
        <div className="col-md-12">
          <h2>Contact Us</h2>
          <div className="justify-align-center">
            <p className="fs-5">We’re here to make your movie experience seamless and enjoyable! If you have any questions,<br/>concerns, or need assistance with ticket bookings, feel free to reach out to us.<br/>

Our dedicated support team is ready to help with:<br/>

<b>Booking Assistance:</b> Need help selecting seats or completing your booking? We’ve got you covered.<br/>
<b>Refunds and Cancellations:</b> Facing issues with a canceled show or need a refund? Let us resolve it for you.<br/>
<b>Technical Support:</b> Experiencing any glitches on our platform? We’re here to fix them.<br/>
<b>General Queries:</b> Have questions about our services, offers, or upcoming releases? Ask away!</p>
          </div>
          <hr/>
         


          <form>
            <div className="form-group">
              <label for="name">Name:</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="form-group">
              <label for="email">Email:</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="form-group">
              <label for="message">Message:</label>
              <textarea className="form-control" id="message" rows="3" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-4">Submit</button>
          </form>
        </div>
        </div>
        <div className="row">
          <div className="col-lg"></div>
          <div className="col-lg">
            <p className="fs-5">
          <b>How to Reach Us:</b> <br/>
<b>Email:</b> support@AjuzTickets.com<br/>
<b>Phone:</b> +1 (800) 123-4567<br/>
<b>Live Chat:</b> Available on our website from 9 AM to 9 PM.<br/>
<b>Social Media:</b> Send us a message on Facebook, Instagram, or Twitter @AjuzTickets.<br/>
</p>
          </div>
          <div className="col-lg"></div>
         </div>
      </div>
    </>
  );
}