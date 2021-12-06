function createform() {
    //create a form with name
    var item = "Speaker information";
    var form = FormApp.create(item).setTitle(item);

    // Single Line Text field
    item = "Name , Title , Organisation";
    form.addTextItem().setTitle(item).setRequired(true);
    //MCQ radiobuttuon
    item = "Employee name";
    var choices = ["test1", "test2", "test3", "test4"];
    form.addMultipleChoiceItem().setTitle(item).setChoiceValues(choices).setRequired(true);
    //mcq type 2
    item = "parameter if any";
    var params = ["prductivity", "testQue1", "testQue2", "testQue4"];
    var rote = ["1", "2", "3", "4"];
    form.addGridItem().setTitle(item).setColumns(params).setRows(rote).setRequired(true);

}