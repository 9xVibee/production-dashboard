import { useDispatch } from "react-redux";
import { SetLoading } from "../redux/fake-api-data/fakeApiDataTypes";
import FormatData from "../utils/FormatApiData";

const FetchData = () => {
  const dispatch = useDispatch();

  const fetchDataFn = async () => {
    dispatch({
      type: SetLoading,
      loading: true,
    });

    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      const formattedData = FormatData(data);

      dispatch({
        type: SetLoading,
        loading: false,
      });

      return formattedData;
    } catch (error) {
      console.log("Error in fetchData!", error);
      dispatch({
        type: SetLoading,
        loading: false,
      });
    }
  };

  return { fetchDataFn };
};

export default FetchData;
