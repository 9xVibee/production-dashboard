/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { COUNT_ABOVE, COUNT_BELOW } from "../utils/data";

const FilterData = () => {
  const { isCountAboveOrBelow, endDate } = useSelector(
    (store) => store.fakeapidata
  );
  const data = useSelector((store) => store.fakeapidata.data);
  const startDate = useSelector((store) => store.fakeapidata.startDate);

  const [filteredData, setFilteredData] = useState(data);

  const filterData = () => {
    let newFilteredData = data;

    if (isCountAboveOrBelow) {
      newFilteredData = data?.filter((item) => {
        if (
          (isCountAboveOrBelow === COUNT_BELOW && item?.rating?.count <= 100) ||
          (isCountAboveOrBelow === COUNT_ABOVE && item?.rating?.count > 100)
        )
          return item;
      });
    }

    if (startDate) {
      newFilteredData = newFilteredData?.filter((item) => {
        return (
          new Date(item.date) >= new Date(startDate) &&
          new Date(item.date) <= new Date(endDate)
        );
      });
    }

    newFilteredData?.sort((a, b) => new Date(a.date) - new Date(b.date));
    setFilteredData(newFilteredData);
  };

  useEffect(() => {
    filterData();
  }, [startDate, isCountAboveOrBelow, data, endDate]);

  return { filteredData };
};

export default FilterData;
