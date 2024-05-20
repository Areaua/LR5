function sumInput()
{
    let arr = [];

    while (true) 
    {
        let n = Number(prompt("Введіть число"));
        if (!n) break;
        if (typeof n == String) break;
        arr.push(n);
    }

      alert(arr);
 
    let result = arr.reduce((sum, current) => sum + current, 0);
    alert(result);
}
console.log(sumInput())