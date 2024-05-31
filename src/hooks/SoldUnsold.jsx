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

    filteredData?.forEach((item) => {
      if (item?.sold) sold++;
      else unsold++;
    });

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
