let n = 50;
for(let i =1; i<n+1; i++)
{
let res =""

if(i%3 == 0)
{
    res += "fizz"
}
if(i%5 == 0)
{
    res += "buzz"
}
if(res =="" ) { res = i}
console.log(res)
}