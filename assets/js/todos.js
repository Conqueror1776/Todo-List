// Check Off Specific To-dos by clisking
$("ul").on("click", "li", function() {
  $(this).toggleClass("checked");
});

//Click on X to delete // TODO:
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    var todoText = $(this).val();
    if (todoText.length > 0) {
      $(this).val("");
      $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText+"</li>");
    }
  }
});

$(".fa-plus").click(function(){
  $("ul").fadeToggle();
  $("input").fadeToggle();
});




$("ul").sortable( {
  cursor: 'move'
});

$("#container").draggable( {
  cursor: 'move',
  snap: false
});


/*
// Dragging and Dropping Todos
var dragSrc = null;
var draghtml = null;

$("li").on("dragstart", function(){
  $(this).toggleClass("dragged");
  dragSrc = $(this);
  draghtml = $(this).html();
});

$("li").on("dragend", function(){
  $(this).toggleClass("dragged");
});

$("li").on("dragenter", function(){
  $(this).toggleClass("over");
});

$("li").on("dragleave", function(){
  $(this).toggleClass("over");
});

$("li").on("drop", function(){
  $(this).toggleClass("over");
  $(this).css("fontSize","100px");
  console.log($(this).dataTransfer.getData('text/html'));
});
*/
