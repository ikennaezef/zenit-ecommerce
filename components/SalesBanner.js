import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const SalesBanner = () => {
	return (
		<Box>
			<Box
				bgImage="/images/clothes.jpg"
				bgPosition="center"
				bgSize="cover"
				position="relative"
				_before={{
					content: "''",
					position: "absolute",
					top: 0,
					left: 0,
					width: "full",
					height: "full",
					backgroundColor: "rgba(0, 0, 0, 0.7)",
					zIndex: 20,
				}}>
				<Container
					maxWidth="container.sm"
					py={20}
					zIndex={30}
					position="relative">
					<Box color="white" textAlign="center">
						<Text fontStyle="italic" mb={2}>
							Extra{" "}
							<span style={{ color: "#3182CE", fontWeight: "600" }}>
								30% Off
							</span>{" "}
							Online
						</Text>
						<Heading mb={4}>Summer Season Sale</Heading>
						<Text mb={5}>Free shipping on orders above N25000</Text>
						<Button
							rounded="sm"
							bgColor="blue.600"
							_hover={{ bgColor: "blue.500" }}
							px={8}
							rightIcon={<BiRightArrowAlt fontSize="1.4rem" />}>
							SHOP NOW
						</Button>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default SalesBanner;
