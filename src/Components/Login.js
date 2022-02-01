import React from 'react';
import { Box, Flex, Button, Input,InputGroup,InputLeftElement, Image, Heading } from '@chakra-ui/react';
import LoginSvg from './svg/login.svg'
import { MdEmail ,MdPassword} from 'react-icons/md'

const Login = () => {
  return (
    <Flex h={'full'} m={'auto'} mt={'20px'} mb={6} justify={'center'} align={'center'} direction={'column'} maxW={'330px'} shadow={'base'} p={8}>
      <Box>
        <Image src={LoginSvg} h={'200px'} />
      </Box>
      <Heading fontSize={'x-large'} mt={4}>Login</Heading>
      <Box mt={'20px'}>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<MdEmail  />}
          />
          <Input type='email' placeholder='Email' />
        </InputGroup>
        <InputGroup m={'10px 0'}>
          <InputLeftElement
            pointerEvents='none'
            children={<MdPassword  />}
          />
          <Input type='password' placeholder='Password' />
        </InputGroup>
        <Button w={'full'}>Login</Button>
      </Box>
    </Flex>
  )
};

export default Login;
