import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { urlFor } from "../lib/sanity";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";

const ProductCard = ({ product }) => {
	return (
		<Box
			as={motion.div}
			initial={{ opacity: 0, transition: { duration: 1 } }}
			whileInView={{ opacity: 1 }}>
			<Box position="relative">
				<Image
					src={urlFor(product.image[0]).url()}
					alt={product.title}
					width="full"
				/>
				<Flex
					direction="column"
					gap={2}
					position="absolute"
					top="0.5rem"
					right="0.5rem">
					<Button
						bg="white"
						rounded="full"
						boxSize="3rem"
						p={0}
						color="blackAlpha.500"
						_hover={{ color: "blue.500" }}>
						<HiOutlineShoppingBag fontSize="1.3rem" color="inherit" />
					</Button>
					<Button
						bg="white"
						rounded="full"
						boxSize="3rem"
						p={0}
						color="blackAlpha.500"
						_hover={{ color: "blue.500" }}>
						<AiOutlineHeart fontSize="1.3rem" color="inherit" />
					</Button>
				</Flex>
			</Box>
			<Box mb={2}>
				<Button
					w="full"
					py={6}
					fontSize="1.1rem"
					rounded="none"
					bgColor="blue.400"
					transition="0.5s"
					_hover={{ bgColor: "black", color: "white" }}>
					VIEW
				</Button>
			</Box>
			<Box textAlign="center">
				<Text color="gray.300">{product.vendor.toUpperCase()}</Text>
				<Text fontSize="1.1rem">{product.title}</Text>
				<Text fontWeight={600} fontSize="1.1rem" color="orange.400">
					N{product.price.toFixed(2)}
				</Text>
			</Box>
		</Box>
	);
};

export default ProductCard;
