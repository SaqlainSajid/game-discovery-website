import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList PlatformList={game.parent_platforms} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
