const items = {
    "item 1" : 10,
    "item 2" : 20,
    "item 3" : 30,
    "item 4" : 40,
    "item 5" : 50
};

const exchangeRate = 80;

const itemsInRupees = Object.keys(items).map((key)=>{
    const priceInRupees = items[key] * exchangeRate;
    return { [key] : priceInRupees}
});

console.log(itemsInRupees);