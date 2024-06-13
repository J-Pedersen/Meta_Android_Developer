import React, { useEffect } from 'react';

const Book = () => {
  // People Output Script
  const updatePeople = () => {
    const slider = document.getElementById("people");
    const output = document.getElementById("num-people");

    if (output && output.querySelector('strong')) {
      output.querySelector('strong').innerText = slider.value;
    }
  };

  // Form Reset Script
  const resetForm = () => {
    const numPeople = document.getElementById("num-people");
    if (numPeople) {
      numPeople.innerText = "1";
    }

    const defaultTime = 480;
    const reserveTime = document.getElementById("reserve-time");
    if (reserveTime) {
      reserveTime.value = defaultTime;
      updateTime();
    }

    setTimeout(updatePeople, 0);
    // location.reload() - Note: Reloading the entire page may not be necessary in a React application
  };

  // Time Format Script
  const updateTime = () => {
    const slider = document.getElementById("reserve-time");
    const output = document.getElementById("selected-time");

    const minutes = parseInt(slider.value);

    const hours = Math.floor(minutes / 60);

    const mins = minutes % 60;
    const period = hours >= 12 ? "pm" : "am";

    const formattedHours = hours % 12 || 12;

    if (output) {
      output.innerText = formattedHours + ":" + (mins < 10 ? "0" : "") + mins + " " + period;
    }
  };

  // useEffect to run scripts on component mount
  useEffect(() => {
    updatePeople();
    updateTime();
  }, []);

  return (
    <div className='bookWrapper'>
        <section id="reservation-form">
        <div id="heading-container">
            <h1 className="cd-bg">Book a Reservation</h1>
        </div>
        <form className="reservation-form" onReset={resetForm}>
            <div className="form-wrapper">
            <div className="row">
                <div className="people col">
                <label htmlFor="people"><strong>How Many In Your Party?</strong></label>
                <div className="output-row">
                    <input type="range" id="people" name="people" title="How Many In Your Party?" min="1" max="10" step="1" defaultValue="1" onInput={updatePeople} required />
                    <div className="output-people"><output htmlFor="people" id="num-people"><strong>1</strong></output></div>
                </div>
                </div>
                <div className="reserve-date col">
                <label htmlFor="reserve-date"><strong>What Date?</strong></label>
                <input type="date" id="reserve-date" name="reserve-date" title="Set a Reservation Date" required />
                </div>
                <div className="reserve-time col">
                <label htmlFor="reserve-time"><strong>What Time?</strong></label>
                <div className="output-row">
                    <input type="range" id="reserve-time" name="reserve-time" title="Set a Reservation Time" min="480" max="1260" step="30" defaultValue="480" onInput={updateTime} required />
                    <div className="output-time"><output htmlFor="reserve-time" id="selected-time"><strong>8:00 AM</strong></output></div>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="form-buttons">
                <button type="reset" title="Clear the Form">Clear</button>
                <button type="submit" title="Submit the Form">Submit</button>
                </div>
            </div>
            </div>
        </form>
        </section>
    </div>
  );
};

export default Book;