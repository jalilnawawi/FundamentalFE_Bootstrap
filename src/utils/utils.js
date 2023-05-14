const DOLLAR_TO_RUPIAH_EXCHANGE_RATE = 14000;

const formatDollarToRupiah = (price) => {
  return Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price * DOLLAR_TO_RUPIAH_EXCHANGE_RATE);
};

export default formatDollarToRupiah;
