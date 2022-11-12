import React from "react";
import NextLink from "next/link";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const CategoryCard = ({ category, link }) => {
	return (
		<Box
			position="relative"
			cursor="pointer"
			overflow="hidden"
			role="group"
			as={motion.div}
			initial={{ opacity: 0, transition: { duration: 1 } }}
			whileInView={{ opacity: 1 }}
			_before={{
				content: "''",
				position: "absolute",
				rounded: "md",
				top: 0,
				left: 0,
				zIndex: 20,
				width: "full",
				height: "100%",
				backgroundColor: "rgba(0, 0, 0, 0.3)",
			}}>
			<Image
				src={`/images/${category.image}`}
				rounded="md"
				h={{ base: "10rem", md: "12rem" }}
				w="full"
				objectFit="cover"
				_groupHover={{ transform: "scale(1.1)" }}
				position="relative"
			/>
			<Flex
				justify="center"
				w="full"
				position="absolute"
				bottom="0.7rem"
				px={3}>
				<NextLink href={category.link}>
					<Button
						bgColor="white"
						color="black"
						rounded="none"
						w="full"
						_hover={{ bgColor: "blue.400", color: "white" }}
						zIndex={30}>
						{category.title}
					</Button>
				</NextLink>
			</Flex>
		</Box>
	);
};

export default CategoryCard;
