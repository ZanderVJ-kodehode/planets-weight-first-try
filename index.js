const input = document.querySelector("#numinput");
const unit = document.querySelector("#unitdropdown");
const resultTxt = document.querySelector("#result");

const convertUnit = () => {
	let result = "";
	switch (unit.value) {
		case "Solen":
			result = `${input.value} Earth equals ${(input.value * 27.01 ).toFixed(
				2
			)} on solen`;
			break;
		case "Merkur":
			result = `${input.value} Earth equals ${(input.value * 0.38).toFixed(
				2
			)} on merkur`;
			break;
		case "Venus":
			result = `${input.value} Earth equals ${(input.value * 0.91).toFixed(
				2
			)} on venus`;
			break;
		case "Jorden":
			result = `${input.value} Earth equals ${(input.value * 1).toFixed(
				2
			)} on earth`;
			break;
		case "Månen":
			result = `${input.value} Earth equals ${(input.value * 0.166).toFixed(
				2
			)} on Månen`;
			break;
		case "Mars":
			result = `${input.value} Earth equals ${(input.value * 0.38).toFixed(
				2
			)} on mars`;
			break;
		case "Jupiter":
			result = `${input.value} Earth equals ${(input.value * 2.34).toFixed(
				2
			)} on jupiter`;
			break;
		case "Saturn":
			result = `${input.value} Earth equals ${(input.value * 1.06).toFixed(
				2
			)} on saturn`;
			break;
		case "Uranus":
			result = `${input.value} Earth equals ${(input.value * 0.92).toFixed(
				2
			)} on uranus`;
			break;
		case "Neptun":
			result = `${input.value} Earth equals ${(input.value * 1.19).toFixed(
				2
			)} on neptun`;
			break;
		case "Pluto":
			result = `${input.value} Earth equals ${(input.value * 0.06).toFixed(
				2
			)} on pluto`;
			break;
		default:
			result = "Error!";
	}

	resultTxt.textContent = result;
};