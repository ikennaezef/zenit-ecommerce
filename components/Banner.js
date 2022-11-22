import React from "react";
import NextLink from "next/link";
import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Heading,
	Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BiRightArrowAlt } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine, RiSecurePaymentLine } from "react-icons/ri";
import { appear, fadeInUp, staggerContainer } from "../utils/MotionVariants";

const Banner = () => {
	return (
		<>
			<Box
				bgImage="/images/banner.webp"
				bgPosition="center"
				bgRepeat="no-repeat"
				bgSize="cover"
				display="flex"
				alignItems="center"
				h="30rem">
				<Container maxW="container.xl">
					<Grid alignContent="center" py={5}>
						<Box color="white">
							<Flex
								as={motion.div}
								initial="initial"
								animate="animate"
								variants={staggerContainer}
								direction="column"
								spacing={1}>
								<Text
									as={motion.p}
									variants={fadeInUp}
									color="black"
									fontStyle="italic"
									fontWeight={500}
									mb={2}>
									Buy 2 Get 1 Free!!
								</Text>
								<Heading
									as={motion.h2}
									variants={fadeInUp}
									fontWeight={700}
									fontSize="2.5rem"
									lineHeight={1}>
									Fashionable
								</Heading>
								<Heading as={motion.h2} variants={fadeInUp} fontWeight={400}>
									Collection
								</Heading>
								<Text
									as={motion.p}
									variants={fadeInUp}
									fontSize={{ base: "0.8rem", md: "1rem" }}>
									Get free shipping on all orders above N25,000
								</Text>
								<NextLink href="/categories">
									<Button
										as={motion.button}
										variants={fadeInUp}
										mt={5}
										bgColor="black"
										width="fit-content"
										rounded="sm"
										rightIcon={<BiRightArrowAlt fontSize="1.4rem" />}
										_hover={{ transform: "scale(0.95)" }}>
										Shop Now
									</Button>
								</NextLink>
							</Flex>
						</Box>
					</Grid>
				</Container>
			</Box>
			<Box pt={8}>
				<Container maxW="container.lg">
					<Flex
						align="center"
						justify="space-around"
						shadow="lg"
						p={3}
						gap={4}
						flexWrap="wrap">
						<Box>
							<Flex align="center" gap={2}>
								<Box>
									<TbTruckDelivery fontSize="1.7rem" />
								</Box>
								<Box>
									<Text fontWeight={500}>Free Shipping and Return</Text>
									<Text fontSize="0.9rem" color="gray.400">
										Free shipping on orders above N25,000
									</Text>
								</Box>
							</Flex>
						</Box>
						<Box>
							<Flex align="center" gap={2}>
								<Box>
									<RiCustomerServiceLine fontSize="1.5rem" />
								</Box>
								<Box>
									<Text fontWeight={500}>Customer Support 24/7</Text>
									<Text fontSize="0.9rem" color="gray.400">
										Instant access to perfect support
									</Text>
								</Box>
							</Flex>
						</Box>
						<Box>
							<Flex align="center" gap={2}>
								<Box>
									<RiSecurePaymentLine fontSize="1.5rem" />
								</Box>
								<Box>
									<Text fontWeight={500}>100% Secure Payment</Text>
									<Text fontSize="0.9rem" color="gray.400">
										We ensure secure payment
									</Text>
								</Box>
							</Flex>
						</Box>
					</Flex>
				</Container>
			</Box>
		</>
	);
};

export default Banner;
