import {
  Stack,
  HStack,
  Link,
  Divider,
  Image,
  IconButton,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const links = ["Escribinos"];
const accounts = [
  {
    url: "https://github.com/MA-Ahmad/templateskart",
    label: "Github Account",
    type: "gray",
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
        w={{ lg: 20 }}
        onClick={() => navigate("/")}
        cursor="pointer"
      />

      {/* Desktop Screen */}
      <HStack spacing={4} alignItems="center" d={{ base: "none", md: "flex" }}>
        {links.map((link, index) => (
          <CustomLink key={index}>{link}</CustomLink>
        ))}
      </HStack>

      {/* Mobile and Tablet Screens */}
      <Stack d={{ base: "flex", md: "none" }} alignItems="center">
        <HStack alignItems="center">
          <CustomLink>Escribinos</CustomLink>
          <Divider h="1rem" orientation="vertical" />
        </HStack>
      </Stack>

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

const CustomLink = ({ children, ...props }) => {
  return (
    <Link
      href="#"
      fontSize="sm"
      _hover={{ textDecoration: "underline" }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Footer;
