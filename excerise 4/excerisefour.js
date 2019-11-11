for (i = 0; i < 10; i++) {
    if (i < 5) {
        var answer = prompt("please enter a number between 5 and 10:");
    } else {
        var answer = prompt("Seriously, please give me a number bigger than 5 smaller than 10:");
    }


    var num = Number(answer);

    if ((num > 5) && (num < 10)) {
        alert("Congratulations, you know math !");
        i = 100;
    }
}

if (i == 100) {
    alert("I give-up! You definetely have some problems !");
}