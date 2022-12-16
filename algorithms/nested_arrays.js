/* Nesting Arrays

// var arr2d = [ [2, 5, 8],
//               [3, 6, 1],
//               [5, 7, 7] ];
    
// We can console.log the `8` in this array if we
// console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

function isPresent2d(arr2d, value)
{
    let isPresent = true;

    for (var i=0; i < arr2d.length; i++)
    {
        for (var j=0; j < arr2d[i].length; j++)
        {
            // console.log(arr2d[i][j]);
            // console.log("value is: " + value)
            
            if (arr2d[i][j] == value)
            {
                isPresent = "Yes";
                // console.log(isPresent);
                return isPresent;
            }
            
            else
            {
                isPresent = "No";
            }
            
            // console.log(isPresent); 

        }
    }
    return isPresent;
}

var arr2d = [ [2, 5, 8, 17],
              [3, 6, 1, 1, 10, -5],
              [5, 7, 2],
              [5, 7, 7],
              [5, 10, 7, 89, 45, 23] ];

var value = -89;

console.log("Is " + value + " in the array? " + isPresent2d(arr2d, value));*/

/* Flatten Array*/

// complete the following function
function flatten(arr2d)
{
    var flat = [];
    var tempValue = 0;
    
    for(var i = 0; i < arr2d.length; i++)
    {
        for (var j = 0; j < arr2d[i].length; j++)
        {
            tempValue = arr2d[i][j];
            flat.push(tempValue);
            
        }
    }
    return flat;
}
    
var result = flatten([[2, 5, 8],[3, 6, 1],[5, 7, 7]]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

