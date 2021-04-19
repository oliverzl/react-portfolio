import React, { useRef, useState, useEffect } from "react";
import Typist from "react-typist";
import { DiMongodb } from "react-icons/di";
import anime from "animejs/lib/anime.es.js";

import leaf3 from "../images/leaf3.svg";
import { path } from "animejs";

const Home = (props) => {
	useEffect(() => {
		let leafPath1 = anime.path("#firstLeafPath path");

		anime({
			targets: "#firstLeaf",
			translateX: leafPath1("x"),
			translateY: leafPath1("y"),
			rotateX: 350,
			rotateY: 400,
			rotateZ: 300,
			easing: "linear",
			duration: 1400,
			loop: true,
		});

		let leafPath2 = anime.path("#secondLeafPath path");
		anime({
			targets: "#secondLeaf",
			translateX: leafPath2("x"),
			translateY: leafPath2("y"),
			rotateX: 350,
			rotateY: 400,
			rotateZ: 300,
			easing: "linear",
			duration: 1350,
			loop: true,
		});

		let leafPath3 = anime.path("#thirdLeafPath path");
		anime({
			targets: "#thirdLeaf",
			translateX: leafPath3("x"),
			translateY: leafPath3("y"),
			rotateX: 550,
			// rotateY: 600,
			rotateZ: 700,
			easing: "linear",
			duration: 2500,
			loop: true,
		});

		let leafPath4 = anime.path("#fourthLeafPath path");
		anime({
			targets: "#fourthLeaf",
			translateX: leafPath4("x"),
			translateY: leafPath4("y"),
			rotateX: 550,
			// rotateY: 600,
			rotateZ: 700,
			easing: "linear",
			duration: 5000,
			loop: true,
		});

		let leafPath5 = anime.path("#fifthLeafPath path");
		anime({
			targets: "#fifthLeaf",
			translateX: leafPath5("x"),
			translateY: leafPath5("y"),
			rotateX: 550,
			// rotateY: 600,
			rotateZ: 700,
			easing: "linear",
			duration: 2000,
			loop: true,
		});
	});
	return (
		<div className="main-bg scroll-section" ref={props.refProp}>
			<div className="hero">
				<div className="heroInfo">
					<div className="leafWrap1">
						<img src={leaf3} className="spinLeaf" alt="" id="firstLeaf" />
						<svg id="firstLeafPath" width="1000" height="1000">
							<path
								style={{ stroke: "transparent", fill: "none" }}
								d="M 212 453 Q 279 507 420 512 Q 610 512 583 448 Q 549 390 412 376 Q 281 362 225 419 Z"
							></path>
						</svg>
					</div>

					<div className="leafWrap2">
						<img src={leaf3} className="spinLeaf" alt="" id="secondLeaf" />
						<svg id="secondLeafPath" width="1000" height="1000">
							<path
								style={{ stroke: "transparent", fill: "none" }}
								d="M 732 178 Q 704 141 641 141 Q 588 139 521 148 L 488 160 Q 436 183 466 212 Q 491 223 528 226 Q 594 236 661 240 Q 727 237 734 209 Z"
							></path>
						</svg>
					</div>

					<div className="leafWrap3">
						<img src={leaf3} className="spinLeaf" alt="" id="thirdLeaf" />
						<svg id="thirdLeafPath" width="1000" height="1000">
							<path
								style={{ stroke: "transparent", fill: "none" }}
								d="M 380 447 Q 266 475 400 556 Q 456 549 500 545 Q 596 467 484 447 Z"

								// M 694 515 Q 641 545 565 543 Q 467 546 369 535 Q 355 470 452 409 Q 518 395 593 424 Q 680 444 713 398 Q 748 354 709 341 Q 676 337 622 335 Q 585 341 529 343 Q 487 347 424 358 Q 365 368 347 418 Q 401 457 512 448 Q 580 430 656 426 Q 706 416 720 452 L 716 488 Z
							></path>
						</svg>
					</div>

					<div className="leafWrap4">
						<img src={leaf3} className="spinLeaf" alt="" id="fourthLeaf" />
						<svg id="fourthLeafPath" width="1000" height="1000">
							<path
								style={{ stroke: "transparent", fill: "none" }}
								d="M 599 539 Q 414 520 609 481 Q 796 507 532 578 Q 524 458 628 571 Q 655 638 500 561 Q 416 468 644 511 Q 756 545 626 544 Z"
							></path>
						</svg>
					</div>

					<div className="leafWrap5">
						<img src={leaf3} className="spinLeaf" alt="" id="fifthLeaf" />
						<svg id="fifthLeafPath" width="1000" height="1000">
							<path
								style={{ stroke: "transparent", fill: "none" }}
								d="M 525 436 Q 379 455 408 506 Q 456 549 585 500 Q 673 467 580 439 Z"
							></path>
						</svg>
					</div>

					<Typist cursor={{ show: false }} avgTypingDelay={55}>
						<Typist.Delay ms={300} />
						<span className="typespan firstbodytag">&lt;body&gt;</span>
					</Typist>
					<div className="description">
						<Typist cursor={{ show: false }} avgTypingDelay={55}>
							<Typist.Delay ms={1000} />
							<span className="typespan">&lt;h1&gt;</span>
							<h2 className="typespan-h2">
								Hi! <br />
								I'm Oliver, <br /> a MERN web developer.
							</h2>
							<span className="typespan">&lt;/h1&gt;</span>
						</Typist>
					</div>
					<Typist
						cursor={{ show: false }}
						avgTypingDelay={55}
						className="lastTypist"
					>
						<Typist.Delay ms={4100} />
						<span className="typespan lastspan">&lt;/body&gt;</span>
					</Typist>
				</div>
			</div>
		</div>
	);
};

export default Home;
