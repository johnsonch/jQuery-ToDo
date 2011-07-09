var ToDo = {
  setupCreateClickEvent: function(){
    $('#create').click(function(){
      ToDo.addToDo($('#todo').val());
      $('#todo').val("");
    });
  },
  addToDo: function(todo){
    $('#todo_list').append("<li>" + todo + "</li>"); 
  }
};
