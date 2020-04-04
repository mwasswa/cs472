$(function(){
    let counter = 0;
    $("#createAccountForm").submit(function(event){
        event.preventDefault();
        let account = $("#account").val();
        let customer = $("#customer").val();
        let accountType = $("#accountType").val();
        counter = counter + 1;
        let displayTable = $("#displayTable");
        $("#tbody").append(
            "<tr><th scope='row'> "+ counter +" </th><td>" 
            + account + "</td><td>" 
            + customer + "</td><td>" 
            + accountType + "</td></tr>"
        );
        displayTable.css("display", "block");
    });
});