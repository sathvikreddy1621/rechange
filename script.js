async function fetchPrices() {
const display = {
btc: document.getElementById('btc-price'),
eth: document.getElementById('eth-price'),
doge: document.getElementById('doge-price')
};


try {
const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd';
const res = await fetch(url, { cache: 'no-cache' });
if (!res.ok) throw new Error('Network response not OK: ' + res.status);
const data = await res.json();


display.btc.innerText = '$' + (data.bitcoin?.usd ?? '--').toLocaleString();
display.eth.innerText = '$' + (data.ethereum?.usd ?? '--').toLocaleString();
display.doge.innerText = '$' + (data.dogecoin?.usd ?? '--');
} catch (err) {
console.error('Error loading prices', err);
// show fallback text
display.btc.innerText = '$--';
display.eth.innerText = '$--';
display.doge.innerText = '$--';
}
}


fetchPrices();
setInterval(fetchPrices, 30000);
