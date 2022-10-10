// Q1

function count(x, y, k, l, arr) {
    let carA = x * k;
    let carB = y * l;

    let i = 0, cnt1 = 0, cnt2 = 0;
    while (carA >= arr[i] || carB >= arr[i]) {
        if (arr[i] <= carA)
            cnt1++;
        if (arr[i] <= carB)
            cnt2++;
        i++;
    }

    console.log(cnt1, cnt2);
}
count(10, 12, 20, 15, [40, 98, 134, 179, 200, 248]);

// Q2
// let nature = prompt("How Are You", "Good");

// Q3
function print(str) {
    let len = str.length;
    let strtIdx = Math.floor(len / 2);
    for (let i = strtIdx; i < len; i += 2) {
        let temp = str.substring(strtIdx, i + 2);
        console.log(temp);
    }

    let begin = str.substring(strtIdx, len) + " ";

    for (let i = 0; i < strtIdx; i += 2) {
        let temp = begin + str.substring(0, i + 2);
        console.log(temp);
    }
}
print("W E L C O M E");

// Q4
function upperCase(str) {
    let ans = "";
    for (let c of str) {
        let idx = c.charCodeAt();
        if (idx >= 97 && idx <= 122) {
            ans += String.fromCharCode(idx - 32);
        }
        else
            continue;
    }
    console.log(ans);
}

function printAll(arr) {
    for (let i = 0; i < arr.length; i++) {
        upperCase(arr[i]);
    }
}

printAll(["divya",
    "seetha",
    "shanmugi",
    "mohan khan",
    "mohan tata"])
