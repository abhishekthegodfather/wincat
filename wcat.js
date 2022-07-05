#!/use/bin/env node

let fs = require('fs');
let path = require('path');

let input_arg = process.argv.slice(2);
console.log("The input command in form of array", input_arg);
console.log("`````````````````````````````````````")

let opsArray = [];
let fileArray = [];


for (let i = 0; i < input_arg.length; i++) {
    let first_char = input_arg[i].charAt(0);
    if (first_char == '-') {
        opsArray.push(input_arg[i]);
    } else {
        fileArray.push(input_arg[i]);
    }
}

console.log("List of options specified on the command", opsArray);
console.log("List of options specified on the command", fileArray);
console.log("`````````````````````````````````````")


for (let i = 0; i < fileArray.length; i++) {
    let does_file = fs.existsSync(fileArray[i]);
    if (does_file == false) {
        console.log(`${fileArray[i]}`, " Doesnot exits, plese check once");
        return;
    }
}


content = "";
for (let i = 0; i < fileArray.length; i++) {
    let buffer_read = fs.readFileSync(fileArray[i]);
    content += buffer_read + '\r\n';
}

// console.log(content);


let content_arr = content.split("\r\n");
// console.log(content_arr);
// console.log("`````````````````````````````````````")


for (let i = 0; i < opsArray.length; i++) {

    let isBothPresent = opsArray.includes("-b") && opsArray.includes("-n")
    if (isBothPresent == true) {
        console.log(`Both of -n and -b flag can't be used together, please enter only one of them`);
        return;
    }

    if (opsArray[i] == "-s") {
        for (let i = 1; i < content_arr.length; i++) {
            if (content_arr[i] == "" && content_arr[i - 1] == "") {
                content_arr[i] = null
            } else if (content_arr[i] == "" && content_arr[i - 1] == null) {
                content_arr[i] = null;
            }
        }

        let temp_arr = [];
        for (let i = 0; i < content_arr.length; i++) {
            if (content_arr[i] != null) {
                temp_arr.push(content_arr[i]);
            }
        }

        content_arr = temp_arr;
        // console.log(content_arr);


    }

    if (opsArray[i] == "-n") {

        for (let i = 0; i < content_arr.length; i++) {

            content_arr[i] = `${i+1} ${content_arr[i]}`;
        }

        // console.log(content_arr);
    }

    if (opsArray[i] == "-b") {
        let count = 1;
        for (let i = 0; i < content_arr.length; i++) {
            if (content_arr[i] != "") {
                content_arr[i] = `${count} ${content_arr[i]}`;
                count++;
            }
        }
    }


}

console.log(content_arr.join("\n"));