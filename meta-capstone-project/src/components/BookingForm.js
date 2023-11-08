import React, {useState} from 'react';

export default function BookingForm({availableTimes, setAvailableTimes}) {
//variables for the form fields;
const [date, setDate] = useState('');
const [time, setTime] = useState('');
const [guests, setGuests] = useState('');
const [occasion, setOccasion] = useState('');

const handleDateChange = (e) => {
  const selectedDate = e.target.value;
  setAvailableTimes(selectedDate);
}

return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time} 
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="">Select a time</option> 
        {availableTimes.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}