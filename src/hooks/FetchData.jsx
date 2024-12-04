import { useDispatch } from "react-redux";
import { SET_LOADING } from "../redux/fake-api-data/fakeApiDataTypes";
import FormatData from "../utils/FormatApiData";

const FetchData = () => {
  const dispatch = useDispatch();

  const fetchDataFn = async () => {
    dispatch({
      type: SET_LOADING,
      loading: true,
    });

    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      const formattedData = FormatData(data);

      return formattedData;
    } catch (error) {
      console.log("Error in fetchData!", error);
    } finally {
      dispatch({
        type: SET_LOADING,
        loading: false,
      });
    }
  };

  return { fetchDataFn };
};

export default FetchData;
