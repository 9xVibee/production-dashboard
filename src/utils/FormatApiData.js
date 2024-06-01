const FormatData = (data) => {
  let isSoldOrNotBooleanValueArray = [true, false];

  let newFormattedData = data?.map((items) => {
    let date = new Date();
    date.setDate(date.getDate() + Math.floor(Math.random() * 100));
    const dateObj = new Date(date.toISOString().substring(0, 10));

    const monthStr = dateObj.toLocaleString("default", { month: "long" });
    const year = dateObj.getFullYear();

    return {
      ...items,
      date: date.toISOString().substring(0, 10),
      sold: isSoldOrNotBooleanValueArray[Math.floor(Math.random() * 2)],
      formattedDate: `${monthStr} ${year}`,
    };
  });

  return newFormattedData;
};

export default FormatData;
