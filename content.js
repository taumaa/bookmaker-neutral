// ZVdN0a

const betAmountPerOdds = 1500;

const calculateNeutralLoss = (div) => {
    // First get all buttons inside the div with class "ZVdN0a"
    const buttons = div.querySelectorAll('.ZVdN0a button');

    // Then get the odds from the buttons, we must find span inside dive with class "Lej0Zy" inside our buttons
    const odds = Array.from(buttons).map(button => {
        const span = button.querySelector('.Lej0Zy span');
        return span ? span.textContent : '';
    })

    let cost = 0;
    // Then we calculate the neutral loss, we take each odd, we divide by bet amount and we sum all the results
    odds.forEach(odd => {
        cost += (betAmountPerOdds / odd)
    })
    const neutralLoss = cost - betAmountPerOdds;

    // Append to div with class "block text-label font-medium text-white hover:underline" the text <span style="color: red;">n$ Loss</span>
    const text = document.createElement('span');
    text.style.color = '#ee4747';
    text.textContent = ` ${neutralLoss.toFixed(2)}$ loss (1500$ bet)`;
    div.querySelector('.block.text-label.font-medium.text-white').appendChild(text);


}

function checkClearInterval() {

    const selector = '.mt-4.bg-80.rounded-8.ds\\:flex.ds\\:items-center.ds\\:h-56.ds\\:p-8';
    const divs = document.querySelectorAll(selector);

    console.log(`Vérification...`);
    // Si au moins une div est trouvée
    if (divs.length > 0) {
        console.log(`Nombre de divs récupérées : ${divs.length}`);
        // Arrête l'intervalle
        clearInterval(intervalId);

        // Pour chaque div
        divs.forEach(div => {
            calculateNeutralLoss(div);
        });

    }
}

// Stocke l'ID de l'intervalle pour pouvoir l'arrêter plus tard
let intervalId = setInterval(checkClearInterval, 5000);
