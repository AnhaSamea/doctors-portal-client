import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (

<footer className="p-6 footer-bg">
	<div className="container grid sm:grid-cols-1 mx-auto gap-x-4 gap-y-12 lg:grid-cols-3">
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Services</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
				<Link rel="noopener noreferrer" href="#">Installation</Link>
				<Link rel="noopener noreferrer" href="#">Release Notes</Link>
				<Link rel="noopener noreferrer" href="#">Upgrade Guide</Link>
				<Link rel="noopener noreferrer" href="#">Using with Preprocessors</Link>
				<Link rel="noopener noreferrer" href="#">Optimizing for Production</Link>
				<Link rel="noopener noreferrer" href="#">Browser Support</Link>
				<Link rel="noopener noreferrer" href="#">IntelliSense</Link>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Oral Health</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
				<Link rel="noopener noreferrer" href="#">Utility-First</Link>
				<Link rel="noopener noreferrer" href="#">Responsive Design</Link>
				<Link rel="noopener noreferrer" href="#">Hover, Focus, &amp; Other States</Link>
				<Link rel="noopener noreferrer" href="#">Dark Mode</Link>
				<Link rel="noopener noreferrer" href="#">Adding Base Styles</Link>
				<Link rel="noopener noreferrer" href="#">Extracting Components</Link>
				<Link rel="noopener noreferrer" href="#">Adding New Utilities</Link>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Our Address</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
				<Link rel="noopener noreferrer" href="#">New York - 101010 Hudson</Link>
			</div>
		</div>
	</div>
	<div className="flex items-center justify-center px-6 pt-12 text-sm">
		<span className="dark:text-gray-400">© Copyright 2022. All Rights Reserved.</span>
	</div>
</footer>


  );
};

export default Footer;