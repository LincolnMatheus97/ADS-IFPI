/*
Leia um vetor A com 20 elementos, calcule e escreva o valor de S. 
 S = (A[1] - A[20])^2 + (A[2] - A[19])^2 + ... + (A[9] - A[12])^2 + (A[10] - A[11])^2.
*/

import { print } from "../utils/io_utils.js";

function main() {
    const VETOR_A = [15, 29, 83, 42, 57, 61, 8, 95, 77, 6, 33, 10, 50, 94, 71, 38, 2, 89, 12, 66];
    let s = 0;

    for (let i = 0; i < VETOR_A.length; i++) {
        s = (VETOR_A[i] - VETOR_A[(VETOR_A.length - 1) - i]) ** 2;

    }
    print(`O valor de S = ${s}`);

}

main();