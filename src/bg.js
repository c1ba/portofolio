/* eslint-disable default-case */
let code_string = "",
	part_1 = [9, 5],
	part_2 = [0, "D"],
	part_3 = [0, "D"],
	code_array = [part_1.join(""), part_2.join(""), part_3.join("")],
	char_stat_1 = 0,
	char_stat_2 = 0,
    cycle_stage_up = 0;
    
const 	max_val = "95",
min_val = "0D",
char_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"],
body = document.getElementsByTagName("body"),
html = document.getElementsByTagName("html");

function timeout() {
	setTimeout(function () {
		switch (cycle_stage_up) {
		case (0):
			if (part_3.join("") !== max_val) {
				if (part_3[1] !== "F") {
					part_3[1] = char_array[char_stat_1];
					char_stat_1++;
				} else {
					char_stat_2++;
					part_3[0] = char_array[char_stat_2];
					part_3[1] = 0;
					char_stat_1 = 0;
				}
			} else {
				cycle_stage_up++;
				char_stat_1 = char_array.length - 11;
				char_stat_2 = char_array.length - 7;
			}
			break;
		case (1):
			if (part_1.join("") !== min_val) {
				if (part_1[1] !== 0) {
					part_1[1] = char_array[char_stat_1];
					char_stat_1--;
				} else {
					part_1[0] = char_array[char_stat_2];
					char_stat_2--;
					part_1[1] = "F";
					char_stat_1 = char_array.length - 1;
				}
			} else {
				cycle_stage_up++;
				char_stat_1 = 12;
				char_stat_2 = 0;
			}
			break;
		case (2):
			if (part_2.join("") !== max_val) {
				if (part_2[1] !== "F") {
					part_2[1] = char_array[char_stat_1];
					char_stat_1++;
				} else {
					char_stat_2++;
					part_2[0] = char_array[char_stat_2];
					part_2[1] = 0;
					char_stat_1 = 0;
				}
			} else {
				cycle_stage_up++;
				char_stat_1 = char_array.length - 11;
				char_stat_2 = char_array.length - 7;
			}
			break;
		case (3):
			if (part_3.join("") !== min_val) {
				if (part_3[1] !== 0) {
					part_3[1] = char_array[char_stat_1];
					char_stat_1--;
				} else {
					part_3[0] = char_array[char_stat_2];
					char_stat_2--;
					part_3[1] = "F";
					char_stat_1 = char_array.length - 1;
				}
			} else {
				cycle_stage_up++;
				char_stat_1 = 12;
				char_stat_2 = 0;
			}
			break;
		case (4):
			if (part_1.join("") !== max_val) {
				if (part_1[1] !== "F") {
					part_1[1] = char_array[char_stat_1];
					char_stat_1++;
				} else {
					char_stat_2++;
					part_1[0] = char_array[char_stat_2];
					part_1[1] = 0;
					char_stat_1 = 0;
				}
			} else {
				cycle_stage_up++;
				char_stat_1 = char_array.length - 11;
				char_stat_2 = char_array.length - 7;
			}
			break;
		case (5):
			if (part_2.join("") !== min_val) {
				if (part_2[1] !== 0) {
					part_2[1] = char_array[char_stat_1];
					char_stat_1--;
				} else {
					part_2[0] = char_array[char_stat_2];
					char_stat_2--;
					part_2[1] = "F";
					char_stat_1 = char_array.length - 1;
				}
			} else {
				cycle_stage_up = 0;
				char_stat_1 = 12;
				char_stat_2 = 0;
			}
			break;
		}
		code_array = [part_1.join(""), part_2.join(""), part_3.join("")];
		code_string = code_array.join("");
        body[0].style.backgroundColor = "#"+ code_string;
        html[0].style.backgroundColor = "#"+ code_string;
		timeout();
	}, 200);
}
	timeout();