$("#SoafCalc").on("click", function () {
    var num_1 = Number($("#num_1").val());
    var num_2 = Number($("#num_2").val());
    var num_3 = Number($("#num_3").val());
    var num_4 = Number($("#num_4").val());
    var num_K = Number($("#num_K").val());
    let numberArray = [];

    numberArray.push(num_1, num_2, num_3, num_4);
    let product = 0;

    for (var i = 0; i < numerArray.length; i++) {

        for (var x = i + 1; x < numberArray.length; x++) {

            product = numberArray[x] + numberArray[i];

            if (product == num_K) {
                console.log(`The numbers ${numberArray[i]} and ${numberArray[x]} add up to ${num_k}`);
                $("#SoafNumbers").append(`The numbers ${numberArray[i]} and ${numberArray[x]} add up to ${num_K} (K)<br>`);
            }
            else {
                $("#SoafNumbers".append(`The numbers ${numberArray[i]} and ${numberArray[x]} DO NOT add up to ${num_K} (K)<br>`);
            }
        }
    }
});



//given k = 8
//given 5 integers: 4 6 4 9 1
//search forward

$("#btnSoaf").on("click", function () {
    let k = Number($("#k").val());

    let myArray = new Array();
    // let sofaInput1 = Number($("#sofaInput1").val());
    //myArray.push(soafInput1);
    //intermediate variables help debugging
    myArray.push(Number($("#soafInput1").val()));
    myArray.push(Number($("#soafInput2").val()));
    myArray.push(Number($("#soafInput3").val()));
    myArray.push(Number($("#soafInput4").val()));
    myArray.push(Number($("#soafInput5").val()));


    //k = 14
    //3 6 8 9 4
    let target = 0;
    //loop over each item in the array 1 at a time
    for (var index = 0; index < myArray.length; index++) {
        //determine what number you need to solve for the given k....
        //find k - myArray[index]
        //myArray[0] = 15 15 > k then continue
        //find 14 - 3 or 11 in the remaining array members
        //myArray[1] = 6
        //14 - 6 = 8
        taget = k - myArray[index];

        //arr.indexOf(searchElement[, fromIndex])
        let result = myArray.indexOf(target, index + 1);

    }

});
