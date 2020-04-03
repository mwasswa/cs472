$(function(){
    //alert("ready here");
    let addProduct = $("#addProduct");
    addProduct.on('click', displayData);
    let resultsDiv = $("#resultsDiv");
    function displayData(event){
        let productNumber = $("#productNumber").val();
        let quantityInStock = $("#quantityInStock").val();
        let inputAddress = $("#inputAddress").val();
        let supplier = $("#supplier").val();
        let unitPrice = $("#unitPrice").val();
        let dateSupplied = $("#dateSupplied").val();
        resultsDiv.html(`Product Number: ${productNumber}<br>
                           Quantity In Stock: ${quantityInStock}<br>
                           Address: ${inputAddress}<br>
                           Supplier: ${supplier}<br>
                           Unit Price: ${unitPrice}<br>
                           Date Supplied: ${dateSupplied}`);
        
        event.preventDefault();
    }
});