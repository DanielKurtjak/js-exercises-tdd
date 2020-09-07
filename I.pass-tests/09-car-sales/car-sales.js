module.exports = (sales) => {
  earnings = {};
  sales.forEach((sale) => {
    earnings[sale.make] = (earnings[sale.make] || 0) + sale.price;
  });
  return earnings;
};
