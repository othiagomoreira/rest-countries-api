export const checkCurrency = (arrayCurrencies) => {
    return typeof arrayCurrencies === 'object'
        ? arrayCurrencies.map((currency) => currency.name)
        : 'Not found';
};

export const checkLat = (location) => {
    return typeof location === 'object' ? location[0] : 28.2167;
};

export const checkLng = (location) => {
    return typeof location === 'object' ? location[1] : -177.367;
};
