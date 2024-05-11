function main() {
    for (let charCode = `a`.charCodeAt(0); charCode <= `z`.charCodeAt(0); charCode++) {
        console.log(`${charCode} e ${String.fromCharCode(charCode)}`);
    }
}

main();