import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
	Box,
	Container,
	Flex,
	Show,
	Hide,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	Image,
	Text,
	Button,
	Textarea,
	Divider,
	Checkbox,
	Progress,
	Heading,
} from "@chakra-ui/react";
import { useAppContext } from "../context";
import { urlFor } from "../lib/sanity";
import {
	AiOutlineMinus,
	AiOutlinePlus,
	AiOutlineShopping,
} from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { BiRightArrowAlt } from "react-icons/bi";
import { Meta } from "../components";

const Cart = () => {
	const router = useRouter();

	const [checked, setChecked] = useState(false);
	const [progress, setProgress] = useState("0.00");
	const [shipping, setShipping] = useState(0);
	const { cartItems, totalPrice, toggleCartItemQuantity, onRemove } =
		useAppContext();

	useEffect(() => {
		const percent = Math.floor((totalPrice / 25000) * 100);
		setProgress(percent);
	}, [cartItems]);

	useEffect(() => {
		if (cartItems.length < 1) {
			setShipping("₦0.00");
		} else {
			setShipping("₦2000.00");
		}
		if (progress >= 100) {
			setShipping("✨Free✨");
		}
	}, [progress, cartItems]);

	return (
		<Box>
			<Meta title="Your Cart" />
			<Container maxWidth="container.xl">
				<Heading mt={6}>Your Cart</Heading>
				<Flex gap={5} direction={{ base: "column", md: "row" }} py={6}>
					<Box w={{ base: "full", md: "70%" }}>
						{cartItems.length > 0 && (
							<>
								<Box>
									<Show above="md">
										<TableContainer>
											<Table variant="simple">
												<Thead>
													<Tr>
														<Th color="blackAlpha.600">Product</Th>
														<Th isNumeric color="blackAlpha.600">
															Price
														</Th>
														<Th isNumeric color="blackAlpha.600">
															Quantity
														</Th>
														<Th isNumeric color="blackAlpha.600">
															Total
														</Th>
														<Th isNumeric></Th>
													</Tr>
												</Thead>
												<Tbody>
													{cartItems.map((product, index) => (
														<Tr key={index}>
															<Td>
																<Flex gap={3} pr={1} align="center">
																	<Box minWidth="30%">
																		<Image
																			src={urlFor(product?.image[0]).url()}
																			alt={product.title}
																		/>
																	</Box>
																	<Box>
																		<Text fontWeight="600">
																			{product.title}
																		</Text>
																		<Text>Vendor: {product.vendor}</Text>
																	</Box>
																</Flex>
															</Td>
															<Td isNumeric>
																<Text pl={2}>
																	{"₦"}
																	{product.price.toFixed(2)}
																</Text>
															</Td>
															<Td isNumeric>
																<Flex align="center" mb={4}>
																	<Button
																		size="sm"
																		onClick={() =>
																			toggleCartItemQuantity(product._id, "dec")
																		}>
																		<AiOutlineMinus />
																	</Button>
																	<Text px={5} fontSize="1.2rem">
																		{product.quantity}
																	</Text>
																	<Button
																		size="sm"
																		onClick={() =>
																			toggleCartItemQuantity(product._id, "inc")
																		}>
																		<AiOutlinePlus />
																	</Button>
																</Flex>
															</Td>
															<Td isNumeric>
																<Text color="blue.500">
																	{"₦"}
																	{(product.price * product.quantity).toFixed(
																		2
																	)}
																</Text>
															</Td>
															<Td isNumeric>
																<Button
																	bg="red.500"
																	w="1.5rem"
																	h="2rem"
																	p={0}
																	_hover={{ bg: "red.400" }}
																	onClick={() => onRemove(product)}>
																	<RiCloseLine fontSize="1rem" color="white" />
																</Button>
															</Td>
														</Tr>
													))}
												</Tbody>
											</Table>
										</TableContainer>
									</Show>
									<Hide above="md">
										{cartItems.map((product, index) => (
											<Flex key={index} align="center" gap="1rem" mb={2}>
												<Box w="20%">
													<Image
														src={urlFor(product?.image[0]).url()}
														alt="product image"
													/>
												</Box>
												<Box w="70%">
													<Text
														fontSize={{ base: "1rem", md: "1.2rem" }}
														mb={1}>
														{product.title}
													</Text>
													<Flex align="center" justify="space-between">
														<Text
															fontSize="1.1rem"
															fontWeight="600"
															color="blue.600"
															mb={2}>
															${product.price.toFixed(2)}
														</Text>
														<Button
															bg="red.500"
															boxSize="2rem"
															p={1}
															_hover={{ bg: "red.400" }}
															onClick={() => onRemove(product)}>
															<RiCloseLine fontSize="1.5rem" color="white" />
														</Button>
													</Flex>
													<Flex align="center" mb={4}>
														<Button
															size="sm"
															onClick={() =>
																toggleCartItemQuantity(product._id, "dec")
															}>
															<AiOutlineMinus />
														</Button>
														<Text px={5} fontSize="1.2rem">
															{product.quantity}
														</Text>
														<Button
															size="sm"
															onClick={() =>
																toggleCartItemQuantity(product._id, "inc")
															}>
															<AiOutlinePlus />
														</Button>
													</Flex>
												</Box>
											</Flex>
										))}
									</Hide>
								</Box>
								<Box mt={12}>
									<Textarea
										rows={6}
										size="lg"
										placeholder="Instructions for the seller"
									/>
								</Box>
							</>
						)}

						{cartItems < 1 && (
							<Flex direction="column" align="center" py={8}>
								<AiOutlineShopping size={150} color="#BBBBBB" />
								<Text fontSize="1.1rem" mb={6}>
									Your cart is empty
								</Text>
								<NextLink href="/categories">
									<Button
										bg="blue.600"
										color="white"
										size="lg"
										rounded="none"
										_hover={{ bg: "blue.400" }}>
										Continue Shopping
									</Button>
								</NextLink>
							</Flex>
						)}
					</Box>
					<Box w={{ base: "full", md: "30%" }}>
						<Box
							borderWidth="1px"
							borderColor="blackAlpha.200"
							borderStyle="dashed"
							rounded="md"
							p={3}>
							<Text>Cart Total</Text>
							<Divider py={2} />
							<Flex justify="space-between">
								<Text>Subtotal: </Text>
								<Text fontWeight="600">
									{"₦"}
									{totalPrice.toFixed(2)}
								</Text>
							</Flex>
							<Divider py={2} />
							<Flex justify="space-between">
								<Text>Shipping: </Text>
								<Text>{shipping}</Text>
							</Flex>
							<Divider py={2} />
							<Flex justify="space-between">
								<Text color="blue.500">Total: </Text>
								<Text color="blue.500" fontWeight="600">
									{"₦"}
									{cartItems.length > 0 && progress < 100
										? (totalPrice + 2000).toFixed(2)
										: progress >= 100
										? totalPrice.toFixed(2)
										: "0.00"}
								</Text>
							</Flex>
							<Box py={5}>
								<Text>Free Shipping for orders above {"₦"}25,000</Text>
								<Box py={3}>
									<Progress
										rounded="sm"
										hasStripe
										isAnimated
										value={progress}
										colorScheme={
											progress < 50
												? "yellow"
												: progress < 80
												? "teal"
												: "green"
										}
									/>
								</Box>
								{progress >= 100 && (
									<Text>✨ Hooray! You qualify for free shipping ✨</Text>
								)}
							</Box>
							<Divider py={2} />
							{cartItems.length > 0 && (
								<>
									<Checkbox
										colorScheme="blue"
										isChecked={checked}
										onChange={() => setChecked(!checked)}>
										I accept the Terms and Conditions
									</Checkbox>
									<Flex justify="center" direction="column" gap={5}>
										<Button
											onClick={() => router.push("/success")}
											isDisabled={!checked}
											w={{ base: "full", md: "auto" }}
											mt={2}
											bg="blue.600"
											color="white"
											size="lg"
											rounded="sm"
											_hover={{ bg: "blue.400" }}>
											GO TO CHECKOUT
										</Button>
										<NextLink href="/categories">
											<Button
												variant="link"
												color="black"
												rightIcon={<BiRightArrowAlt fontSize="1.4rem" />}>
												Continue Shopping
											</Button>
										</NextLink>
									</Flex>
								</>
							)}
						</Box>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};

export default Cart;
