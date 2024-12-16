'Use strict'

// Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

const hryvnia = 26;

for( let dollar = 10;  dollar <= 100; dollar += 10) {
    const exchangeRate = hryvnia * dollar; 
    console.log(dollar + ' ' + 'usd' + '=' + exchangeRate + " " + 'uah');
}
