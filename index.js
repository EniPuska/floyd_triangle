(function () {
	"use strict";
	var input_n, floydContainer;
	function check() {
		var	n = isNaN(input_n.value) ? 0 : Number(input_n.value),
			str = "",
			i,
			a = 1,
			c,
			space = " ";
		
		for (i = 1; i <= n; i++) {
			for (c = 1; c <= i; c++) {
				space = a < 10 ? "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" :
						a < 100 ? "&nbsp;&nbsp;&nbsp;" :
								a < 1000 ? "&nbsp;" : "";
				str += space + a ;
				a++;
			}
			str += "<br />";
		}
		floydContainer.innerHTML = str;
		return false;
	}
	function clearNumbers() {
		input_n.value = "";
		floydContainer.innerHTML = "";
		input_n.focus();
	}
	input_n = document.getElementById("inputN");
	floydContainer = document.getElementById("floyd-container");
	document.getElementById("myForm").onsubmit = check;
	document.getElementById("clear").onclick = clearNumbers;
}());