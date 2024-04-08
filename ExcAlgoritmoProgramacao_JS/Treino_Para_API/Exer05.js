function main() {
    let populationA = 200_000;
    let populationB = 800_000;
    let countYears = 0;

    while(populationA <= populationB) {
        populationA += (populationA * (3.5 / 100));
        populationB += (populationB * (1.35 / 100));

        countYears++;
    }
    console.log(`Serão necessários ${countYears} anos para que a População A ultrapasse a População B.`);
}

main();