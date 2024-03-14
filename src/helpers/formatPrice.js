const formatPrice = (value) => {
    let numericValue = parseFloat(value);

    if (!isNaN(numericValue)) {
        value = numericValue.toFixed(2);

        value = value.replace('.', ',');

        if (!value.includes(',')) {
            value += ',00';

        } else if (value.endsWith(',')) {
            value += '00';

        } else if (value.endsWith(',0')) {
            value += '0';
        }
    }

    return value;
};

export default formatPrice;