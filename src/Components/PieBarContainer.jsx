import { Flex, Heading, styled, Text } from "@sparrowengg/twigs-react";

import AlertIconLight from "./../asset/alert-circle.svg";
import AlertIconDark from "./../asset/alert-circle2.svg";

import CategoryCountContainerPieVR from "./CategoryCountContainerPieVR";
import PieChartInfo from "./PieChartInfo";
import CustomProgressBar from "./CustomProgressBar";
import ProgressBarInfo from "./ProgressBarInfo";
import { LIGHT_MODE } from "../redux/light-dark/lightDarkTypes";
import { useSelector } from "react-redux";
import SoldUnsoldItemsHook from "../hooks/SoldUnsoldItemsHook";
import TopCateogry from "../hooks/TopCateogry";
import { COLORS } from "../utils/data";

const PieBarContainer = () => {
  const mode = useSelector((store) => store.lightDarkMode.lightDarkModeValue);

  const { pieData } = TopCateogry();

  const { NumberOfSoldAndUnsoldItems } = SoldUnsoldItemsHook();

  const Image = styled("img", {
    height: "$2",
    width: "$2",
  });
  return (
    <Flex
      css={{
        marginTop: 25,
        width: "100%",
        height: "100%",
      }}
      gap="$30"
      alignItems="flex-start"
    >
      {/* Pia container */}
      <Flex flexDirection="column" justifyContent="flex-start">
        <Flex alignItems="center" gap="$5">
          <Text
            size="md"
            weight={"bold"}
            css={{
              lineHeight: "$lg",
              color: "$textPrimary",
            }}
          >
            Perpetual
          </Text>
          <Image
            src={mode === LIGHT_MODE ? AlertIconLight : AlertIcon2}
            alt="Alert Icon"
            css={{
              width: "18px !important",
              height: "18px !important",
            }}
          />
        </Flex>

        <Flex
          css={{
            marginLeft: -30,
          }}
          gap="$20"
          justifyContent="flex-start"
          alignItems="center"
        >
          <CategoryCountContainerPieVR arr={pieData?.arr} />
          <Flex flexDirection="column" gap="$14">
            {pieData?.arr.map((info, idx) => {
              return (
                <PieChartInfo
                  color={COLORS[idx]}
                  key={info.title}
                  title={info[0]}
                  value={info[1]}
                />
              );
            })}
          </Flex>
        </Flex>
      </Flex>

      {/* bar container */}
      <Flex flexDirection="column" justifyContent="center" gap="$25">
        <Flex alignItems="center" gap="$5">
          <Text
            size="md"
            weight={"bold"}
            css={{
              lineHeight: "$lg",
              color: "$textPrimary",
            }}
          >
            Active Percentage
          </Text>
          <Image
            src={mode === LIGHT_MODE ? AlertIconLight : AlertIconDark}
            alt="Alert"
            css={{
              width: "18px !important",
              height: "18px !important",
            }}
          />
        </Flex>

        <Flex flexDirection="column">
          <Flex alignItems="center" gap="$5">
            <Heading
              size="h3"
              css={{
                color: "$textPrimary",
                lineHeight: "$3xl",
              }}
            >
              {NumberOfSoldAndUnsoldItems?.total}
            </Heading>
            <Text
              weight={"medium"}
              size="md"
              css={{
                color: "$textSecondary",
                lineHeight: "22px",
              }}
            >
              Total
            </Text>
          </Flex>

          <CustomProgressBar
            soldPercentage={
              (NumberOfSoldAndUnsoldItems.sold * 100) /
              NumberOfSoldAndUnsoldItems.total
            }
          />

          <Flex
            justifyContent="flex-start"
            alignItems="center"
            gap="$25"
            css={{
              marginTop: "$10",
            }}
          >
            <ProgressBarInfo
              title={"Sold"}
              subTitle={NumberOfSoldAndUnsoldItems.sold}
              bgColor={"$mediumPurple"}
            />

            <ProgressBarInfo
              title={"Unsold"}
              subTitle={NumberOfSoldAndUnsoldItems.unSold}
              bgColor={"$lightPurple"}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PieBarContainer;
