// twigs componente
import {
  Box,
  Flex,
  Text,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
  CalendarRange,
  Button,
  styled,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverContent,
} from "@sparrowengg/twigs-react";

// dashboard icons
import { dashBoardIcons } from "./../utils/DashBoardIcons";
const {
  AlertCircle,
  AlertCircle2,
  HorizontalDots,
  HorizontalDotsDark,
  LeftArrow,
  Plus,
  moonIconDashboard,
  plusLight,
  CalendarIcon,
} = dashBoardIcons;

import { useState } from "react";

import AreaChartComp from "../Components/AreaChart";
import PieBarContainer from "../Components/PieBarContainer";

// Redux
import { LIGHT_MODE } from "../redux/light-dark/lightDarkTypes";
import { useDispatch, useSelector } from "react-redux";
import { COUNT_DATA } from "../utils/data";
import {
  SET_DATE_RANGE,
  SET_COUNT,
} from "../redux/fake-api-data/fakeApiDataTypes";

import { parseDate } from "@internationalized/date";

const Dashboard = () => {
  const [value, setValue] = useState({
    start: parseDate(new Date().toISOString().substring(0, 10)),
    end: parseDate(new Date().toISOString().substring(0, 10)),
  });

  const dispatch = useDispatch();
  const mode = useSelector((store) => store.lightDarkMode.lightDarkModeValue);

  //**  Function to formate the date in this format -> month (string) date (number) ex: Feb 1
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

  const Image = styled("img", {
    height: "$2",
    width: "$2",
  });

  return (
    <Flex
      css={{
        padding: "$15",
        width: "100%",
        height: "calc(100vh - 84px)",
        overflowY: "auto",
        backgroundColor: `$primary`,
      }}
      flexDirection="column"
    >
      <Flex alignItems="center" gap="$5">
        <Text
          weight={"bold"}
          size="sm"
          css={{
            color: "$textPrimary",
          }}
        >
          Dashboard
        </Text>
        <Image src={LeftArrow} alt="Left Arrow Icon" />
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
        <Image
          src={moonIconDashboard}
          alt="Moon Icon"
          css={{
            height: "45px !important",
            width: "45px !important",
          }}
        />

        <Text
          weight={"bold"}
          css={{
            fontSize: "$xl",
            lineHeight: "$2xl",
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
          <Image
            src={mode === LIGHT_MODE ? Plus : plusLight}
            alt="Plus Icon"
            css={{
              width: "25px !important",
              height: "25px !important",
            }}
          />
        </Flex>
      </Flex>

      {/* Total visit seciton */}
      <Flex
        alignItems={"center"}
        justifyContent="space-between"
        css={{
          marginTop: 25,
        }}
      >
        {/* left total visit section  */}
        <Flex alignItems="center" gap="$5">
          <Text
            weight={"bold"}
            size="md"
            css={{
              color: "$textPrimary",
            }}
          >
            Total visit
          </Text>
          <Image
            src={mode == LIGHT_MODE ? AlertCircle : AlertCircle2}
            alt="Alert Icon"
            css={{
              width: 18,
              height: 18,
            }}
          />
        </Flex>

        {/* right total visit section  */}
        <Flex alignItems="center" gap="$15">
          <Box
            css={{
              width: 61,
              border: "$borderWidths$sm solid $secondaryLight",
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

          {/* calender range */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                css={{
                  fontSize: "$sm",
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
                  padding: "$4",
                  border: "$borderWidths$xs solid $border",
                  borderRadius: "$sm",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={mode == LIGHT_MODE ? HorizontalDots : HorizontalDotsDark}
                  alt="Dots"
                  css={{
                    width: 14,
                    height: 14,
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
              {COUNT_DATA.map((item, idx) => (
                <>
                  <DropdownMenuItem
                    key={item.title}
                    onChange={() => handleCountChange(item.value)}
                  >
                    {item.title}
                  </DropdownMenuItem>
                  {idx !== 2 && <DropdownMenuSeparator />}
                </>
              ))}
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
