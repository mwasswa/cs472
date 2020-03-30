function alertMessage() {
    //alert("Hello, world!");
    document.getElementById("text-area").style.fontSize = "4em";
    document.getElementById("text-area").style.textAlign = "right";

    var size = document.getElementById("text-area").style.fontSize;
    var newSize = parseFloat(size) + 2.0;
    document.getElementById("text-area").style.fontSize = newSize +"em";
    console.log(newSize);
}

function checkboxFunc() {
    //alert("Here");
    if (document.getElementById("checkbox").checked) {
        document.getElementById("text-area").style.fontWeight = "bold";
        document.getElementById("text-area").style.color = "green";
        document.getElementById("text-area").style.textDecoration = "underline";
    }

}



