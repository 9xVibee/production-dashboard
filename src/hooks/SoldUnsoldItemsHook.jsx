import { useEffect, useState } from "react";
import FilterData from "./FilterData";

const SoldUnsoldItemsHook = () => {
  const { filteredData } = FilterData();

  const [NumberOfSoldAndUnsoldItems, SetNumberOfSoldAndUnsoldItems] = useState({
    sold: 0,
    unSold: 0,
    total: filteredData?.length,
  });

  const countSoldUnsoldQuantity = () => {
    let sold = 0,
      unSold = 0;

    filteredData?.forEach((item) => {
      item?.sold ? sold++ : unSold++;
    });

    SetNumberOfSoldAndUnsoldItems(() => ({
      total: filteredData?.length,
      sold: sold,
      unSold: unSold,
    }));
  };

  useEffect(() => {
    countSoldUnsoldQuantity();
  }, [filteredData]);

  return { NumberOfSoldAndUnsoldItems };
};

export default SoldUnsoldItemsHook;
