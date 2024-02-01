const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar ao usuário a quantidade de golpes desejados
rl.question('Quantidade de golpes: ', (totalGolpes) => {
    totalGolpes = parseInt(totalGolpes);

    // Loop para simular cada golpe
    for (let golpe = 1; golpe <= totalGolpes; golpe++) {
        // Lógica para determinar o minério obtido com base no número do golpe
        let minerio;
        switch (golpe) {
            case 1:
                minerio = "Carvao";
                break;
            case 2:
                minerio = "Ferro";
                break;
            case 3:
                minerio = "Diamante";
                break;
            case 4:
                minerio = "Ouro";
                break;
            default:
                minerio = "Pedra";
                break;
        }

        // Exibir o resultado do golpe
        console.log(`${golpe}: ${minerio}`);
    }

    rl.close();
});
