import {
	Box,
	Button,
	Container,
	Flex,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from "@chakra-ui/react";
import { FaMountain, FaSearch } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { BiCart } from "react-icons/bi";
import React from "react";

const NavBar = () => {
	const handleClick = () => {
		console.log("clicked");
	};

	return (
		<nav>
			<Container maxW="container.lg">
				<Box py={5}>
					<Flex align="center" justify="space-between">
						<Flex align="center" gap="0.2rem">
							<FaMountain color="blue.200" />
							<Text fontWeight={600}>ZENIT</Text>
						</Flex>
						<Box>
							<InputGroup size="md">
								<Input placeholder="Search..." />
								<InputRightElement width="4.5rem">
									<Button h="1.75rem" size="sm" onClick={handleClick}>
										<FaSearch />
									</Button>
								</InputRightElement>
							</InputGroup>
						</Box>
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
					</Flex>
				</Box>
			</Container>
		</nav>
	);
};

export default NavBar;
