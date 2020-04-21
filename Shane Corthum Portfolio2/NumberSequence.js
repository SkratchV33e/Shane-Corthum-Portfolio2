
$("#btnCalc").on("click", function () {
    //Step 1: Get user input
    var num1 = Number($("#num1").val());
    var num2 = Number($("#num2").val());
    var num3 = Number($("#num3").val());
    var num4 = Number($("#num4").val());
    var num5 = Number($("#num5").val());
    let numbers = [num1, num2, num3, num4, num5]
    var numFactor = Number($("#numFactor").val());



    //Step 2: Do something with it matchmatical calculation
    //perform Sum and Product
    var sum = num1 + num2 + num3 + num4 + num5;
    var product = num1 * num2 * num3 * num4 * num5;
    var mean = sum / 5;
    var least = Math.min(...numbers)
    var greatest = Math.max(...numbers)

    //Step 3: Output the results
    //$("#output").text("The sum is: " + sum);
    //$("#output").append("The product is: " + product);
    //$("#output").html("The sum is: " + sum + "<br> The product is: " + product);
    $("#output").html(`The sum is: ${sum} <br> The product is: ${product} <br> The mean is: ${mean} <br> The least number is: ${least} <br> The greatest number is: ${greatest}`);
    //$("#output").html("The sum is: " + sum);
    //$("#output").html("The sum is: " + product);

});
