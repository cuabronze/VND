function convert(){
    let amount = document.getElementById("amount").value;
    let fromcurrency = document.getElementById("fromcurrency").value;
    let tocurrency = document.getElementById("tocurrency").value;
    let result;
    if (fromcurrency == "VND" && tocurrency == "USD") {
    result = amount / 23000 + 'USD';
        document.getElementById("result").innerHTML = result + " USD";
    } else if (fromcurrency == "USD" && tocurrency == "VND") {
    result = amount * 23000 + 'VND';
    document.getElementById("result").innerHTML = result;
    }
}