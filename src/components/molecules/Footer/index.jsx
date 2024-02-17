import { LinkFooter } from '@/components/atoms';
import { Box, Divider, Image } from '@chakra-ui/react';

import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigation = useNavigate();
  return (
    <Box
      bg="blue"
      display="flex"
      w="100%"
      flexDirection="column"
      py={{ base: '24px', md: '32px', lg: '24px' }}
      px={{ base: '16px', md: '24px' }}
      alignItems="center"
      borderTop="8px solid #00ACED">
      <Box
        display="flex"
        w="100%"
        maxW="1200px"
        justifyContent={{ base: 'center', md: 'space-between' }}
        flexDirection={{ base: 'column', md: 'row' }}>
        <Box
          width={{ base: '100%', md: 'fit-content' }}
          justifyContent={{ base: 'center', md: 'space-between' }}
          display="flex"
          mb={{ base: '24px', md: '0px' }}>
          <Image src="/danoneWhiteLogo.png" alt="whiteLogo" width="220px" />
        </Box>
        <Box
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          width={{ base: '100%', md: 'fit-content' }}
          alignItems={{ base: 'center', md: 'strech' }}>
          <Box
            mr={{ base: '0px', md: '123px' }}
            display="flex"
            flexDirection="column"
            justifyContent="space-between">
            <LinkFooter
              buttonText="Términos y condiciones"
              handleClick={() => navigation('/terminosycondiciones')}
            />
            <LinkFooter
              buttonText="Aviso Legal"
              handleClick={() => navigation('/aviso-de-privacidad')}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between">
            <LinkFooter
              buttonText="Contáctanos"
              handleClick={() => navigation('/contacto')}
            />
            <LinkFooter
              buttonText="Preguntas Frecuentes"
              handleClick={() => navigation('/preguntas-frecuentes')}
            />
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        w="100%"
        maxW="1200px"
        justifyContent={{ base: 'center', md: 'space-between' }}
        flexDirection="column">
        <Divider
          mt={{ base: '0px', md: '24px', lg: '20px' }}
          mb={{ base: '0px', md: '24px', lg: '20px' }}
        />
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          color="white"
          fontSize={{ base: '12px', md: '14px' }}
          fontWeight={400}
          mt={{ base: '16px', md: '0px' }}>
          © 2024 Custom-xs. Todos los Derechos Reservados.
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
