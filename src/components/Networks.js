import { Col, Container, Row } from "react-bootstrap";
import useScreenSize from "../hooks/useScreenSize";
import { TbCopy } from "react-icons/tb";

import {
  Polygon,
  Ethereum,
  Optimism,
  Arbitrum,
  Avalanche,
  GnosisGno,
  Celo,
  Fantom,
} from "@web3sdks/chain-icons";
import Base from "./Base";

const bgOverlayStyle = {
  // backgroundImage: `url(${tilesBg}), linear-gradient(180deg, #ad33cc 0%, #ad33cc 100%)`,
  // // position: "relative",
  // backgroundSize: "cover",
  // backgroundPosition: "center",
  // // opacity: 0.9, // Adjust the opacity as needed
  // // no repeat
  // backgroundRepeat: "no-repeat",
};

const Networks = () => {
  const { xxs, xs, md, lg, responsive } = useScreenSize();

  const address = "0xa564de1b600e99704c412460cfEc1e32185484e1";
  const copy = () => {
    navigator.clipboard.writeText(address);
  };

  // Ethereum:
  //   Optimism:
  // Arbitrum:
  // Polygon:
  // Avalanche:
  // Gnosis:
  // Celo:
  // Fantom:
  // Base:
  const chains = [
    {
      name: "Ethereum",
      blockexplorer: "https://etherscan.io/",
      image: <Ethereum />,
      small: true,
    },
    {
      name: "Optimism",
      blockexplorer: "https://optimistic.etherscan.io/",
      image: <Optimism />,
      small: false,
    },
    {
      name: "Arbitrum",
      blockexplorer: "https://arbiscan.io/",
      image: <Arbitrum />,
      small: false,
    },
    {
      name: "Polygon",
      blockexplorer: "https://polygonscan.com/",
      image: <Polygon />,
      small: false,
    },
    {
      name: "Gnosis",
      blockexplorer: "https://gnosisscan.io/",
      image: <GnosisGno />,
      small: false,
    },
    {
      name: "Celo",
      blockexplorer: "https://celoscan.io/",
      image: <Celo />,
      small: false,
    },
    {
      name: "Avalanche",
      blockexplorer: "https://snowtrace.io/",
      image: <Avalanche />,
      small: false,
    },
    {
      name: "Fantom",
      blockexplorer: "https://ftmscan.com/",
      image: <Fantom />,
      small: false,
    },
    {
      name: "Base",
      blockexplorer: "https://basescan.org/",
      image: <Base />,
      small: false,
    },
    {
      name: "Goerli",
      blockexplorer: "https://goerli.etherscan.io/",
      image: <Ethereum />,
      small: true,
    },
    {
      name: "Sepolia",
      blockexplorer: "https://sepolia.etherscan.io/",
      image: <Ethereum />,
      small: true,
    },
  ];

  const tiles = () => {
    const result = [];
    const tilecount = xxs ? 1 : xs ? 2 : md ? 3 : 3;
    const totalChains = chains.length;
    const rows = Math.ceil(totalChains / tilecount);

    const maxWidth = tilecount * 250;

    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      const row = [];

      for (let colIndex = 0; colIndex < tilecount; colIndex++) {
        const chainIndex = rowIndex * tilecount + colIndex;
        // if chain index even, "even"

        const even = chainIndex % 2 === 0 ? "pinkish" : "pinkish box-shadow-sm";
        const height = xxs || xs ? "80px" : md ? "100px" : "130px";
        // const tileColor =
        //   colIndex === 0
        //     ? "redish"
        //     : colIndex === 1
        //     ? "blueish"
        //     : colIndex === 2
        //     ? "greenish"
        //     : colIndex === 3
        //     ? "orangish"
        //     : "pinkish";

        if (chainIndex < totalChains) {
          row.push(
            <Col
              key={chainIndex}
              className={
                "mart-5 marb-5 marl-5 marr-5 opacity-85 content-center big-square " +
                even
              }
              style={{ justifyContent: "center", height: height }}
            >
              <div
                className={`${
                  chains[chainIndex].small
                    ? "svg-container-small"
                    : "svg-container"
                } pointer`}
                onClick={() =>
                  window.open(
                    chains[chainIndex].blockexplorer + "/address/" + address,
                    "_blank",
                  )
                }
              >
                {chains[chainIndex].image}
              </div>
              <div
                className="marl-10 text-center fat bigtext pointer"
                onClick={() =>
                  window.open(
                    chains[chainIndex].blockexplorer + "/address/" + address,
                    "_blank",
                  )
                }
              >
                {chains[chainIndex].name}
              </div>
            </Col>,
          );
        }
      }

      result.push(
        <Row className="" key={rowIndex} style={{ maxWidth }}>
          {row}
        </Row>,
      );
    }

    return (
      <Row className="pad-0" key={"lkhskjkgigygjh"} style={{ maxWidth }}>
        {result}
      </Row>
    );
  };

  return (
    <Container
      className={`grad0 tiled-background hero w-100 ${responsive(
        "pad-50",
        "pad-50",
        "pad-50",
        "pad-100",
      )}`}
      style={bgOverlayStyle}
    >
      <Col className="mart-30 marb-60">
        <div className="mart-20 marb-20 marr-20">
          <h1>Supported chains</h1>
        </div>
        <Row className="content-center w-100">
          <p
            className="text-center"
            style={{ maxWidth: xxs || xs ? "350px" : "650px" }}
          >
            Solve3 provides bot protection for Ethereum and various EVM chains.
            Different chains, one address{" "}
            <span className="monofont smalltext">
              {xxs || xs
                ? address.slice(0, 6) + "..." + address.slice(-4)
                : address}
            </span>
            <span className="pointer monofont marl-2" onClick={copy}>
              <TbCopy size={"14"} />
            </span>
          </p>
        </Row>
        <Row className="content-center mart-40 marb-60">{tiles()}</Row>
      </Col>
    </Container>
  );
};

export default Networks;
