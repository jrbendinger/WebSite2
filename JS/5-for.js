for (var i = 1; i <= 10; i++) {
    document.write("<p>" + i + "</p>");
    }
for (var j = 100; j >= 1; j--) {
    if(j == 50) {
        break;
    }
    if(j % 3 == 0) {
        document.write("<div>" + "<p style='color: red'>" + j + "</p>" + "</div>");
    } else {
        document.write("<p>" + j + "</p>");
    }
   
}