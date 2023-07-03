function change(arr) {
    arr[0] = 2;
    console.log(arr);
}

let arr = [1, 2, 3];
change([...arr]);
console.log(arr);