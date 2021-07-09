import React from "react";
import "../css/Moviecard.css";
import hero from "../Assets/images/poster1.jpg";
function MovireCard() {
	return (
        <div className="movie-card" style={{ backgroundImage: `url(${hero})` }}>
            
			<div className="movieInfo" style={{transform: `translateY(100%)`}}>
				<p className="title">Us</p>
				<p className="movie-category">Thriller</p>
				<p className="time">15.00 EAT</p>
				<p className="venue">KENYA CINEMA</p>
				<p className="venue-location">Nairobi CBD</p>
			</div>
		</div>
	);
}

export default MovireCard;
