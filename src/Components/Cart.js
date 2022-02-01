import { React, useContext } from 'react';
import { Box, Flex, Image, Text, Button, Heading } from '@chakra-ui/react';
import { MdStar, MdRemove, MdPayment } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Context } from './Data';
import { BsFillCartFill } from "react-icons/bs"
const Cart = () => {
  const Items = useContext(Context)

  const setCartItems = Items.setCartProducts
  const totalPrice = Items.totalPrice
  const setTotalPrice = Items.setTotalPrice
  const cartItems = Items.cartProducts
  const cartCount = Items.cartProducts.length

  const removtItem = product => {
    setTotalPrice(totalPrice - product.price)
    setCartItems(cartItems.filter((p) => p.id !== product.id))
  }
  // If Cart Items 0 will return 
  if (cartCount <= 0) return (
    <Flex w={'350px'} p={2} justify={'center'} align={'center'} shadow={'base'} direction={'column'} m={'auto'} mt={'100px'} >
      <Heading fontSize={'2xl'}>Your Cart Is Empty</Heading>
      <Text fontSize={'8xl'}><BsFillCartFill /></Text>
      <Link to={'/'}><Button mt={4}>Go To Shop</Button></Link>
    </Flex>
  )
  // Else
  return (
    <Box>
      <Flex  direction={'column'} m={'auto'} w={'90%'} mt={4} justifyContent={'space-around'} align={'center'} h={'100px'} justify={'center'} shadow={'base'}>
        <Text>Total Price ${Math.round(totalPrice)} </Text>
        <Link to={'/login'}>
          <Button bg={'gray.700'} leftIcon={<MdPayment />} _hover={'none'} color={'white'}>Continue to Payment</Button>
        </Link>
      </Flex>
      <Flex wrap={'wrap'} justify={'center'} >
        {/* Cart Itmes */}

        {Items.cartProducts.map((p) => (
          <Box key={p.id} shadow={'base'} h={'full'} p="5" w="290px" borderWidth="1px" m={4}>
            <Image borderRadius="md" m={'auto'} src={p.image} h={'150px'} />
            {/* Title of Product */}
            <Text mt={2} fontSize="sm" fontWeight="semibold" lineHeight="short">
              {p.title}
            </Text>
            <Text mt={2}>${p.price}</Text>
            {/* Rating */}
            <Flex mt={2} align="center">
              <Box as={MdStar} color="orange.400" />
              <Text ml={1} fontSize="sm">
                {p.rating.rate} ({p.rating.count})
              </Text>
            </Flex>
            <Flex justify={'center'}>
              <Button mt={2} onClick={() => removtItem(p)} leftIcon={<MdRemove />}>Remove From Cart</Button>

            </Flex>

          </Box>
        ))}
      </Flex>
    </Box>
  )
};

export default Cart;
