import React, { useEffect, useState } from "react";
import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Image,
	Link,
	ListItem,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import { sanityClient, urlFor } from "../../lib/sanity";
import PortableText from "react-portable-text";
import {
	AiFillHeart,
	AiOutlineHeart,
	AiOutlineMinus,
	AiOutlinePlus,
	AiOutlineSafety,
	AiOutlineShopping,
} from "react-icons/ai";
import { Meta, ProductsSection } from "../../components";
import { useAppContext } from "../../context";
import { RiTruckLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { appear } from "../../utils/MotionVariants";

const ProductDetail = ({ product, others }) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [currentImage, setCurrentImage] = useState(0);
	const { qty, incQty, decQty, onAdd, favorites, onFavorite } = useAppContext();

	useEffect(() => {
		setIsFavorite(favorites.find((item) => item._id === product._id));
	}, [favorites]);

	return (
		<Box>
			<Meta title={`${product.vendor} - ${product.title}`} />
			<Container
				maxWidth="container.xl"
				as={motion.div}
				variants={appear}
				initial={"initial"}
				animate={"animate"}>
				<Flex py="3rem" direction={{ base: "column", md: "row" }} gap="2rem">
					<Flex direction={{ base: "column", md: "row-reverse" }} gap={4}>
						<Box>
							<Image
								src={urlFor(product.image[currentImage]).url()}
								alt={product.title}
								width={{ base: "full", md: "25rem" }}
							/>
						</Box>
						<Flex gap={4} direction={{ base: "row", md: "column" }}>
							{product.image.map((img, index) => (
								<Box
									key={index}
									p={1}
									borderWidth="1px"
									borderColor={currentImage === index ? "blue.500" : "gray.200"}
									onClick={() => setCurrentImage(index)}>
									<Image
										src={urlFor(img).url()}
										w="5rem"
										objectFit="cover"
										alt={product.title}
									/>
								</Box>
							))}
						</Flex>
					</Flex>
					<Box>
						<Heading>{product.title}</Heading>
						<Text color="blackAlpha.700" mb={4}>
							Vendor: {product.vendor}
						</Text>
						{product.oldPrice && (
							<Text
								color="gray.400"
								fontSize="1.1rem"
								textDecoration="line-through">
								{"₦"}
								{product.oldPrice.toFixed(2)}
							</Text>
						)}
						<Text fontSize="2rem" fontWeight="700" color="orange.400">
							{"₦"}
							{product.price.toFixed(2)}
						</Text>
						<Box mt={4}>
							<PortableText
								dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
								projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
								content={product.description}
								serializers={{
									h1: (props) => <Heading fontSize="2rem" {...props} />,
									h2: (props) => <Heading fontSize="2rem" {...props} />,
									li: ({ children }) => (
										<UnorderedList>
											<ListItem ml={4}>{children}</ListItem>
										</UnorderedList>
									),
									link: ({ href, children }) => (
										<Link href={href} color="blue.500">
											{children}
										</Link>
									),
									normal: ({ children }) => (
										<div className="leading-relaxed my-4">{children}</div>
									),
								}}
							/>
						</Box>
						<Flex my={6} gap={3} align="center">
							<Flex
								align="center"
								w="fit-content"
								h="40px"
								borderColor="blackAlpha.400"
								borderWidth="1px">
								<Button bg="transparent" rounded="none" onClick={decQty}>
									<AiOutlineMinus />
								</Button>
								<Text px={5} fontSize="1.2rem">
									{qty}
								</Text>
								<Button bg="transparent" rounded="none" onClick={incQty}>
									<AiOutlinePlus />
								</Button>
							</Flex>
							<Button
								onClick={() => onAdd(product, qty)}
								rounded="sm"
								bgColor="blue.500"
								_hover={{ bg: "blue.400" }}
								color="white"
								w={{ base: "full", md: "auto" }}
								h="40px"
								px={8}
								leftIcon={
									<AiOutlineShopping fontSize="1.5rem" color="white" />
								}>
								Add To Cart
							</Button>
						</Flex>
						<Button
							onClick={() => onFavorite(product)}
							rounded="none"
							borderColor="blackAlpha.400"
							borderWidth="1px"
							leftIcon={
								isFavorite ? (
									<AiFillHeart fontSize="1.3rem" color="#3182CE" />
								) : (
									<AiOutlineHeart fontSize="1.3rem" color="inherit" />
								)
							}>
							{isFavorite ? "Remove from Wishlist" : "Add to Wishlist"}
						</Button>
						<Box mt={8}>
							<Flex align={"center"} gap={5} w="full">
								<Box>
									<AiOutlineSafety fontSize="2rem" />
								</Box>
								<Box>
									<Text fontWeight="600">6 Months Warranty</Text>
									<Text color="blackAlpha.500">Guarantee with no doubt</Text>
								</Box>
							</Flex>
							<Flex align={"center"} gap={5} w="full" mt={4}>
								<Box>
									<RiTruckLine fontSize="2rem" />
								</Box>
								<Box>
									<Text fontWeight="600">Free Delivery</Text>
									<Text color="blackAlpha.500">On orders above {"₦"}25000</Text>
								</Box>
							</Flex>
						</Box>
					</Box>
				</Flex>
				<Box>
					<ProductsSection title="You May Also Like" products={others} />
				</Box>
			</Container>
		</Box>
	);
};

export default ProductDetail;

export const getStaticProps = async ({ params: { slug } }) => {
	const query = `*[_type=="product" && slug.current== '${slug}'][0]{
    'categories': categories[]->title,
    description,
    image,
    price,
    oldPrice,
    title,
    'vendor': vendor -> title,
    _id
  }`;
	const product = await sanityClient.fetch(query);

	const othersQuery = `*[_type=="product" && slug.current!= '${slug}' && '${product.categories[0]}' in categories[]->title][0...6]{
    categories,
    description,
    image,
    price,
    oldPrice,
		slug,
    title,
    'vendor': vendor -> title,
    _id
  }`;
	const others = await sanityClient.fetch(othersQuery);

	return {
		props: { product, others },
	};
};

export const getStaticPaths = async () => {
	const query = `*[_type=="product"]{
    slug {
      current
    }
  }`;

	const products = await sanityClient.fetch(query);

	const paths = products.map((product) => ({
		params: {
			slug: product.slug.current,
		},
	}));

	return {
		paths,
		fallback: "blocking",
	};
};
