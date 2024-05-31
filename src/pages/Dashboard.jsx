import {
  Box,
  Flex,
  Text,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
  Button,
} from "@sparrowengg/twigs-react";
import {
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverContent,
} from "@sparrowengg/twigs-react";

import { CalendarIcon } from "../Components/Icons";

import LeftArrow from "./../asset/leftArrow.svg";
import moonIconDashboard from "./../asset/moonSvgDemo.svg";
import Plus from "./../asset/plus.svg";
import plusLight from "./../asset/plusLight2.svg";
import AlertCircle from "./../asset/alert-circle.svg";
import AlertCircle2 from "./../asset/alert-circle2.svg";
import HorizontalDots from "./../asset/more-horizontal.svg";
import HorizontalDotsDark from "./../asset/more-horizontalDark.svg";

import { useState } from "react";
import AreaChartComp from "../Components/AreaChart";
import PieBarContainer from "../Components/PieBarContainer";
import { LIGHT_MODE } from "../redux/light-dark/lightDarkTypes";
import { useDispatch, useSelector } from "react-redux";
import { parseDate } from "@internationalized/date";
import {
  SET_DATE_RANGE,
  SET_COUNT,
} from "../redux/fake-api-data/fakeApiDataTypes";

import { CalendarRange } from "@sparrowengg/twigs-react";
import { COUNT_ABOVE, COUNT_BELOW } from "../utils/data";

const Dashboard = () => {
  const [value, setValue] = useState({
    start: parseDate(new Date().toISOString().substring(0, 10)),
    end: parseDate(new Date().toISOString().substring(0, 10)),
  });

  const dispatch = useDispatch();
  const mode = useSelector((store) => store.lightDARK_MODE.lightDARK_MODE);

  // Function to formate the date in this format -> month (string) date (number) ex: Feb 1
  function FormattedDateFn() {
    const dateObj = new Date(value.start);

    const monthStr = dateObj.toLocaleString("default", { month: "long" });
    const yearNum = dateObj.getFullYear();

    return `${monthStr} ${yearNum}`;
  }

  //**  function to set the count in the redux
  const handleCountChange = (value) => {
    dispatch({
      type: SET_COUNT,
      count: value,
    });
  };

  //**  function to set the calender range date in the redux
  const handleDateRangeChange = (startDate, endDate) => {
    const startDateRedux = new Date(startDate);
    const endDateRedux = new Date(endDate);

    dispatch({
      type: SET_DATE_RANGE,
      start: startDateRedux.toISOString().substring(0, 10),
      end: endDateRedux.toISOString().substring(0, 10),
    });
  };

  return (
    <Flex
      css={{
        padding: "30px",
        width: "100%",
        height: "calc(100vh - 84px)",
        overflowY: "auto",
        backgroundColor: `$primary`,
      }}
      flexDirection="column"
    >
      <Flex alignItems="center" gap="10px">
        <Text
          weight={"bold"}
          size="sm"
          css={{
            color: "$textPrimary",
          }}
        >
          Dashboard
        </Text>
        <img
          src={LeftArrow}
          style={{
            height: "$2",
            width: "$2",
          }}
          alt="Left Arrow"
        />
        <Text
          size="sm"
          weight={"medium"}
          css={{
            color: "$textSecondary",
          }}
        >
          BITFOREX.COM
        </Text>
      </Flex>

      {/* Wubin design/logo section (heading) */}
      <Flex
        css={{
          marginTop: "$10",
        }}
        alignItems="center"
        gap="$10"
      >
        <img
          src={moonIconDashboard}
          alt="Moon Icon"
          style={{
            width: "45px",
            height: "45px",
          }}
        />

        <Text
          weight={"bold"}
          css={{
            fontSize: "$xl",
            lineHeight: "40px",
            color: "$textPrimary",
          }}
        >
          wubin.design
        </Text>

        <Flex
          alignItems="center"
          justifyContent="center"
          css={{
            padding: "$5",
            backgroundColor: "$secondaryLight",
            borderRadius: "100%",
          }}
        >
          <img
            src={mode === LIGHT_MODE ? Plus : plusLight}
            alt="Plus Icon"
            style={{
              width: "25px",
              height: "25px",
            }}
          />
        </Flex>
      </Flex>

      {/* Total visit seciton */}
      <Flex
        alignItems={"center"}
        justifyContent="space-between"
        css={{
          marginTop: "25px",
        }}
      >
        {/* left total visit section  */}
        <Flex alignItems="center" gap="10px">
          <Text
            weight={"bold"}
            size="md"
            css={{
              color: "$textPrimary",
            }}
          >
            Total visit
          </Text>
          <img
            src={mode == LIGHT_MODE ? AlertCircle : AlertCircle2}
            alt="Alert Icon"
            style={{
              width: "18px",
              height: "18px",
            }}
          />
        </Flex>

        {/* right total visit section  */}
        <Flex alignItems="center" gap="30px">
          <Box
            css={{
              width: "61px",
              border: "2px solid $secondaryLight",
              borderRadius: "$lg",
            }}
          ></Box>

          <Text
            size="xs"
            weight={"medium"}
            css={{
              color: "$textSecondary",
            }}
          >
            Provisions Month
          </Text>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                css={{
                  fontSize: "14px",
                  color: "$textPrimary",
                  fontWeight: "400",
                  border: "$borderWidths$xs solid $border",
                  padding: "$5 !important",
                  lineHeight: "$xs",
                  "& svg": {
                    height: "$4 !important",
                    width: "$4 !important",
                  },
                }}
                size={"md"}
                variant={"ghost"}
                rightIcon={<CalendarIcon size={10} />}
              >
                {FormattedDateFn()}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              css={{
                width: "auto",
              }}
            >
              <CalendarRange
                onChange={(e) => {
                  setTimeout(() => {
                    setValue(e);
                    handleDateRangeChange(e.start, e.end);
                  }, 100);
                }}
                minValue={parseDate("2023-07-10")}
              />
              <PopoverArrow />
            </PopoverContent>
          </Popover>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Flex
                css={{
                  padding: "8px",
                  border: "$borderWidths$xs solid $border",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={mode == LIGHT_MODE ? HorizontalDots : HorizontalDotsDark}
                  alt="Dots"
                  style={{
                    width: "14px",
                    height: "14px",
                  }}
                />
              </Flex>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              alignOffset={0}
              sideOffset={5}
              align="end"
              css={{
                cursor: "pointer",
              }}
            >
              <DropdownMenuItem onClick={() => handleCountChange(null)}>
                All
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleCountChange(COUNT_BELOW)}>
                Below or equal to 100
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleCountChange(COUNT_ABOVE)}>
                Above 100
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Flex>
      </Flex>

      <AreaChartComp />
      <PieBarContainer />
    </Flex>
  );
};

export default Dashboard;
