var twoSum = function(nums, target) {

    const map = new Map()

    for(i = 0; i < nums.length; i++){

        const currentMapVal = map[nums[i]];

        if(currentMapVal >= 0){
            return [currentMapVal, i];
        }
        else{
            let numberToFind = target - nums[i];
            map[numberToFind] = i;
        }

    }

    return null;
};

console.log(twoSum([1,3,6,8,5], 14));