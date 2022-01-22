num = 10;
num2 = 2;
function add(num){
return (num += 5);
}
function subtract(num){
return (num -= 5);
}
function multiply(num){
return ((num*= 2));
}
function divide(num){
return (num /= 2);
}
function add(num, num2){
    return (num += num2);
    }
    function subtract(num, num2){
    return (num -= num2);
    }
    function multiply(num, num2){
    return (num *= num2);
    }
    function divide(num,num2){
    return (num /= num2);
    }
    function increment(n)
    {
        n++;
        return n;
    }
    function decrement(n)
    {
        n--;
        return n;
    }
    function makeInt(n)
    {
       return parseInt(n, 10);
    }
    function preserveDecimal(n)
    {
        return parseFloat(n);
    }