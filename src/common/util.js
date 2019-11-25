const isNum = function (str) {
    if (typeof str !== 'undefined') {
        return /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/.test(
            str
        );
    }
}
const b = function () {
    console.log('bbb');
}
const c = function () {
    console.log('ccc');
}
const d = function () {
    console.log('ddd');
}

const checkTableMoney = (rule, value, callback) => {
    if (value) {
        if (!isNum(value)) {
            callback(new Error(rule.message));
        } else if (value < 0 || value > 100000) {
            callback(new Error(rule.message));
        } else {
            callback();
        }
    } else {
        callback();
    }
};

export { b, c, d, checkTableMoney };