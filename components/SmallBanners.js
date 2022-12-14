import React from "react";
import {
	Box,
	Button,
	Container,
	Divider,
	Flex,
	Grid,
	Image,
	Text,
} from "@chakra-ui/react";
import Nextlink from "next/link";
import { motion } from "framer-motion";
import { BiRightArrowAlt } from "react-icons/bi";

const SmallBanners = () => {
	return (
		<Box my={12}>
			<Container maxWidth="container.xl">
				<Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4}>
					<Box
						position="relative"
						cursor="pointer"
						overflow="hidden"
						rounded="md"
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
							backgroundColor: "rgba(0, 0, 0, 0.5)",
						}}>
						<Image
							src={`/images/men.jpg`}
							alt="a fashionable man"
							rounded="md"
							h="full"
							w="full"
							objectFit="cover"
							_groupHover={{ transform: "scale(1.1)" }}
							position="relative"
						/>
						<Flex
							w="full"
							direction="column"
							align={{ base: "center", md: "flex-start" }}
							color="white"
							position="absolute"
							top="20%"
							left={{ base: 0, md: "1rem" }}
							zIndex={30}>
							<Text fontSize="1.7rem" fontWeight="600">
								{"For Men's"}
							</Text>
							<Text>STARTING AT N6000</Text>
							<Divider h={1} w={12} bgColor="white" my={2} />
							<Nextlink href="/category/fashion">
								<Button
									variant="link"
									color="white"
									rounded="none"
									p={0}
									rightIcon={<BiRightArrowAlt fontSize="1.4rem" />}>
									SHOP NOW
								</Button>
							</Nextlink>
						</Flex>
					</Box>
					<Box
						position="relative"
						cursor="pointer"
						overflow="hidden"
						role="group"
						rounded="md"
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
							backgroundColor: "rgba(0, 0, 0, 0.5)",
						}}>
						<Image
							src={`/images/pattern.jpg`}
							alt=""
							rounded="md"
							h="full"
							w="full"
							objectFit="cover"
							_groupHover={{ transform: "scale(1.1)" }}
							position="relative"
						/>
						<Flex
							direction="column"
							align="center"
							w="full"
							color="white"
							position="absolute"
							textAlign="center"
							top="20%"
							zIndex={30}>
							<Text>Up to 20% Off</Text>
							<Text fontSize="1.6rem" fontWeight="600" mb={2}>
								Black Friday Sale
							</Text>
							<Nextlink href="/categories">
								<Button
									variant="outline"
									borderColor="blue.500"
									color="blue.500"
									rounded="none"
									rightIcon={<BiRightArrowAlt fontSize="1.4rem" />}>
									SHOP NOW
								</Button>
							</Nextlink>
						</Flex>
					</Box>
					<Box
						position="relative"
						cursor="pointer"
						overflow="hidden"
						role="group"
						rounded="md"
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
							backgroundColor: "rgba(0, 0, 0, 0.5)",
						}}>
						<Image
							src={`/images/woman-fashion.jpg`}
							alt="a fashionable woman"
							rounded="md"
							h="full"
							w="full"
							objectFit="cover"
							_groupHover={{ transform: "scale(1.1)" }}
							position="relative"
						/>
						<Flex
							w="full"
							direction="column"
							align={{ base: "center", md: "flex-end" }}
							color="white"
							position="absolute"
							textAlign="right"
							top="20%"
							right={{ base: 0, md: "10%" }}
							zIndex={30}>
							<Text fontSize="1.6rem" fontWeight="600" mb={1}>
								Fashions
							</Text>
							<Text>30% OFF</Text>
							<Divider h={1} w={12} bgColor="white" my={2} />
							<Nextlink href="/category/fashion">
								<Button
									variant="link"
									color="white"
									p={0}
									rightIcon={<BiRightArrowAlt fontSize="1.4rem" />}>
									SHOP NOW
								</Button>
							</Nextlink>
						</Flex>
					</Box>
				</Grid>
			</Container>
		</Box>
	);
};

export default SmallBanners;
