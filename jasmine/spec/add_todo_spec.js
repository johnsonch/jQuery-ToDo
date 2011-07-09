describe('I add a ToDo', function () {
  var mocks = {};
  beforeEach(function () {
    loadFixtures("index.html");

    mocks.todo = "something fun";
    //setFixtures("<input type='text' id='todo'/> <span id='create'>Add ToDo Item</span>");
    $('#todo').val(mocks.todo);
  });

  it('should call the addToDo function when create is clicked', function () {
    ToDo.setupCreateClickEvent();
    spyOn(ToDo, 'addToDo');
    $('#create').click();
    expect(ToDo.addToDo).toHaveBeenCalled();
  });

  it('should trigger a click event when create is clicked.', function() {
    spyOnEvent($('#create'), 'click');
    $('#create').click();
    expect('click').toHaveBeenTriggeredOn($('#create'));
  });
  
});

