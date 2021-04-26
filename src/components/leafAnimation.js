import { running } from "animejs";
import anime from "animejs/lib/anime.es.js";

export const leafAnimate = () => {
	let leafPath1 = anime.path("#firstLeafPath path");
	let leafPath2 = anime.path("#secondLeafPath path");
	let leafPath3 = anime.path("#thirdLeafPath path");
	let leafPath4 = anime.path("#fourthLeafPath path");
	let leafPath5 = anime.path("#fifthLeafPath path");

	let leaf1 = {
		targets: "#firstLeaf",
		translateX: leafPath1("x"),
		translateY: leafPath1("y"),
		rotateX: 350,
		rotateY: 400,
		rotateZ: 300,
		easing: "linear",
		duration: 1400,
		loop: true,
	};

	let leaf2 = {
		targets: "#secondLeaf",
		translateX: leafPath2("x"),
		translateY: leafPath2("y"),
		rotateX: 350,
		rotateY: 400,
		rotateZ: 300,
		easing: "linear",
		duration: 1350,
		loop: true,
	};

	let leaf3 = {
		targets: "#thirdLeaf",
		translateX: leafPath3("x"),
		translateY: leafPath3("y"),
		rotateX: 550,
		rotateY: 600,
		rotateZ: 700,
		easing: "linear",
		duration: 2500,
		loop: true,
	};

	let leaf4 = {
		targets: "#fourthLeaf",
		translateX: leafPath4("x"),
		translateY: leafPath4("y"),
		rotateX: 550,
		rotateY: 600,
		rotateZ: 700,
		easing: "linear",
		duration: 5000,
		loop: true,
	};

	let leaf5 = {
		targets: "#fifthLeaf",
		translateX: leafPath5("x"),
		translateY: leafPath5("y"),
		rotateX: 550,
		rotateY: 600,
		rotateZ: 700,
		easing: "linear",
		duration: 2000,
		loop: true,
	};

	anime(leaf1);
	anime(leaf2);
	anime(leaf3);
	anime(leaf4);
	anime(leaf5);

	//THIS IS THE EXAMPLE
	// anime({ ...leaf1, autoplay: true });
};
