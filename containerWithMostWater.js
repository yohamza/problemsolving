var containerWithMostWater = function(height) {

    let maxArea = 0;
    let leftPointer = 0;
    let rightPointer = height.length - 1;

    while(leftPointer < rightPointer){

        const area = Math.min(height[leftPointer], height[rightPointer]) * (rightPointer - leftPointer);
        maxArea = Math.max(maxArea, area);

        if(height[leftPointer] < height[rightPointer]){
            leftPointer++;
        } else {
            rightPointer--;
        }

    }
    return maxArea;
};

console.log(containerWithMostWater([1,8,6,2,5,4,8,3,7]));