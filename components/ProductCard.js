import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { appear } from "../utils/MotionVariants";
import { urlFor } from "../lib/sanity";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useAppContext } from "../context";

const ProductCard = ({ product }) => {
	const { onAdd, qty, favorites, onFavorite } = useAppContext();
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		setIsFavorite(favorites.find((item) => item._id === product._id));
	}, [favorites]);

	return (
		<Box
			role="group"
			as={motion.div}
			variants={appear}
			initial={"initial"}
			whileInView={"animate"}
			viewport={{ once: true }}
			shadow="md"
			overflow="hidden">
			<Box position="relative">
				{product?.onSale && (
					<Box
						bg="orange.400"
						color="white"
						px={6}
						py={2}
						position="absolute"
						zIndex={20}
						top="0"
						left="0">
						SALE
					</Box>
				)}
				<Image
					src={urlFor(product?.image[0]).url()}
					alt={product?.title}
					width="full"
					minHeight={{ base: "14rem", md: "16rem" }}
					objectFit="cover"
					_groupHover={{ transform: "scale(1.1)" }}
				/>
				<Flex
					direction="column"
					gap={2}
					position="absolute"
					top="0.5rem"
					right="0.5rem">
					<Button
						onClick={() => onAdd(product, qty)}
						bg="white"
						rounded="full"
						boxSize="3rem"
						borderWidth="1px"
						borderColor="blackAlpha.200"
						p={0}
						color="blackAlpha.500"
						_hover={{ color: "blue.500" }}>
						<HiOutlineShoppingBag fontSize="1.3rem" color="inherit" />
					</Button>
					<Button
						onClick={() => onFavorite(product)}
						bg="white"
						rounded="full"
						boxSize="3rem"
						borderWidth="1px"
						borderColor="blackAlpha.200"
						p={0}
						color="blackAlpha.500"
						_hover={{ color: "blue.500" }}>
						{isFavorite ? (
							<AiFillHeart fontSize="1.3rem" color="#3182CE" />
						) : (
							<AiOutlineHeart fontSize="1.3rem" color="inherit" />
						)}
					</Button>
				</Flex>
			</Box>
			<Box mb={2}>
				<NextLink href={`/product/${product?.slug?.current}`}>
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
				</NextLink>
			</Box>
			<Box textAlign="center" pb={2}>
				<Text color="gray.400">{product?.vendor.toUpperCase()}</Text>
				<Text fontSize="1.1rem">{product?.title}</Text>
				<Text fontWeight={600} fontSize="1.1rem" color="orange.400">
					{"₦"}
					{product?.price.toFixed(2)}
				</Text>
				{product?.onSale && (
					<Text as="s" color="gray.400">
						N{product?.oldPrice.toFixed(2)}
					</Text>
				)}
			</Box>
		</Box>
	);
};

export default ProductCard;
