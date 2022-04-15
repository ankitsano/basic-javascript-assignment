// problem 1
function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
console.log(factorialize(5));

// problem 2
let n=6;
let cube;
let cube1=n*n*n;
console.log("cube of a number="+cube1);

// problem 3
let i,
a=25;
area=1;
for(i=1;i<=a;i++){
    area=(1.73*a*a)/4;
}
console.log(Math.round(area*100)/100);

// problem 4
let getDaysInMonth=function(month,year){
    return new Date(year,month,0).getDate();
}
console.log(getDaysInMonth(1,2022));

// problem 5
const celsius=38;
const fahrenheit=(celsius*1.8)+32;
console.log(`${celsius} degree celsius is equal to ${fahrenheit}degree fahrenheit.`);

// probem 6
const number=50;
let sum=0;
for(let i=1;i<=number;i++){
    sum+=i;
}
console.log('the sum of numbers:',sum);

// problem 7
let n=18;
function nthterm(num){
    let term;
    term=num*num
    console.log(term);
}
nthterm(18)

// problem 8
let a="ankit sanodiya";
let str1=a.replace(/ /g,'');
console.log(a,(str1.length));

// problem 9
let a=("1");
let b=("5");
let c=("6");
let root_part=Math.sqrt(b*b-4*a*c);
let denom=2*a;
let root1=(-b+root_part)/denom;
let root2=(-b-root_part)/denom;
console.log("1st root:"+root1);
console.log("2nd root:"+root2);

// problem 10
function segregateEvenOdd(arr) {
    var left = 0, right = arr.length - 1;
    while (left < right) {
        while (arr[left] % 2 == 0 && left < right)
            left++;
        while (arr[right] % 2 == 1 && left < right)
            right--;

        if (left < right) {
            var temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
}

var arr = [12, 34, 45, 9, 8, 90, 3];

segregateEvenOdd(arr);

console.log("Array after segregation ");
for (i = 0; i < arr.length; i++)
    console.log(arr[i] + " ");

// problem 11
function asc(arr) {
    let map = new Map
    let c = 1;
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
        else {
            map.set(arr[i], c)
        }
    }
    let narr = [...map];
    let tmp;
    for (i = 0; i < narr.length; i++) {
        for (j = i + 1; j < narr.length; j++) {
            if (narr[i][1] > narr[j][1]) {
                tmp = narr[i];
                narr[i] = narr[j];
                narr[j] = tmp;
            }
            else if ((narr[i][1] = narr[j][1])) {
                if (narr[i][0] > narr[j][0]) {
                    tmp = narr[i];
                    narr[i] = narr[j];
                    narr[j] = tmp
                }
            }
        }
    }
    return narr;
}
arr = [3, 8, 7, 4, 7, 3, 4];
console.log(asc(arr))

// problem 12
function reverse(num) {
    let rev = 0;
    while (num > 0) {
        rev = rev * 10 + num % 10;
        num = parseInt(num / 10, 10);
    }
    return rev;
}
function isPalindrome(num) {
    if (num == reverse(num))
        return true;

    return false;
}
function printPalindromes(d) {
    if (d <= 0)
        return;
    let smallest = Math.pow(10, d - 1);
    let largest = Math.pow(10, d) - 1;
    for (let i = smallest; i <= largest; i++) {
        if (isPalindrome(i))
            console.log(i + " ");
    }
}
let d = 2;
printPalindromes(d);

// problem 13
function number(a){
    let b
    for(let i=2; i<=a; i++){
        b=(i*i)+i
    }
    console.log(b);
}
number(9)

// problem 14
function leftRotate(arr, d, n) {
    for (let i = 0; i < d; i++)
        leftRotatebyOne(arr, n);
}
function leftRotatebyOne(arr, n) {
    let i, temp = arr[0];
    for (i = 0; i < n - 1; i++)
        arr[i] = arr[i + 1];

    arr[n - 1] = temp;
}
function printArray(arr, size) {
    for (let i = 0; i < size; i++)
        console.log(arr[i] + " ");
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let n = arr.length;
let k = 2;

leftRotate(arr, k, n);
printArray(arr, n);

// problem 15
function evaluatePostfix(exp) {
    let stack = [];
    for (let i = 0; i < exp.length; i++) {
        let c = exp[i];
        if (!isNaN(parseInt(c)))
            stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));
        else {
            let val1 = stack.pop();
            let val2 = stack.pop();

            switch (c) {
                case '+':
                    stack.push(val2 + val1);
                    break;

                case '-':
                    stack.push(val2 - val1);
                    break;

                case '/':
                    stack.push(val2 / val1);
                    break;

                case '*':
                    stack.push(val2 * val1);
                    break;
            }
        }
    }
    return stack.pop();
}
let exp = "531*+9-";
console.log("postfix evaluation: " + evaluatePostfix(exp));


