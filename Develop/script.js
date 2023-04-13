// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Listener for click event on save button. Will save the text area into local storage for corresponding area.
  $('.saveBtn').click(function(){
    console.log('Button clicked!');
    console.log($(this).attr('data-time'));
    if($(this).attr('data-time') == 9){
      let textAreaEl = document.querySelector("textarea");
      localStorage.setItem('description9', JSON.stringify(textAreaEl));
      console.log(localStorage.getItem('description9'));
    }


  })

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // Display the current date in the header of the page.
  let currentDayEl = document.querySelector("#currentDay");
  currentDayEl.textContent = dayjs().format('MM/DD/YYYY');

});
