// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Listener for click event on save button. Will save the text area into local storage for corresponding area.
  $('.saveBtn').click(function(){
    if($(this).attr('data-time') == 9){
      let textAreaEl = document.getElementById("9");
      localStorage.setItem('description9', JSON.stringify(textAreaEl.value));
      console.log(localStorage.getItem('description9'));
    }
    if($(this).attr('data-time') == 10){
      let textAreaEl = document.getElementById("10");
      localStorage.setItem('description10', JSON.stringify(textAreaEl.value));
      console.log(localStorage.getItem('description10'));
    }
    if($(this).attr('data-time') == 11){
      let textAreaEl = document.getElementById("11");
      localStorage.setItem('description11', JSON.stringify(textAreaEl.value));
      console.log(localStorage.getItem('description11'));
    }
    if($(this).attr('data-time') == 12){
      let textAreaEl = document.getElementById("12");
      localStorage.setItem('description12', JSON.stringify(textAreaEl.value));
      console.log(localStorage.getItem('description12'));
    }
    if($(this).attr('data-time') == 1){
      let textAreaEl = document.getElementById("13");
      localStorage.setItem('description13', JSON.stringify(textAreaEl.value));
      console.log(localStorage.getItem('description13'));
    }
    if($(this).attr('data-time') == 2){
      let textAreaEl = document.getElementById("14");
      localStorage.setItem('description14', JSON.stringify(textAreaEl.value));
      console.log(localStorage.getItem('description14'));
    }
    if($(this).attr('data-time') == 3){
      let textAreaEl = document.getElementById("15");
      localStorage.setItem('description15', JSON.stringify(textAreaEl.value));
      console.log(localStorage.getItem('description15'));
    }
    if($(this).attr('data-time') == 4){
      let textAreaEl = document.getElementById("16");
      localStorage.setItem('description16', JSON.stringify(textAreaEl.value));
      console.log(localStorage.getItem('description16'));
    }
    if($(this).attr('data-time') == 5){
      let textAreaEl = document.getElementById("17");
      localStorage.setItem('description17', JSON.stringify(textAreaEl.value));
      console.log(localStorage.getItem('description17'));
    }
  })

  // Adds code to display correct color block of past, present, or future.
  let currentHour = dayjs().hour();
  console.log(currentHour);
  $(".description").each(function(){
    if ($(this).attr("id") > currentHour){
      $(this).addClass("future");
    }
    if ($(this).attr("id") < currentHour){
      $(this).addClass("past");
    }
    else {
      $(this).addClass("present");
    }
  })

  // Gets items from local storage and sets them on the page.
  let task9 = localStorage.getItem('description9');
  $("#9").val(task9);
  let task10 = localStorage.getItem('description10');
  $("#10").val(task10);
  let task11 = localStorage.getItem('description11');
  $("#11").val(task11);
  let task12 = localStorage.getItem('description12');
  $("#12").val(task12);
  let task13 = localStorage.getItem('description13');
  $("#13").val(task13);
  let task14 = localStorage.getItem('description14');
  $("#14").val(task14);
  let task15 = localStorage.getItem('description15');
  $("#15").val(task15);
  let task16 = localStorage.getItem('description16');
  $("#16").val(task16);
  let task17 = localStorage.getItem('description17');
  $("#17").val(task17);

  // Display the current date in the header of the page.
  let currentDayEl = document.querySelector("#currentDay");
  currentDayEl.textContent = dayjs().format('MM/DD/YYYY');

});
