console.log("connected");

var numbers = function() {
    var numMenu = document.lotto.numCount;
    var numCount = numMenu.options[numMenu.selectedIndex].value * 1;
    
    var maxNum = document.lotto.maxNum.value * 1;

    if (numCount > maxNum) {
        alert("SELECT A MAX LOTTO NUMBER!");
    }
    
    else {
        // ??come up with clean logic

        var numSet = 1;

        r = new Array (numCount);

        for (var i = 1; i <= numCount; i++) {
            r[i] = Math.round(Math.random() * (maxNum - 1)) + 1;
        }
        for (var i = numCount; i >= 1; i--) {
            for (var j = numCount; j >= 1; j--) {
                if ((i != j) && (r[i] == r[j])) numSet = 0;
            }
        }

        if (numSet) {
            var output = "";
            for (var z = 1; z <= numCount; z++) {
                output += z + r[z] ;
            }
            document.lotto.results.value = output;

        }
        else numbers();
        
        
    }
    // !if statement 

}