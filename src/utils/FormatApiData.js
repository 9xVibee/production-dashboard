const FormatData = (data) => {
  let soldArr = [true, false];

  let newFormattedData = data?.map((items) => {
    let date = new Date();
    date.setDate(date.getDate() + Math.floor(Math.random() * 100));
    const dateObj = new Date(date.toISOString().substring(0, 10));

    const monthStr = dateObj.toLocaleString("default", { month: "long" });
    const yearNum = dateObj.getFullYear();

    return {
      ...items,
      date: date.toISOString().substring(0, 10),
      sold: soldArr[Math.floor(Math.random() * 2)],
      formattedDate: `${monthStr} ${yearNum}`,
      price: items.price > 800 ? 450 : items.price,
    };
  });

  return newFormattedData;
};

export default FormatData;
