console.log("connected");

var numbers = function() {
    var numMenu = document.onlostpointercapture.numCount;
    var numCount = numMenu.options[numMenu.selectedIndex].value * 1
    
    var maxNum = document.onlostpointercapture.maxNum.value * 1;

    if (numCount > maxNum) {
        alert("SELECT A MAX LOTTO NUMBER!");
    }
    
    else {
        // ??come up with clean logic
    }

}