import { React, useState } from "react";
import "../css/Moviecard.css";
import hero from "../Assets/images/poster1.jpg";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import CardMembershipIcon from "@material-ui/icons/CardMembership";

function MovireCard() {
	const [Translate, setTranslate] = useState(`translateY(100%)`);

	const translateHide = () => {
		setTranslate(`translateY(110%)`);
	};
	const translateShow = () => {
		setTranslate(`translateY(0)`);
	};

	return (
		<div
			className="movie-card"
			onMouseEnter={() => {
				translateShow();
			}}
			onMouseLeave={() => {
				translateHide();
			}}
			style={{ backgroundImage: `url(${hero})` }}
		>
			<div className="movieInfo" style={{ transform: Translate }}>
				<div className="titleholder">
					<p className="title">Us</p>
					<div className="yearBadge">
						<p>2021</p>
					</div>
				</div>
				<p className="movie-category">Thriller</p>
				<p className="time">15:00 EAT</p>
				<p className="venue">KENYA CINEMA</p>
				<p className="venue-location">Nairobi CBD</p>
				<div className="btns">
					<div className="btn-ticket">
						<CardMembershipIcon
							style={{ fontSize: "16px", margin: "auto 0",color:'red' }}
							className="icon"
						/>
						<p className="ticket btn-txt">Buy Ticket</p>
					</div>
					<div className="btn-play">
						<PlayArrowIcon
							style={{ fontSize: "16px", margin: "auto 0",color:'red' }}
							className="icon"
						/>
						<p className="play btn-txt">Watch Trailer</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MovireCard;
