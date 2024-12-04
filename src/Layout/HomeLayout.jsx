import { Flex } from "@sparrowengg/twigs-react";
import { useEffect } from "react";
import FetchData from "../hooks/FetchData";
import { useDispatch } from "react-redux";
import { SET_DATA } from "../redux/fake-api-data/fakeApiDataTypes";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Superiority from "../Components/Superiority";

const HomeLayout = () => {
  const { fetchDataFn } = FetchData();
  const dispatch = useDispatch();

  const getData = async () => {
    let data = await fetchDataFn();
    dispatch({
      type: SET_DATA,
      data: data,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Flex
      css={{
        height: "100vh",
        backgroundColor: "$secondary",
      }}
      gap="$1"
    >
      <Sidebar />
      <Flex
        flexDirection="column"
        css={{
          width: "100%",
        }}
        gap="$1"
      >
        <Header />
        <Flex
          gap="$1"
          css={{
            height: "100%",
          }}
        >
          <Outlet />
          <Superiority />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomeLayout;
