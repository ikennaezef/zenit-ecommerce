import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { RiFacebookFill, RiInstagramLine, RiTwitterFill } from "react-icons/ri";

const StoreCard = ({ office }) => {
	return (
		<Flex
			rounded="md"
			align="center"
			justify="center"
			minHeight="15rem"
			maxWidth={{ base: "full", md: "15rem", lg: "full" }}
			role="group"
			color="white"
			bgSize="cover"
			bgImage={office.image}
			bgPosition="center">
			<Flex
				rounded="md"
				direction="column"
				justify="center"
				w="full"
				h="full"
				textAlign="center"
				bgColor="rgba(0, 0, 0, 0.5)"
				_groupHover={{ backgroundColor: "rgba(31, 114, 201, 0.7)" }}
				p={8}>
				<Text
					fontWeight="600"
					fontSize="1.5rem"
					transform="translateY(25px)"
					_groupHover={{ transform: "translateY(-10px)" }}>
					{office.location}
				</Text>
				<Box
					_groupHover={{ opacity: 1, transform: "translateY(0)" }}
					opacity={0}
					transform="translateY(50px)">
					<Link>{office.mail}</Link>
					<Text>Phone: {office.phone}</Text>
					<Flex justify="center" gap={5} mt={2}>
						<Box>
							<RiFacebookFill color="white" />
						</Box>
						<Box>
							<RiTwitterFill color="white" />
						</Box>
						<Box>
							<RiInstagramLine color="white" />
						</Box>
					</Flex>
				</Box>
			</Flex>
		</Flex>
	);
};

export default StoreCard;
