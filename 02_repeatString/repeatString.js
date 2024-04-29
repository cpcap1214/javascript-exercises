const repeatString = function(word, times) {
    let ans = "";
    if(times < 0) {
        return "ERROR";
    }
    else {
        for(let i = 0 ; i < times ; i++) {
            ans += word;
        }
        return ans;
    }
};

// Do not edit below this line
module.exports = repeatString;
