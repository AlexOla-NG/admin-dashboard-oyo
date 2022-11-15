// STUB: get total value of orders fulfilled, cancelled, and items ordered

const getTotal = (arr) => {
  return arr.reduce(
    (total, currentItem) => {
      const { ordersFulfilled, ordersCancelled } = currentItem;

      total.totalOrdersFulfilled += parseInt(ordersFulfilled);
      total.totalOrdersCancelled += parseInt(ordersCancelled);
      total.totalItemsOrdered +=
        parseInt(ordersCancelled) + parseInt(ordersFulfilled);

      return total;
    },
    {
      totalItemsOrdered: 0,
      totalOrdersFulfilled: 0,
      totalOrdersCancelled: 0,
    }
  );
};

export { getTotal };
