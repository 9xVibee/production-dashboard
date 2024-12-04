import { useEffect, useState } from "react";
import FilterData from "./FilterData";
import { COLORS_TOP_CATEGORY } from "./../utils/data";

const TopCateogry = () => {
  const { filteredData } = FilterData();

  const [pieData, setPieData] = useState();

  const findTopThreeCategory = () => {
    let count = {},
      others = 0;

    filteredData?.forEach((item) => {
      if (count[item?.category]) {
        count[item?.category] = count[item?.category] + 1;
      } else count[item?.category] = 1;
    });

    let hashMapToArray = Object.entries(count);

    hashMapToArray.sort((a, b) => b[1] - a[1]);

    let pieInfoData = [];

    hashMapToArray.forEach((item, idx) => {
      let TempArr = item;
      if (idx < 2) {
        pieInfoData[idx] = {
          title: TempArr?.[0],
          value: `${TempArr?.[1]} quantity`,
          color: COLORS_TOP_CATEGORY[idx],
        };
      } else others += TempArr?.[1];
    });

    pieInfoData[2] = {
      title: "others",
      value: `${others} quantity`,
      color: COLORS_TOP_CATEGORY[2],
    };

    setPieData((prev) => {
      return { ...prev, arr: hashMapToArray };
    });
  };

  useEffect(() => {
    findTopThreeCategory();
  }, [filteredData]);

  return { pieData };
};

export default TopCateogry;
