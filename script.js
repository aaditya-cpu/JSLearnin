const u = document.getElementById('upptxt');

window.onload = () => {
    let x = prompt("Whats your name?");
    document.getElementById('welcome').innerHTML = 'welcome ' + x;
};