export const fadeInUp = {
	initial: {
		y: 30,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: { duration: 1, type: "easeOut" },
	},
};

export const staggerContainer = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
		},
	},
};

export const appear = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: { duration: 1, delay: 0.5 },
	},
};

export const navContainer = {
	closed: {
		transition: {
			staggerChildren: 0.2,
			staggerDirection: -1,
		},
	},
	open: {
		transition: {
			staggerChildren: 0.2,
			staggerDirection: 1,
		},
	},
};

export const navItems = {
	closed: {
		opacity: 0,
		y: 15,
	},
	open: { opacity: 1, y: 0 },
};
