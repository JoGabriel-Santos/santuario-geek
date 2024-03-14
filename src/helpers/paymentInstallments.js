const paymentInstallments = (price, numInstallments) => {
    const amount = parseFloat(price.replace(",", "."));

    const installmentValue = amount / numInstallments;

    const formattedInstallmentValue = installmentValue.toFixed(2).replace(".", ",");

    return `${numInstallments}x de R$ ${formattedInstallmentValue} sem juros`;
};

export default paymentInstallments;