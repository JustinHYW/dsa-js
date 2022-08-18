

function mergeSortArrays(arr1, arr2) {

    const arr3 = [];
    let arrayItem1 = arr1[0];
    let arrayItem2 = arr2[0];
    let i = 1;
    let j = 1;

    if(arr1.length === 0){
        return arr2;
    }
    if(arr2.length === 0){
        return arr1;
    }



    while(arrayItem1 || arrayItem2){

        if( !arrayItem2 || !arrayItem1 ||arrayItem1 < arrayItem2){
            arr3.push(arrayItem1);
            arrayItem1 = arr1[i]
            i++;
        }
        else{
            arr3.push(arrayItem2);
            arrayItem2 = arr2[j];
            j++;
        }
        
    }
    return arr3;
    
}



console.log(mergeSortArrays([0,3,4,7,100], [4,6,30,,10,99,111]));