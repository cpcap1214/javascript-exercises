const removeFromArray = function(arr, ...ele) {
    let ans = [];
    for(let i = 0 ; i < arr.length ; i++) {
        if(!ele.includes(arr[i])) {
            ans.push(arr[i]);
        }
    }
    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
