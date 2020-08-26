var subtotal = 0.00;
var finalAmount = 0.00;

function generateAmount() {
    var cost = Math.random() * 200 + 20;
    subtotal = cost;
}

$(document).ready(function() {

    generateAmount();
    calculateTotal();
    $("p#subtotal").text("Subtotal:$" + subtotal.toPrecision(5).toString());
    $("p#finaltotal").text("Order total:$" + finalAmount.toPrecision(5).toString());
});

function calculateTotal() {
    finalAmount = subtotal + (subtotal * .035);
}