import img6 from './Images/Canteen.jpg'
import img7 from './Images/MovieSeats.jpg'
import img8 from './Images/TicketCounter.jpg'
import img9 from './Images/Tickets.jpg'
import img10 from './Images/Parking.jpg'
import img11 from './Images/Theatre.jpg'


export const Services = () => {
  return (
    <>
    <div className="container mt-5">
      <div>
        <h3>Services Offered by Our Movie Ticket Booking App</h3>
        <p>Our app is designed to bring the magic of cinema closer to you. Here’s what we offer:</p>
        <hr/>
        <p>
          <b>
🎟️ Seamless Ticket Booking</b></p>
<p>Effortlessly book tickets for the latest blockbusters, classic movies, and special screenings. Enjoy real-time seat selection and secure payment options.</p>
<hr/>
<p><b>🪑 Customizable Seat Selection</b></p>
<p>Choose your preferred seats directly on our interactive seat maps. From premium recliners to family-friendly rows, we have options for everyone.</p>
<hr/>
<p><b>💳 Easy Payments and Discounts</b></p>
<p>Pay securely through multiple methods, including credit/debit cards, wallets, UPI, or net banking. Don’t forget to explore exclusive deals, cashback, and discount codes!</p>
<hr/>
<p><b>📅 Advanced Booking</b></p>
<p>Secure your seats in advance for upcoming releases and special shows. Be the first to watch the movies you’ve been waiting for.</p>
<hr/>
<p><b>🎬 Movie Recommendations</b></p>
<p>Discover movies tailored to your preferences. Get curated lists of trending releases, genres, and shows near you.</p>
<hr/>
        
      </div>
      <h1 className='display-6'> Our services :</h1>
    <div className="row my-5">
        <div className="col-lg">
        <img src={img11} alt="Theatre" className="img-fluid" style={{height:"30vh"}}/>
        <h1> Theatre View</h1>
        </div>
        <div className="col-lg">
          <img src={img6} alt="Canteen" className="img-fluid" style={{height:"30vh"}}/>
          <h1> Canteen</h1>
        </div>
        <div className="col-lg">
        <img src={img10} alt="Parking" className="img-fluid" style={{height:"30vh"}}/>
        <h1> Parking</h1>
           </div>
      </div>
      <div className="row my-4">
        <div className="col-lg">
          <img src={img7} alt="MovieSeats" className="img-fluid"/>
          <h1> Movie Seats</h1>
        </div>
        <div className="col-lg">
          <img src={img8} alt="TicketCounter" className="img-fluid"/>
          <h1> Ticket Counter</h1>
        </div>
        <div className="col-lg">
          <img src={img9} alt="Tickets" className="img-fluid"/>
          <h1> Tickets</h1>
        </div>
      </div>
    </div>
    </>
  );
}