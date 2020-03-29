function logInputs(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log(email + " " +password);
}

function displayInputs(){
    var productNumber = "Product Number: " + document.getElementById("productNumber").value + "\n";
    var qty = "Quantity: " + document.getElementById("quantityInStock").value + "\n";
    var supplier = "Supplier: " + document.getElementById("supplier").value + "\n";
    var address = "Address: " + document.getElementById("inputAddress").value + "\n";
    var price = "Unit Price: " + document.getElementById("unitPrice").value + "\n";
    var date = "Date Supplied: " + document.getElementById("dateSupplied").value + "\n";

    alert(productNumber + qty + supplier + address + price + date);
}