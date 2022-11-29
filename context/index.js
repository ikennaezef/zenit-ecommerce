import React, { useState, createContext, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { getFromStorage, setToStorage } from "../utils/localStorage";

const AppContext = createContext(null);

export const useAppContext = () => {
	return useContext(AppContext);
};

export const ContextWrapper = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalQuantities, setTotalQuantities] = useState(0);
	const [qty, setQty] = useState(1);

	useEffect(() => {
		getFromStorage("cartItems") && setCartItems(getFromStorage("cartItems"));
		getFromStorage("favorites") && setFavorites(getFromStorage("favorites"));
		getFromStorage("totalPrice") && setTotalPrice(getFromStorage("totalPrice"));
		getFromStorage("totalQuantities") &&
			setTotalQuantities(getFromStorage("totalQuantities"));
	}, []);

	const incQty = () => {
		setQty((prevQty) => prevQty + 1);
	};

	const decQty = () => {
		setQty((prevQty) => {
			if (prevQty - 1 < 1) return 1;

			return prevQty - 1;
		});
	};

	const onAdd = (product, quantity) => {
		const checkProductInCart = cartItems.find(
			(item) => item._id === product._id
		);

		const newTotalPrice = totalPrice + product.price * quantity;
		setTotalPrice(newTotalPrice);
		setToStorage("totalPrice", newTotalPrice);

		const newTotalQuantities = totalQuantities + quantity;
		setTotalQuantities(newTotalQuantities);
		setToStorage("totalQuantities", newTotalQuantities);

		if (checkProductInCart) {
			const updatedCartItems = cartItems.map((cartProduct) => {
				if (cartProduct._id === product._id)
					return {
						...cartProduct,
						quantity: cartProduct.quantity + quantity,
					};
				else {
					return cartProduct;
				}
			});

			setCartItems(updatedCartItems);
			setToStorage("cartItems", updatedCartItems);
		} else {
			product.quantity = quantity;
			setCartItems([...cartItems, { ...product }]);
			setToStorage("cartItems", [...cartItems, { ...product }]);
		}

		toast.success(`${qty} ${product.title} added to the cart.`);
		setQty(1);
	};

	const onRemove = (product) => {
		let newCart = cartItems.filter((item) => item._id !== product._id);
		const newTotalQuantity =
			totalQuantities > 0 ? totalQuantities - product.quantity : 0;
		const newTotalPrice = totalPrice - product.price * product.quantity;
		setCartItems(newCart);
		setToStorage("cartItems", newCart);
		setTotalQuantities(newTotalQuantity);
		setToStorage("totalQuantities", newTotalQuantity);
		setTotalPrice(newTotalPrice);
		setToStorage("totalPrice", newTotalPrice);
		toast.error(`${product.title} removed from cart.`);
	};

	const toggleCartItemQuantity = (id, value) => {
		const foundProduct = cartItems.find((item) => item._id === id);

		if (value === "inc") {
			let newCartItems = cartItems.map((product) =>
				product._id === id
					? { ...foundProduct, quantity: foundProduct.quantity + 1 }
					: product
			);
			setCartItems(newCartItems);
			setToStorage("cartItems", newCartItems);

			const newTotalPrice = totalPrice + foundProduct.price;
			setTotalPrice(newTotalPrice);
			setToStorage("totalPrice", newTotalPrice);

			const newTotalQuantity = totalQuantities + 1;
			setTotalQuantities(newTotalQuantity);
			setToStorage("totalQuantities", newTotalQuantity);
		} else if ((value = "dec")) {
			if (foundProduct.quantity > 1) {
				let newCartItems = cartItems.map((product) =>
					product._id === id
						? { ...foundProduct, quantity: foundProduct.quantity - 1 }
						: product
				);
				setCartItems(newCartItems);
				setToStorage("cartItems", newCartItems);

				const newTotalPrice = totalPrice - foundProduct.price;
				setTotalPrice(newTotalPrice);
				setToStorage("totalPrice", newTotalPrice);

				const newTotalQuantity = totalQuantities - 1;
				setTotalQuantities(newTotalQuantity);
				setToStorage("totalQuantities", newTotalQuantity);
			}
		}
	};

	const onFavorite = (product) => {
		const checkProductInFavorites = favorites.find(
			(item) => item._id === product._id
		);

		if (checkProductInFavorites) {
			let newFavorites = favorites.filter((item) => item._id !== product._id);
			setFavorites(newFavorites);
			setToStorage("favorites", newFavorites);
			toast.error(`${product.title} removed from wishlist`);
		} else {
			setFavorites([...favorites, product]);
			setToStorage("favorites", [...favorites, product]);
			toast.success(`${product.title} added to wishlist`);
		}
	};

	const values = {
		cartItems,
		setCartItems,
		totalPrice,
		setTotalPrice,
		totalQuantities,
		setTotalQuantities,
		qty,
		incQty,
		decQty,
		onAdd,
		onRemove,
		toggleCartItemQuantity,
		favorites,
		onFavorite,
	};

	return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
