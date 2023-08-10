import React from "react";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
	const [open, setOpen] = useState<boolean>(false);

	const handleOpen = () => {
		setOpen((prev) => !prev);
	};

	return (
		<React.Fragment>
			<nav>
				{/* md upper navbar */}
				<div className="hidden w-100 px-4 md:flex flex-row justify-around bg-projectBlue items-center">
					<div className="text-white font-bebas text-3xl">softex</div>
					<ul className="flex flex-row text-xl items-center text-white">
						<li className=" px-5 py-3 hover:bg-slate-500 hover:bg-opacity-50  cursor-pointer">
							Home
						</li>
						<li className=" px-5 py-3  mx-5 hover:bg-slate-500 hover:bg-opacity-50  cursor-pointer">
							Library
						</li>
						<li className=" px-5 py-3 hover:bg-slate-500 hover:bg-opacity-50 cursor-pointer">
							FAQ
						</li>
					</ul>
				</div>

				{/* sm navbar */}
				<div className="absolute md:hidden z-20">
					<button onClick={handleOpen} className="md:hidden border rounded m-5">
						<Hamburger />
					</button>
				</div>
				{open && (
					<div className="absolute w-full h-screen bg-projectBlue flex flex-col items-center justify-between text-white z-10">
						<ul className="font-bold text-4xl h-full flex flex-col items-center justify-center">
							<li className="hover:">Home</li>
							<li className="my-12">Library</li>
							<li>FAQ</li>
						</ul>
					</div>
				)}
			</nav>
			<Outlet />
		</React.Fragment>
	);
};

export default Root;
