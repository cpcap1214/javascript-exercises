const sumAll = function(para_one, para_two) {
    if(para_one < 0 || para_two < 0) return "ERROR";
    if(typeof para_one !== "number" || typeof para_two !== "number") return "ERROR";
    if(para_one > para_two) {
        let temp = para_one;
        para_one = para_two;
        para_two = temp;
    }
    let ans = 0;
    for(let i = para_one ; i <= para_two ; i++){
        ans += i;
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
