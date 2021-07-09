import React from "react";
import "../css/landing.css";
import hero from "../Assets/images/poster1.jpg";
import { PlayCircleFilled } from "@material-ui/icons";
export default function Landinghero() {
	return (
		<div className="landing-hero" style={{ backgroundImage: `url(${hero})` }}>
			<div className="site-about">
				<p className="title">cinemax</p>
				<p className="hero-text">the newdown of Cinemas</p>
			</div>

			<div className="play-button transform">
				<PlayCircleFilled style={{ color: "red", fontSize: "50px" }} />
				<p className="play-t-text">Watch Trailers</p>
			</div>
		</div>
	);
}
