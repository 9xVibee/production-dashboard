import { useEffect, useState } from "react";
import FilterData from "./FilterData";

const SoldUnsold = () => {
  const { filteredData } = FilterData();

  const [soldUnsoldData, setSoldUnsoldData] = useState({
    sold: 0,
    unsold: 0,
    total: filteredData?.length,
  });

  const countSoldUnsoldQuantity = () => {
    let sold = 0,
      unsold = 0;

    for (let i = 0; i < filteredData?.length; i++) {
      if (filteredData[i].sold) sold++;
      else unsold++;
    }

    setSoldUnsoldData(() => ({
      total: filteredData?.length,
      sold: sold,
      unsold: unsold,
    }));
  };

  useEffect(() => {
    countSoldUnsoldQuantity();
  }, [filteredData]);

  return { soldUnsoldData };
};

export default SoldUnsold;
