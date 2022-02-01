import { React, useContext } from 'react';
import { Context } from './Data';
import { Box, Image, Flex, Text, Button, Spinner } from "@chakra-ui/react";
import { MdStar, MdRemove, MdDetails } from "react-icons/md";
import { GrCart } from 'react-icons/gr'
import { Link } from 'react-router-dom';
const Products = () => {
  const Items = useContext(Context)
  
  // Check Item in cart
  const Check = p => Items.cartProducts.some((item) => item.id === p.id)



  const AddToCart = product => {

    Items.setTotalPrice(Items.totalPrice + product.price)
    Items.setCartProducts([...Items.cartProducts, product])

  }

  const RemoveFromCart = product => {
    Items.setTotalPrice(Items.totalPrice - product.price)
    Items.setCartProducts(Items.cartProducts.filter((p) => p.id !== product.id))
  }

  // If loading false will return Spinner
  if (!Items.loading) return <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
  // Else will return the products
  return (
    <Flex wrap={'wrap'} justify={'center'} >
      {Items.Products.map((p) => (
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
          <Flex justify={'center'} direction={'column'} align={'center'}>
            {/* if item in cart will return remove btn */}
            {Check(p) ? (
              <Button mt={2} w={'full'} onClick={() => RemoveFromCart(p)} leftIcon={<MdRemove />}>Remove From Cart</Button>

            ) : (
              // else will return add to cart
              <Button mt={2} w={'full'} onClick={() => AddToCart(p)} leftIcon={<GrCart />}> Add To Cart</Button>

            )}
            <Link to={`/product/${p.id}`}>
              <Button mt={2} w={'248px'} leftIcon={<MdDetails />}>See Details</Button>
            </Link>
          </Flex>


        </Box>))}
    </Flex>);
};

export default Products;
