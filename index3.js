function getMaxSubSum(arr)
{
    let newarr = arr.filter(function(element) 
    {
        return element >= 0;
    });

    let result = newarr.reduce((sum, current) => sum + current, 0);
    let maxNumber = Math.max(...newarr); 
    if (maxNumber > (result - maxNumber))
        {
            alert(maxNumber);
        }
    else
        {
            alert(result);
        }



}
getMaxSubSum([55,-5,-25, 56, 2])





