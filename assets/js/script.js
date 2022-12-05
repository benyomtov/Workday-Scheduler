
$(function runScheduler() {

  //save button var
  var saveBtn = $(".saveBtn");
  //arrays used to hold save data and placeholders
  var savedArrayString = localStorage.getItem("descriptionArray");
  var savedArray = JSON.parse(savedArrayString);
  var descriptionArray = ["","","","","","","","",""];
  var forArray = ["","","","","","","","",""];
  //if statement loading placeholders in event there is no save data
  if (savedArray != null) {
    descriptionArray = savedArray; 
  }
  //save button click function, saves user input and stores in appropriate location
  saveBtn.on("click", function() {
    var parentEl = $(this).parent();
    var description = $(this).siblings("textarea");

    if (parentEl.attr("id") === "hour-9") {
      descriptionArray.splice(0, 1, description.val());
    } else if (parentEl.attr("id") === "hour-10") {
      descriptionArray.splice(1, 1, description.val());
    } else if (parentEl.attr("id") === "hour-11") {
      descriptionArray.splice(2, 1, description.val());
    } else if (parentEl.attr("id") === "hour-12") {
      descriptionArray.splice(3, 1, description.val());
    } else if (parentEl.attr("id") === "hour-1") {
      descriptionArray.splice(4, 1, description.val());
    } else if (parentEl.attr("id") === "hour-2") {
      descriptionArray.splice(5, 1, description.val());
    } else if (parentEl.attr("id") === "hour-3") {
      descriptionArray.splice(6, 1, description.val());
    } else if (parentEl.attr("id") === "hour-4") {
      descriptionArray.splice(7, 1, description.val());
    } else {
      descriptionArray.splice(8, 1, description.val());
    }
    console.log(descriptionArray);
    localStorage.setItem("descriptionArray", JSON.stringify(descriptionArray));
    alert("Your input was saved."); 
  });

  var today = dayjs();
  var hours = [dayjs().hour(09), dayjs().hour(10), dayjs().hour(11), dayjs().hour(12), dayjs().hour(13), dayjs().hour(14), dayjs().hour(15), dayjs().hour(16), dayjs().hour(17)];
  var currentHour = today.format("HH");
  //for loop colors timeblocks based on current hour
  for (var i = 0; i < hours.length; i++) {
    var timeBlock = $("body").children().eq(1).children().eq(i);
    var hourFormatted = hours[i].format("HH");

    if (hourFormatted < currentHour) {
      timeBlock.addClass("past");
    } else if(hourFormatted === currentHour) {
      timeBlock.addClass("present");
    } else {
      timeBlock.addClass("future");
    }
  }
  //for loop prints save data to page in appropriate timeblocks
  for (var i = 0; i < forArray.length; i++) {
    var timeBlocks = $("body").children().eq(1).children().eq(i).children().eq(1);
    if (savedArray === null) {
      var descriptionItem = forArray[i];
      timeBlocks.val(descriptionItem);
    } else { 
      var descriptionItem = savedArray[i];
    timeBlocks.val(descriptionItem);
    }
  }

  var currentDay = $("#currentDay");
  currentDay.text(dayjs().format("dddd, MMMM D"));

});
