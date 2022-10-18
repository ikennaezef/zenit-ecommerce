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
	ListItem,
	Divider,
} from "@chakra-ui/react";
import { FaBars, FaMountain, FaSearch } from "react-icons/fa";
import { GiMountaintop } from "react-icons/gi";
import { AiOutlineShopping } from "react-icons/ai";
import { BiCart, BiChevronRight } from "react-icons/bi";

const NavBar = () => {
	const [showNav, setShowNav] = useState(false);

	const handleClick = () => {
		console.log("clicked");
	};

	return (
		<nav style={{ position: "relative" }}>
			<Container maxW="container.lg" borderBottom="1px" borderColor="gray.200">
				<Box py={5}>
					<Flex align="center" justify="space-between">
						<Flex align="center" gap="0.2rem">
							<GiMountaintop color="#2B6CB0" fontSize="1.7rem" />
							<Heading fontWeight={700} fontSize="2rem">
								ZENIT
							</Heading>
						</Flex>
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
									0
								</Flex>
							</Button>
							<Hide above="md">
								<Button variant="ghost" onClick={() => setShowNav(true)}>
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
							<NextLink href="/">
								<Link fontWeight={500}>Categories</Link>
							</NextLink>
							<NextLink href="/blog">
								<Link fontWeight={500}>Blog</Link>
							</NextLink>
							<NextLink href="/about">
								<Link fontWeight={500}>About Us</Link>
							</NextLink>
						</Flex>
					</Show>
					<Hide above="md">
						<Box
							position="absolute"
							top="0"
							right={showNav ? "0" : "-100%"}
							bg="white"
							zIndex={5}
							px={5}
							py={10}
							w="full"
							h="100vh">
							<Box>
								<Flex justify="end" mb={16}>
									<CloseButton
										size="1.5rem"
										onClick={() => setShowNav(false)}
									/>
								</Flex>
								<UnorderedList listStyleType="none">
									<ListItem fontSize="1.3rem">
										<NextLink href="/">
											<Link
												display="flex"
												justifyContent="space-between"
												onClick={() => setShowNav(false)}>
												Home{" "}
												<BiChevronRight fontSize="1.6rem" color="#888888" />
											</Link>
										</NextLink>
									</ListItem>
									<Divider my={4} bg="#CCCCCC" />
									<ListItem fontSize="1.3rem">
										<NextLink href="/blog">
											<Link
												display="flex"
												justifyContent="space-between"
												onClick={() => setShowNav(false)}>
												Blog{" "}
												<BiChevronRight fontSize="1.6rem" color="#888888" />
											</Link>
										</NextLink>
									</ListItem>
									<Divider my={4} bg="#CCCCCC" />
									<ListItem fontSize="1.3rem">
										<NextLink href="/about">
											<Link
												display="flex"
												justifyContent="space-between"
												onClick={() => setShowNav(false)}>
												About{" "}
												<BiChevronRight fontSize="1.6rem" color="#888888" />
											</Link>
										</NextLink>
									</ListItem>
								</UnorderedList>
							</Box>
						</Box>
					</Hide>
				</Box>
			</Container>
		</nav>
	);
};

export default NavBar;
