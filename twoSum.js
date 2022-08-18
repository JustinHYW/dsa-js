function twoSum(nums, target) {
    var maps = {};
    for(var i=0; i<nums.length; i++){
        var value  = nums[i];
        var diff = target - value;

        if(maps[diff] !== undefined){
            return [maps[diff] , i];
        }
        else{
            maps[value] =i;
        }
    }
    
}
console.log(twoSum([2,7,11,15] , 9))