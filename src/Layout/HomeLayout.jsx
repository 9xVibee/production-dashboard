import { Flex } from "@sparrowengg/twigs-react";
import { useEffect } from "react";
import FetchData from "../hooks/FetchData";
import { useDispatch } from "react-redux";
import { SetData } from "../redux/fake-api-data/fakeApiDataTypes";
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
      type: SetData,
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
        width: "100%",
      }}
      gap="2px"
    >
      <Sidebar />
      <Flex
        flexDirection="column"
        css={{
          width: "100%",
        }}
        gap="2px"
      >
        <Header />
        <Flex
          gap="2px"
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
