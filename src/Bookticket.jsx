import "./App.css";

export default function BookTicket() {
  return (
    <div className="book-page">
      <h1>Book IPL Tickets</h1>

      <div className="book-form">
        <select>
          <option>Select Team</option>
          <option>Chennai Super Kings</option>
          <option>Mumbai Indians</option>
          <option>Royal Challengers Bangalore</option>
          <option>Kolkata Knight Riders</option>
          <option>Sunrisers Hyderabad</option>
          <option>Rajasthan Royals</option>
          <option>Delhi Capitals</option>
          <option>Punjab Kings</option>
          <option>Lucknow Super Giants</option>
          <option>Gujarat Titans</option>
        </select>

        <select>
          <option>Select Match</option>
          <option>League Match</option>
          <option>Qualifier</option>
          <option>Eliminator</option>
          <option>Final</option>
        </select>

        <input type="date" />

        <input type="number" placeholder="Number of Tickets" />

        <button className="confirm-btn">Confirm Booking</button>
      </div>
    </div>
  );
}
