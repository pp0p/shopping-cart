import { Image, Text, Flex, Box, Button, Spinner } from '@chakra-ui/react';
import { GrCart } from 'react-icons/gr';
import { React, useContext } from 'react';
import { MdStar, MdRemove, MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Context } from './Data';
const ProductDetails = () => {
    const pId = useParams()
    const Items = useContext(Context)
    const Product = Items.Products
    const findProduct = Product.find((p) => p.id === parseInt(pId.id))
    const Check = p => Items.cartProducts.some((item) => item.id === p.id)

    const AddToCart = product => {

        Items.setTotalPrice(Items.totalPrice + product.price)
        Items.setCartProducts([...Items.cartProducts, product])

    }

    const RemoveFromCart = product => {
        Items.setTotalPrice(Items.totalPrice - product.price)
        Items.setCartProducts(Items.cartProducts.filter((p) => p.id !== product.id))
    }
    if (!Items.loading) return <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />

    return (
        <Flex p={2} m={'auto'} mb={4} justify={'center'} align={'center'} mt={'10px'} maxW={'290px'} direction={'column'} shadow={'base'}>
            <Box>
                <Image src={findProduct.image} h={'120px'} />
            </Box>
            <Box>
                <Text display={'flex'}><Text fontWeight={'black'}>Title</Text>: {findProduct.title}</Text>
                <Text mt={4} mb={4} fontSize={'sm'}><Text fontWeight={'black'}>Description</Text>{findProduct.description}</Text>
            </Box>
            <Flex mt={2} align="center" direction={'column'}>
                <Text ml={1} fontSize="sm" display={'flex'} textAlign={'center'}>
                    <Box as={MdStar} color="orange.400" />

                    {findProduct.rating.rate} ({findProduct.rating.count})

                </Text>
                <Flex>
                    <Text fontWeight={'black'}>Price: </Text>
                    <Text>${findProduct.price}</Text>

                </Flex>
            </Flex>
            <Box>
                {/* if item in cart will return remove btn */}
                {Check(findProduct) ? (
                    <Button mt={2} w={'full'} onClick={() => RemoveFromCart(findProduct)} leftIcon={<MdRemove />}>Remove From Cart</Button>

                ) : (
                    // else will return add to cart
                    <Button mt={2} w={'full'} onClick={() => AddToCart(findProduct)} leftIcon={<GrCart />}> Add To Cart</Button>

                )}
                <Link to={'/'}><Button leftIcon={<MdHome />} w={'full'} mt={2} >Back To Products</Button></Link>
            </Box>
        </Flex>
    )
};

export default ProductDetails;
