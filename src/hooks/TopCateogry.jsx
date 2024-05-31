import { useEffect, useState } from "react";
import FilterData from "./FilterData";

const TopCateogry = () => {
  const { filteredData } = FilterData();

  const [pieData, setPieData] = useState();
  const colors = [
    {
      light: "#7459D9",
      dark: "#5E5CE6",
    },
    {
      light: "#7459D980",
      dark: "#44448A",
    },
    {
      light: "#E3DEF7",
      dark: "#363653",
    },
  ];

  const findTopThreeCategory = () => {
    let count = {},
      arr = [];
    let others = 0;

    for (let i = 0; i < filteredData.length; i++) {
      if (count[filteredData[i]?.category]) {
        count[filteredData[i]?.category] = count[filteredData[i]?.category] + 1;
      } else count[filteredData[i]?.category] = 1;
    }

    arr = Object.entries(count);

    arr.sort((a, b) => b[1] - a[1]);

    let pieInfoData = [];

    for (let i = 0; i < arr.length; i++) {
      let arr2 = arr[i];
      if (i < 2) {
        pieInfoData[i] = {
          title: arr2?.[0],
          value: `${arr2?.[1]} quantity`,
          color: colors[i],
        };
      } else others += arr2?.[1];
    }

    pieInfoData[2] = {
      title: "others",
      value: `${others} quantity`,
      color: colors[2],
    };

    setPieData((prev) => {
      return { ...prev, arr: arr };
    });
  };

  useEffect(() => {
    findTopThreeCategory();
  }, [filteredData]);

  return { pieData };
};

export default TopCateogry;
