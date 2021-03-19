export const increaseItem = (items, item) => {
  let isItemInCart = false;
  let total = 0;

  const newItems = items.map((element) => {
    if (element.id === item.id) {
      isItemInCart = true;

      const count = ++element.count;
      const elementTotal = count * element.price;
      total += elementTotal;

      return {
        ...item,
        count: count,
        total: total,
      };
    };

    total += element.total;
    return element;
  });

  if (!isItemInCart) {
    newItems.push({
      ...item,
      count: 1,
      total: item.price,
    });

    total += item.price;
  }

  return {
    items: newItems,
    total,
  };
};

export const decreaseItem = (items,item) => {
  return  items.reduce((acc, element) => {
    if (element.id !== item.id) {
      acc.push(element);

      return acc;
    }

    if (element.count > 1 ) {
      const count = --element.count;

      acc.push({
        ...item,
        count: count,
        total: count * item.price,
      });
    }

    return acc;
  }, []);
};

export const deleteItem = (items, item) => {
  return items.reduce((acc, element) => {
    if (element.id !== item.id) {
      acc.push(element);

      return acc;
    }

    return acc;
  }, []);
};
