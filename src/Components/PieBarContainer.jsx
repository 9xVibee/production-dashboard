import { Flex, Heading, Text } from "@sparrowengg/twigs-react";
import AlertIcon from "./../asset/alert-circle.svg";
import AlertIcon2 from "./../asset/alert-circle2.svg";
import PieChartComp from "./PieChartComp";
import PieChartInfo from "./PieChartInfo";
import CustomProgressBar from "./CustomProgressBar";
import ProgressBarInfo from "./ProgressBarInfo";
import { LIGHT_MODE } from "../redux/light-dark/lightDarkTypes";
import { useSelector } from "react-redux";
import SoldUnsold from "../hooks/SoldUnsold";
import TopCateogry from "../hooks/TopCateogry";
import { COLORS } from "../utils/data";

const PieBarContainer = () => {
  const mode = useSelector((store) => store.lightDARK_MODE.lightDARK_MODE);

  const { pieData } = TopCateogry();
  const { soldUnsoldData } = SoldUnsold();

  return (
    <Flex
      css={{
        marginTop: "25px",
        width: "100%",
        height: "100%",
      }}
      gap="60px"
      alignItems="flex-start"
    >
      {/* Pia container */}
      <Flex flexDirection="column" justifyContent="flex-start">
        <Flex alignItems="center" gap="10px">
          <Text
            size="md"
            weight={"bold"}
            css={{
              lineHeight: "28px",
              color: "$textPrimary",
            }}
          >
            Perpetual
          </Text>
          <img
            src={mode === LIGHT_MODE ? AlertIcon : AlertIcon2}
            alt="Alert Icon"
          />
        </Flex>

        <Flex
          css={{
            marginLeft: "-30px",
          }}
          gap="40px"
          justifyContent="flex-start"
          alignItems="center"
        >
          <PieChartComp arr={pieData?.arr} />
          <Flex flexDirection="column" gap="28px">
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
      <Flex flexDirection="column" justifyContent="center" gap="50px">
        <Flex alignItems="center" gap="10px">
          <Text
            size="md"
            weight={"bold"}
            css={{
              lineHeight: "28px",
              color: "$textPrimary",
            }}
          >
            Active Percentage
          </Text>
          <img src={mode === LIGHT_MODE ? AlertIcon : AlertIcon2} alt="Alert" />
        </Flex>

        <Flex flexDirection="column">
          <Flex alignItems="center" gap="10px">
            <Heading
              size="h3"
              css={{
                color: "$textPrimary",
                lineHeight: "46px",
              }}
            >
              {soldUnsoldData?.total}
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
            soldPercentage={(soldUnsoldData.sold * 100) / soldUnsoldData.total}
          />

          <Flex
            justifyContent="flex-start"
            alignItems="center"
            gap="50px"
            css={{
              marginTop: "$10",
            }}
          >
            <ProgressBarInfo
              title={"Sold"}
              subTitle={soldUnsoldData.sold}
              bgColor={"$mediumPurple"}
            />

            <ProgressBarInfo
              title={"Unsold"}
              subTitle={soldUnsoldData.unsold}
              bgColor={"$lightPurple"}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PieBarContainer;
