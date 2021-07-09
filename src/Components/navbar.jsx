import { React, useState } from "react";
import "../css/navbar.css";
import Logo from "../Assets/images/logo.svg";
import {
	Slideshow,
	QueryBuilder,
	WhatshotOutlined,
	AccountCircle,
	EventOutlined,
	SearchOutlined,
} from "@material-ui/icons";
import {  Link } from "react-router-dom";

function Navbar() {
	const [Top, setTop] = useState(50);
	const [Position, setPosition] = useState("absolute");
	let transparent = `rgba(0, 0, 0,0.4)`;
	let opaque = `rgb(0, 0, 0)`;
	const [color, setColor] = useState(transparent);

	const seeScroll = () => {
		if (window.scrollY > 60) {
			setTop(0);
			setPosition("fixed");
			setColor(opaque);
		} else {
			setTop(50);
			setPosition("absolute");
			setColor(transparent);
		}
	};

	window.addEventListener("scroll", seeScroll);

	return (
		<div
			className="navbar"
			style={{
				position: `${Position}`,
				top: `${Top}px`,
				backgroundColor: color,
			}}
		>
			<div className="logo_holder">
				<img src={Logo} alt="" className="logo transform" />
			</div>
			<div className="menu-items">
				<div className="showing menu-btn">
					<Slideshow className="icon" />
					<p className="showing">Showing</p>
				</div>

				<div className="popular menu-btn">
					<Link to= "/popular">
					<QueryBuilder className="icon" />
					<p className="popular">Popular</p>
					</Link>
				</div>
				<div className="popular menu-btn">
					<EventOutlined className="icon" />
					<p className="popular">Upcoming</p>
				</div>
				<div className="popular menu-btn">
					<WhatshotOutlined className="icon" />
					<p className="popular">Trending</p>
				</div>
			</div>
			<div className="search_login">
				<div className="empty"></div>
				<div className="search">
					<SearchOutlined className="search-icon" />
					<input type="text" placeholder={"Search"} className="search-input" />
				</div>
				<div className="login link">
					<div className="account">Login</div>
					<AccountCircle fontSize="large" className="AccountIcon " />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
