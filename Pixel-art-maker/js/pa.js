// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
function makeGrid(rows, columns) {
  // Delete all content inside <table> to have a "fresh" grid
  $("#pixel_canvas").children().remove();
  //loop to create table columns and rows based on the rows and columns values
  for (i = 0; i < rows; i++) {
    $("#pixel_canvas").append("<tr></tr>");
    var j = 0;
    while (j < columns) {
      $("#pixel_canvas").children().last().append("<td></td>");
      j++;
    }
  }
}

$(document).ready(function() {
  // Event Listener to change color of clicked cell of table #pixel_canvas
  // to the color value of #colorPicker
  $("#pixel_canvas").on("click", "td", function() {
    $(this).css("background-color", $("#colorPicker").val());
  });

  // Event listener to call function makeGrid if input button is clicked
  // Default button behavior is turned off.
  $("#sizePicker").on("submit", function(event) {
    // First stop the form from submitting
    event.preventDefault();
    // Second call function makeGrid
    makeGrid($("#input_width").val(), $("#input_height").val());
  });

  //On right click set attribute to null - erase selected fields
  $("#pixel_canvas").on("contextmenu", "td", function(del) {
    del.preventDefault();
    $(this).css("background-color", "");
    $(this).css("border-radius", "");
  });


  // change input to circle
  $("#pixel_canvas").on("dblclick", "td", function(circle) {
    circle.preventDefault();
    $(this).css("border-radius", "50%");
  });
});
