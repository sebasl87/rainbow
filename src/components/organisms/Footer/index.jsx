import { Stack, HStack, Link, Image, IconButton, Text } from "@chakra-ui/react";

import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const links = ["Escribinos"];
const accounts = [
  {
    url: "https://www.instagram.com/rainbowboutique2023/",
    label: "Instagram",

    icon: <FaInstagram />,
  },
];

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <Stack
      maxW="5xl"
      marginInline="auto"
      p={8}
      spacing={{ base: 8, md: 0 }}
      justifyContent="space-between"
      alignItems="center"
      direction={{ base: "column", md: "row" }}
    >
      <Image
        data-testid="logoImage"
        src="/RainbowLogo.png"
        alt="logo"
        w={20}
        onClick={() => navigate("/")}
        cursor="pointer"
      />

      <HStack spacing={4} alignItems="center" d={{ base: "none", md: "flex" }}>
        {links.map((link, index) => (
          <Text
            key={index}
            fontSize={16}
            cursor="pointer"
            fontFamily="RainbowRegular"
            _hover={{ color: "rainbowGreen" }}
            onClick={() => navigate("/")}
          >
            {link}
          </Text>
        ))}
      </HStack>

      <Stack
        direction="row"
        spacing={5}
        pt={{ base: 4, md: 0 }}
        alignItems="center"
      >
        {accounts.map((sc, index) => (
          <IconButton
            key={index}
            as={Link}
            isExternal
            href={sc.url}
            aria-label={sc.label}
            colorScheme={sc.type}
            icon={sc.icon}
            rounded="md"
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Footer;
