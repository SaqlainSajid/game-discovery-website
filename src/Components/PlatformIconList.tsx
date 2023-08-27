import { platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaPlaystation,
  FaWindows,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  PlatformList: { platform: platform }[];
}

const PlatformIconList = ({ PlatformList }: Props) => {
  const IconMap: { [platform: string]: IconType } = {
    playstation: FaPlaystation,
    pc: FaWindows,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    nintendo: SiNintendo,
  };
  return (
    <HStack marginTop={"10px"}>
      {PlatformList.map((Pl) => (
        <Icon as={IconMap[Pl.platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
