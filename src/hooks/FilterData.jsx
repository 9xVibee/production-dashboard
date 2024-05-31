/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FilterData = () => {
  const { count, endDate } = useSelector((store) => store.fakeapidata);
  const data = useSelector((store) => store.fakeapidata.data);
  const startDate = useSelector((store) => store.fakeapidata.startDate);

  const [filteredData, setFilteredData] = useState(data);

  const filterData = () => {
    let newFilteredData = data;

    if (count) {
      newFilteredData = data?.filter((item) => {
        if (count === "below 100" && item?.rating?.count <= 100) return item;
        else if (count === "above 100" && item?.rating?.count > 100)
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
    console.log(newFilteredData);
    setFilteredData(newFilteredData);
  };

  useEffect(() => {
    filterData();
  }, [startDate, count, data, endDate]);

  return { filteredData };
};

export default FilterData;
