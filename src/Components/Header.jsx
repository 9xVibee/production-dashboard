import { Box, Flex, Text, Tooltip } from "@sparrowengg/twigs-react";
import { Input } from "@sparrowengg/twigs-react";

import { SearchIcon } from "./Icons";

import DownArrow from "./../asset/downArrow.svg";
import DownArrowWhite from "./../asset/downArrowWhite.svg";
import Profile from "./../asset/profile.png";
import Sun from "./../asset/sun.svg";
import Moon from "./../asset/moon.svg";

import { useDispatch, useSelector } from "react-redux";

import { DarkMode, LightMode } from "../redux/light-dark/lightDarkTypes";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSeparator,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@sparrowengg/twigs-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [dataSearch, setDataSearch] = useState([]);
  const [searchText, setSearchText] = useState("");

  const location = useLocation();

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const mode = useSelector((store) => store.lightdarkmode.lightDarkMode);
  const data = useSelector((store) => store.fakeapidata.data);

  const dispatch = useDispatch();

  // function to handle the light and dark mode
  const handleModeChange = () => {
    dispatch({
      type: mode === LightMode ? DarkMode : LightMode,
    });
  };

  const getSearchData = (searchVal) => {
    let newData = data.filter((item) => item.title.includes(searchVal));

    setDataSearch(newData);
  };

  return (
    <Flex
      css={{
        width: "100%",
        backgroundColor: "$primary",
        padding: "16px 30px",
      }}
      alignItems="center"
      justifyContent="space-between"
    >
      {/* header left section */}
      <Flex
        alignItems="center"
        gap="40px"
        css={{
          width: "100%",
        }}
      >
        <Flex
          justifyContent="flex-start"
          gap="40px"
          css={{
            width: "auto",
          }}
        >
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
            }}
          >
            <Text
              css={{
                fontSize: "$md",
                fontWeight: 600,
                color:
                  location.pathname === "/" ? "$textPrimary" : "$textSecondary",
                cursor: "pointer",
              }}
            >
              Dashboard
            </Text>
          </Link>

          <Link
            to={"/advancequarry"}
            style={{
              textDecoration: "none",
            }}
          >
            <Text
              css={{
                fontSize: "$md",
                cursor: "pointer",
                fontWeight: 600,
                color:
                  location.pathname == "/advancequarry"
                    ? "$textPrimary"
                    : "$textSecondary",
                width: "150px",
              }}
            >
              Advanced Quarry
            </Text>
          </Link>

          <Link
            to={"/events"}
            style={{
              textDecoration: "none",
            }}
          >
            <Text
              css={{
                cursor: "pointer",
                fontSize: "$md",
                fontWeight: 600,
                color:
                  location.pathname == "/events"
                    ? "$textPrimary"
                    : "$textSecondary",
              }}
            >
              Events
            </Text>
          </Link>
        </Flex>

        <Box
          css={{
            width: "2px",
            height: "40px",
            transform: "rotate(180deg)",
            background:
              mode === LightMode
                ? "linear-gradient(180deg, rgba(238, 236, 250, 0) 0%, #F9F9F9 51.44%, rgba(238, 236, 250, 0) 100%)"
                : "linear-gradient(180deg, rgba(44, 44, 46, 0) 0%, rgba(84, 84, 88, 0.65) 51.44%, rgba(44, 44, 46, 0) 100%)",
          }}
        ></Box>

        <Box
          css={{
            width: "53.5% !important",
            position: "relative",
          }}
        >
          <Input
            css={{
              width: "100% !important",
              color: "$textPrimary",
            }}
            value={searchText}
            onChange={(e) => {
              getSearchData(e.target.value);
              setSearchText(e.target.value);
            }}
            rightIcon={<SearchIcon />}
          />
          {searchText.length > 0 && (
            <Flex
              css={{
                width: "100%",
                backgroundColor: "$primary",
                padding: "20px 10px",
                position: "absolute",
                border: "1px solid $border",
                top: 40,
                borderRadius: "8px",
                zIndex: "99",
              }}
              flexDirection="column"
              gap="10px"
            >
              {searchText.length && dataSearch.length !== 0 ? (
                dataSearch.map((item) => (
                  <Text
                    css={{
                      fontWeight: 400,
                      lineHeight: "15px",
                      borderBottom: "1px solid $border",
                      paddingBottom: "5px",
                      color: "$textPrimary",
                    }}
                    key={item}
                  >
                    {item?.title}
                  </Text>
                ))
              ) : (
                <Text
                  css={{
                    color: "$textPrimary",
                  }}
                >
                  No data
                </Text>
              )}
            </Flex>
          )}{" "}
        </Box>
      </Flex>

      {/* Header right section */}
      <Flex alignItems="center" justifyContent="center" gap="20px">
        <Text
          css={{
            color: "$textPrimary",
            fontWeight: "600",
            fontSize: "$md",
            width: "120px",
          }}
        >
          Bessie Cooper
        </Text>

        <DropdownMenu
          open={isDropDownOpen}
          onOpenChange={() => setIsDropDownOpen((prev) => !prev)}
        >
          <DropdownMenuTrigger asChild>
            <Flex
              justifyContent="center"
              css={{
                cursor: "pointer",
              }}
              alignItems="center"
              gap="15px"
            >
              <img
                src={Profile}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
              <img
                src={mode === LightMode ? DownArrow : DownArrowWhite}
                alt=""
                style={{
                  width: "10px",
                  height: "10px",
                  transform: isDropDownOpen ? "rotate(180deg)" : "",
                }}
              />
            </Flex>
          </DropdownMenuTrigger>

          <DropdownMenuContent sideOffset={5} alignOffset={20} align="end">
            <DropdownMenuItem>New Tab</DropdownMenuItem>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>

              <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
                <DropdownMenuItem>Save Page As…</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Developer Tools</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>

        <Tooltip content="light/dark mode">
          <img
            src={mode === LightMode ? Moon : Sun}
            alt=""
            style={{
              width: "14px",
              height: "14px",
              margin: "10px",
              cursor: "pointer",
            }}
            onClick={handleModeChange}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Header;
