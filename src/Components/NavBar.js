import { React, useContext } from 'react';
import { Box, Flex, IconButton, Button } from '@chakra-ui/react';
import { GrCart, GrLogin } from 'react-icons/gr'
import { Link } from 'react-router-dom';
import { Context } from './Data';
const NavBar = () => {
    const Products = useContext(Context)
    const cartCount = Products.cartProducts.length
    return (
        <Flex  w={'100%'}  color={'white'} justify={'space-evenly'} align={'center'} p={4} h={'60px'} bg={'gray.700'}>
            <Box>
                <Link to={'/'}> Shopping Cart  </Link>
            </Box>
            <Flex p={2} color={'black'} justify={'space-between'} >
                <Link to={'/cart'}> <Button   mr={2} rightIcon={<GrCart />}>{cartCount}</Button> </Link>
                <Link to={'/login'}> <IconButton  fontSize={'25px'} icon={<GrLogin />} />  </Link>
            </Flex>
        </Flex>
    )
};

export default NavBar;
