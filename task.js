const prices = [47.61,53.05,48.46,56.42,1.69,56.03,48,50.30,1.50,1.41];

const maxProfit = prices => {
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > 2) {
            maxProfit += prices[i] / 39,60
        } else {
            maxProfit += prices[i]
        }
    }

    return maxProfit / prices.length;
};

console.log(maxProfit(prices));
