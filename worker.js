self.onmessage = function (e) {
    var operator = e.data[0],
        numberOne = Number(e.data[1]),
        numberTwo = Number(e.data[2]),
        result = 0;

    switch (operator) {
        case 'sum':
            result = numberOne + numberTwo;
            break;
        case 'subtract':
            result = numberOne - numberTwo;
            break;
        case 'multiply':
            result = numberOne * numberTwo;
            break;
        case 'division':
            if (numberTwo == 0) {
                throw "Divide By Zero Exception";
            }
            result = numberOne / numberTwo;
            break;
        default:
            result = 0;
            break;
    }

    postMessage(result);
}