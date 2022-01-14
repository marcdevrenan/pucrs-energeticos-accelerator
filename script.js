// TEST DATA 1: Supermercado Dosul; 350;
// TEST DATA 2: Super Zottis; 400;

// SAÍDA
// Cliente: Supermercados Dosul
// ICMS: R$283.50; IPI: R$63.00; PIS: R$29.29; COFINS: R$134.50; Total: R$2085.30

// Cliente: Super Zottis
// ICMS: R$324.00; IPI: R$72.00; PIS: R$33.48; COFINS: R$153.72; Total: R$2383.20

// Total Impostos: R$1093.50
// Total Mercadorias: R$3375.00
// Total Geral: R$4468.49

let impostos = [];
let mercadorias = [];
let geral = [];

const calcNota = function () {
    const cliente = prompt("Entre com o nome do cliente:");
    const qtd = prompt("Entre com a quantidade de energéticos vendida:");

    const totalParcialDeVenda = qtd < 1000 ? qtd * 4.5 : qtd * 3;
    const icms = 0.18 * totalParcialDeVenda;
    const ipi = 0.04 * totalParcialDeVenda;
    const pis = 0.0186 * totalParcialDeVenda;
    const cofins = 0.0854 * totalParcialDeVenda;
    const total = totalParcialDeVenda + icms + ipi + pis + cofins

    const totalParcialDeImpostos = icms + ipi + pis + cofins;
    const totalParcialDeMercadorias = totalParcialDeVenda;
    const totalParcialGeral = totalParcialDeImpostos + totalParcialDeMercadorias;

    console.log(`
        Cliente: ${cliente}
        ICMS: R$${parseFloat(icms).toFixed(2)}
        IPI: R$${parseFloat(ipi).toFixed(2)}
        PIS: R$${parseFloat(pis).toFixed(2)}
        COFINS: R$${parseFloat(cofins).toFixed(2)}
        Total: R$${parseFloat(total).toFixed(2)}
    `);

    impostos.push(totalParcialDeImpostos);
    mercadorias.push(totalParcialDeMercadorias);
    geral.push(totalParcialGeral);

    menuPrincipal();
};

const relatorio = function () {
    let totalImpostos = 0;
    let totalMercadorias = 0;
    let totalGeral = 0;

    for (i = 0; i < impostos.length; i++) {
        totalImpostos += impostos[i];
    };

    for (i = 0; i < mercadorias.length; i++) {
        totalMercadorias += mercadorias[i];
    };

    for (i = 0; i < geral.length; i++) {
        totalGeral += geral[i];
    };

    console.log(`
        Total Impostos: R$${parseFloat(totalImpostos).toFixed(2)}
        Total Mercadorias: R$${parseFloat(totalMercadorias).toFixed(2)}
        Total Geral: R$${parseFloat(totalGeral).toFixed(2)}
    `);

    menuPrincipal();
};

const menuPrincipal = function () {
    console.log("[1] - Nova nota");
    console.log("[2] - Relatório");

    const opcao = prompt("Escolha a opção desejada:");

    if (opcao === "1") {
        calcNota();

    } else if (opcao === "2") {
        relatorio();

    } else {
        console.log("Encerrando...")
    };
};

menuPrincipal();
