/* Create a function that returns the sum of all odd numbers from 4 to 63.

function sum_odd()
{
    var sum = 0;

    for(var i = 1; i <=15; ++i)
    {
        if(i%2 !== 0)
        {
            sum = sum + i;
        }
    }
    return sum;
}
*/


/* Create a function that will return the difference between the largest and smallest values present in the array.

function rangeOfAnArray(){
	var array = [3, 55, -10, 19, -27, 6, -2, 0, 11, -4];
	var smallest = array[0];
	var largest = array[0];
	
    for (var i = 0; i < array.length; ++i)
    {
        if (array[i] > largest)
        {
            largest = array[i];
        }

        else if (array[i] < smallest)
        {
            smallest = array[i];
        }
    }
    console.log(largest);
    console.log(smallest);
	return largest - smallest; 
}
*/

/* Create a function that will return the index where the value of x first occurs in the array or return -1 if it's not present.

function findIndexOfX(){
	var array = [-3, -55, 10, -19, 27, -6, 2, 0, -11, -4];
    var indexOfX = 0;
	var x = -55;
	
    for (i = 0; i < array.length; ++i)
    {
        if(array[i] == x)
        {
            indexOfX = i;
            break;
        }
        else
        {
            indexOfX = -1;
        }
    }
	return indexOfX; 
}
*/

var msg = 'codingdojo';

for(var x = -1; x <msg.length -4; x+=1)
{
    if(msg.length == 1)
    {
        for(var i = 0; i < 8; i++)
        {
            console.log(i);
        }
    }

    else
    {
        for(var i = msg.length; i > (msg.length - 2); i-=2)
        {
            console.log(i);
        }
    }
}