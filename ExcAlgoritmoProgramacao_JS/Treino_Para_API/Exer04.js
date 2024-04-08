function main() {
    let outstandingBalance = 3_000;
    const PORTION = 200;
    let totalInterest = 0;
    let countMonth = 0;

    while (outstandingBalance > 0) {
        let fees = outstandingBalance * (0.85 / 100);
        totalInterest += fees;
        outstandingBalance = (outstandingBalance - PORTION) + (fees);
        countMonth++;
    }
    console.log(`\nForam necessários ${countMonth} para quitar o empréstimo de R$:3.000,00 e \ntotal de juros pago foi de R$:${totalInterest.toFixed(2)}.\n`)
}

main();