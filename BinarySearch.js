function binarySearch(arr, val) {

    
    var start = 0;
    var end = arr.length-1;
    var mid = Math.floor((start + end)/2);



    while(arr[mid] !== val){
        if(val < arr[mid]){
            end = mid -1;
        }
        else{
            start = mid + 1;
        }
        mid = Math.floor((start + end)/2);
    }

    return mid;


}


console.log(binarySearch([1,2,3,4,5], 5))