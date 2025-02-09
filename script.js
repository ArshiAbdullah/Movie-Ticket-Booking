// const container = document.querySelector(".container");
// const seats = document.querySelectorAll(".row .seat:not(.sold)");
// const count = document.getElementById('count');
// const total = document.getElementById('total');
// const movieSelect = document.getElementById('movie');

// let ticketPrice = movieSelect.value;


// movieSelect.addEventListener("change", (e) =>{
//     ticketPrice = e.target.value;
    
// });

// container.addEventListener("click", e => {
//     if(
//         e.target.classList.contains("seat")&& 
//         !e.target.classList.contains("sold")
//         )
//    {
//      e.target.classList.toggle("selected");
//       updateSelectedCount()
//     }    
// });

// function updateSelectedCount(){
//     const selectedSeats = document.querySelectorAll(".row .seats .selected");
//     const seatsIndex = [...selectedSeats].map(seats => [...seats].indexOf(seats));
//     const selectedSeatsCounts = selectedSeats.length;
//    count.innerText = selectedSeatsCounts;
//    count.innerText = selectedSeatsCounts *  ticketPrice;
// }

/*
Step 1: Get references to DOM elements
*/
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");


movieSelect.addEventListener("change", e => {
  ticketPrice = e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});


container.addEventListener("click", e => {
  
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("sold")
  ) {
   e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});



function updateSelectedCount() {

  const selectedSeats = document.querySelectorAll(".row .seat.selected");

 
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

 
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));


  const selectedSeatsCounts = selectedSeats.length;

 
  count.innerText = selectedSeatsCounts;
  total.innerText = selectedSeatsCounts * ticketPrice;

  setMovieData(movieSelect.selectedIndex, movieSelect.value);
}

/*
Step 4: Define funtion to set selected movie data, in local storage
*/
// function setMovieData(movieIndex, moviePrice) {
//   localStorage.setItem("selectedMovieIndex", movieIndex);
//   localStorage.setItem("selectedMoviePrice", moviePrice);
// }

// function populateUI() {
  
//   const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

 
//   if (selectedSeats != null && selectedSeats.length > 0) {
//     seats.forEach((seat, index) => {
//       if (selectedSeats.indexOf(index) > -1) {
//         seat.classList.add("selected");
//       }
//     });
//   }

 
//   const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

 
//   if (selectedMovieIndex !== null) {
//     movieSelect.selectedIndex = selectedMovieIndex;
//   }
// }


// populateUI();


// let ticketPrice = +movieSelect.value;

// updateSelectedCount();




























