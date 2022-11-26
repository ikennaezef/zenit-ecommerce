import React, { useState } from "react";
import NextLink from "next/link";
import {
	Box,
	Button,
	Container,
	Flex,
	Input,
	InputGroup,
	InputRightElement,
	Text,
	Link,
	Heading,
	Hide,
	Show,
	CloseButton,
	UnorderedList,
	Divider,
} from "@chakra-ui/react";
import { FaBars, FaMountain, FaSearch } from "react-icons/fa";
import { GiMountaintop } from "react-icons/gi";
import { AiOutlineShopping } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { useAppContext } from "../context";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { navContainer, navItems } from "../utils/MotionVariants";

const NavBar = () => {
	const [showNav, setShowNav] = useState(false);
	const [open, cycleOpen] = useCycle(false, true);
	const { totalQuantities } = useAppContext();

	const handleClick = () => {
		console.log("clicked");
	};

	return (
		<nav style={{ position: "relative" }}>
			<Container maxW="container.xl" borderBottom="1px" borderColor="gray.200">
				<Box py={5}>
					<Flex align="center" justify="space-between">
						<NextLink href="/">
							<Flex align="center" gap="0.2rem" cursor="pointer">
								<GiMountaintop color="#2B6CB0" fontSize="1.7rem" />
								<Heading fontWeight={700} fontSize="2rem">
									ZENIT
								</Heading>
							</Flex>
						</NextLink>
						<Show above="md">
							<Box>
								<InputGroup size="md" py={0} borderColor="gray.500">
									<Input placeholder="Search..." w="full" rounded="none" />
									<InputRightElement>
										<Button
											h="full"
											bgColor="blue.500"
											_hover={{ bgColor: "blue.400" }}
											size="sm"
											rounded="none"
											onClick={handleClick}>
											<FaSearch />
										</Button>
									</InputRightElement>
								</InputGroup>
							</Box>
						</Show>
						<Flex>
							<NextLink href="/cart">
								<Button variant="ghost" p={2} position="relative">
									<AiOutlineShopping fontSize="1.8rem" />
									<Flex
										align="center"
										rounded="full"
										justify="center"
										boxSize="1.2rem"
										position="absolute"
										top="5px"
										right="2px"
										p={1}
										fontSize="0.8rem"
										color="white"
										bg="red.500">
										{totalQuantities}
									</Flex>
								</Button>
							</NextLink>
							<Hide above="md">
								<Button variant="ghost" onClick={cycleOpen}>
									<FaBars fontSize="1.2rem" />
								</Button>
							</Hide>
						</Flex>
					</Flex>
					<Show above="md">
						<Flex gap={8} pt={5}>
							<NextLink href="/">
								<Link fontWeight={500}>Home</Link>
							</NextLink>
							<NextLink href="/categories">
								<Link fontWeight={500}>Categories</Link>
							</NextLink>
							<NextLink href="/blog">
								<Link fontWeight={500}>Blog</Link>
							</NextLink>
							<NextLink href="/about">
								<Link fontWeight={500}>About Us</Link>
							</NextLink>
							<NextLink href="/contact">
								<Link fontWeight={500}>Contact</Link>
							</NextLink>
						</Flex>
					</Show>
					<Hide above="md">
						<AnimatePresence>
							{open && (
								<Box
									as={motion.div}
									initial={{ right: "-100&" }}
									animate={{ right: 0 }}
									exit={{
										right: "-100%",
										transition: { delay: 0.5, duration: 0.3 },
									}}
									position="absolute"
									top="0"
									right={open ? "0" : "-100%"}
									bg="white"
									zIndex={50}
									px={5}
									py={10}
									w="full"
									h="100vh">
									<Flex justify="end" mb={16}>
										<CloseButton size="1.5rem" onClick={cycleOpen} />
									</Flex>
									<Box
										listStyleType="none"
										as={motion.div}
										initial="closed"
										animate="open"
										exit="closed"
										variants={navContainer}>
										<Box
											fontSize="1.3rem"
											mb={3}
											as={motion.div}
											variants={navItems}>
											<NextLink href="/">
												<Link
													display="flex"
													justifyContent="space-between"
													onClick={cycleOpen}>
													Home{" "}
													<BiChevronRight fontSize="1.6rem" color="#888888" />
												</Link>
											</NextLink>
										</Box>
										<Divider my={4} bg="#CCCCCC" />
										<Box
											fontSize="1.3rem"
											mb={3}
											as={motion.div}
											variants={navItems}>
											<NextLink href="/categories">
												<Link
													display="flex"
													justifyContent="space-between"
													onClick={cycleOpen}>
													Categories{" "}
													<BiChevronRight fontSize="1.6rem" color="#888888" />
												</Link>
											</NextLink>
										</Box>
										<Divider my={4} bg="#CCCCCC" />
										<Box
											fontSize="1.3rem"
											mb={3}
											as={motion.div}
											variants={navItems}>
											<NextLink href="/blog">
												<Link
													display="flex"
													justifyContent="space-between"
													onClick={cycleOpen}>
													Blog{" "}
													<BiChevronRight fontSize="1.6rem" color="#888888" />
												</Link>
											</NextLink>
										</Box>
										<Divider my={4} bg="#CCCCCC" />
										<Box
											fontSize="1.3rem"
											mb={3}
											as={motion.div}
											variants={navItems}>
											<NextLink href="/about">
												<Link
													display="flex"
													justifyContent="space-between"
													onClick={cycleOpen}>
													About{" "}
													<BiChevronRight fontSize="1.6rem" color="#888888" />
												</Link>
											</NextLink>
										</Box>
										<Divider my={4} bg="#CCCCCC" />
										<Box
											fontSize="1.3rem"
											mb={3}
											as={motion.div}
											variants={navItems}>
											<NextLink href="/contact">
												<Link
													display="flex"
													justifyContent="space-between"
													onClick={cycleOpen}>
													Contact{" "}
													<BiChevronRight fontSize="1.6rem" color="#888888" />
												</Link>
											</NextLink>
										</Box>
									</Box>
								</Box>
							)}
						</AnimatePresence>
					</Hide>
				</Box>
			</Container>
		</nav>
	);
};

export default NavBar;
