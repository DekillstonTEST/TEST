// Переключение abbreviated_multiplication
var quadraticEquation = document.getElementById('quadratic_equation');
var abbreviatedMultiplication = document.getElementById('abbreviated_multiplication');
quadraticEquation.onclick = function quadraticEquationFUN() {
	var quadraticEquation1ID = document.getElementById('quadratic_equation_1ID');
	quadraticEquation1ID.style.display = 'block';
	var problems1ID = document.getElementById('problems_1ID');
	problems1ID.style.display = 'block';
	var solveProblems1ID = document.getElementById('solve_problems_1ID');
	solveProblems1ID.style.display = 'block';
	var abbreviatedMultiplicationFormulasID = document.getElementById('abbreviated_multiplication_formulasID');
	abbreviatedMultiplicationFormulasID.style.display = 'none';
	//
	var quadraticEquationWidth = window.screen.width;
	if(quadraticEquationWidth <= 710) {
		var displayLeft = document.getElementById('display_left');
		displayLeft.style.height = '0px';
	}
}
abbreviatedMultiplication.onclick = function abbreviatedMultiplicationFUN() {
	var quadraticEquation1ID = document.getElementById('quadratic_equation_1ID');
	quadraticEquation1ID.style.display = 'none';
	var problems1ID = document.getElementById('problems_1ID');
	problems1ID.style.display = 'none';
	var solveProblems1ID = document.getElementById('solve_problems_1ID');
	solveProblems1ID.style.display = 'none';
	var abbreviatedMultiplicationFormulasID = document.getElementById('abbreviated_multiplication_formulasID');
	abbreviatedMultiplicationFormulasID.style.display = 'block';
	var abbreviatedMultiplicationWidth = window.screen.width;
	if(abbreviatedMultiplicationWidth <= 710) {
		var displayLeft = document.getElementById('display_left');
		displayLeft.style.height = '0px';
	}
		function AbbreviationOfWordsFUN() {
		var AbbreviationOfWords = window.screen.width;
		//
		var Abbreviation1 = document.getElementById('collapse_formula');
		var Abbreviation2 = document.getElementById('expand_formula');
		var Abbreviation3 = document.getElementById('plus_or_minus1');
		var Abbreviation4 = document.getElementById('plus_or_minus2');
		var Abbreviation5 = document.getElementById('deploy_two_formul');
		var Abbreviation6 = document.getElementById('rollUp_two_formul');
		var Abbreviation7 = document.getElementById('enter_collapse_cube_furmul');
		var Abbreviation8 = document.getElementById('enter_roll_up_cube_formul');
		if(AbbreviationOfWords <= 420) {
			Abbreviation1.textContent = 'Развернуть';
			Abbreviation2.textContent = 'Свернуть';
			Abbreviation3.textContent = 'Развернуть';
			Abbreviation4.textContent = 'Свернуть';
			Abbreviation5.textContent = 'Развернуть';
			Abbreviation6.textContent = 'Свернуть';
			Abbreviation7.textContent = 'Развернуть';
			Abbreviation8.textContent = 'Свернуть';
		} else {
			Abbreviation1.textContent = 'Развернуть формулу';
			Abbreviation2.textContent = 'Свернуть формулу';
			Abbreviation3.textContent = 'Развернуть формулу';
			Abbreviation4.textContent = 'Свернуть формулу';
			Abbreviation5.textContent = 'Развернуть формулу';
			Abbreviation6.textContent = 'Свернуть формулу';
			Abbreviation7.textContent = 'Развернуть формулу';
			Abbreviation8.textContent = 'Свернуть формулу';
		}
}
setInterval(AbbreviationOfWordsFUN, 500);
}
//		
// Функция которая чистит
function cleanDoChangeEnterRollUpCubeFAN() {
	var bracketCubeLeft = document.getElementById('bracket_cube_left');
    bracketCubeLeft.textContent = '';
	var numberLeftCube = document.getElementById('number_left_cube');
    numberLeftCube.textContent = '';
	var plusMinusCube = document.getElementById('plus_minus_cube');
    plusMinusCube.textContent = '';
	var numberRightCube = document.getElementById('number_right_cube');
    numberRightCube.textContent = '';
	var bracketCubeRight = document.getElementById('bracket_cube_right');
    bracketCubeRight.textContent = '';
	var twoCubeTop = document.getElementById('two_cube_top');
	twoCubeTop.textContent = '';
}
// Функция неизменяемых тегов
function DoChangeEnterRollUpCubeFAN() {
	var bracketCubeLeft = document.getElementById('bracket_cube_left');
	bracketCubeLeft.textContent = '(';
	var plusMinusCube = document.getElementById('plus_minus_cube');
	plusMinusCube.textContent = '±';
	var bracketCubeRight = document.getElementById('bracket_cube_right');
	bracketCubeRight.textContent = ')';
	var twoCubeTop = document.getElementById('two_cube_top');
	twoCubeTop.textContent = '2';

}
// Функция ввода
function enterRollUpCubeFAN(numLeft, textLeft, numRight, textRight) {
	// Подчёт чисел 
	var numLeftSymbol = (numLeft + '^-^').length;
	var numRightSymbol = (numRight + '^-^').length;
	// При ошибке 
	var bracketCubeLeft = document.getElementById('bracket_cube_left');
	// Меняющиеся числа
	var numberLeftCube = document.getElementById('number_left_cube');
	var numberRightCube = document.getElementById('number_right_cube');
	//
	if(numLeftSymbol > 3) {
		if(numRightSymbol > 3) {
			// Есть два числа 
			if(numLeft > 0) {
				if(numRight > 0) {
					if(Math.floor(numLeft) == numLeft) {
						if(Math.floor(numRight) == numRight) {
							var numZeroLeft = 0; 
							for(var numL = 0; numL <= numLeft; numL++) {
								var numEqualLeft = numL * numL * numL;
								if(numEqualLeft == numLeft) {
									numZeroLeft = numL;
								}
							}
							var numZeroRight = 0;
							for(var numR = 0; numR <= numRight; numR++) {
								var numEqualRight = numR * numR * numR;
								if(numEqualRight == numRight) {
									numZeroRight = numR;
								}
							}
							if(numZeroLeft > 0 & numZeroRight > 0) {
								numberLeftCube.textContent = numZeroLeft + textLeft;
								numberRightCube.textContent = numZeroRight + textRight;
								DoChangeEnterRollUpCubeFAN();
							} else {
								bracketCubeLeft.textContent = 'Указанны неправильные числа';
							}
						} else {
							bracketCubeLeft.textContent = 'Нельзя указывать не целые числа';
						}
					} else {
						bracketCubeLeft.textContent = 'Нельзя указывать не целые числа';
					}
				} else {
					bracketCubeLeft.textContent = 'Нельзя указывать отрицательныe числа';
				}
			} else {
				bracketCubeLeft.textContent = 'Нельзя указывать отрицательныe числа';
			}
		}
	}
	if(numLeftSymbol == 3) {
		if(numRightSymbol == 3) {
			// Без чисел
			numberLeftCube.textContent = textLeft;
			numberRightCube.textContent = textRight;
			DoChangeEnterRollUpCubeFAN();
		}
	}
	if(numLeftSymbol == 3) {
		if(numRightSymbol > 3) {
			// Без левого числа
			if(numRight > 0) {
				if(Math.floor(numRight) == numRight) {
					var numZeroRight = 0;
					for(var numR = 0; numR <= numRight; numR++) {
						var numEqualRight = numR * numR * numR;
						if(numEqualRight == numRight) {
						numZeroRight = numR;
						}
					}
					if(numZeroRight > 0) {
						numberLeftCube.textContent = textLeft;
						numberRightCube.textContent = numZeroRight + textRight;
						DoChangeEnterRollUpCubeFAN();
					} else {
						bracketCubeLeft.textContent = 'Указанны неправильные числа';
					}		
				} else {
					bracketCubeLeft.textContent = 'Нельзя указывать не целые числа';
				}
			} else {
				bracketCubeLeft.textContent = 'Нельзя указывать отрицательныe числа';
			}
		}
	}
	if(numLeftSymbol > 3) {
		if(numRightSymbol == 3) {
			// Без правого числа 
			if(numLeft > 0) {
				if(Math.floor(numLeft) == numLeft) {
					var numZeroLeft = 0; 
					for(var numL = 0; numL <= numLeft; numL++) {
						var numEqualLeft = numL * numL * numL;
						if(numEqualLeft == numLeft) {
							numZeroLeft = numL;
						}
					}
					if(numZeroLeft > 0) {
						numberLeftCube.textContent = numZeroLeft + textLeft;
						numberRightCube.textContent = textRight;
						DoChangeEnterRollUpCubeFAN();
					} else {
						bracketCubeLeft.textContent = 'Указанны неправильные числа';
					}
				} else {
					bracketCubeLeft.textContent = 'Нельзя указывать не целые числа';
				}
			} else {
				bracketCubeLeft.textContent = 'Нельзя указывать отрицательныe числа';
			}
		}
	}
}
//
var enterRollUpCube = document.getElementById('enter_roll_up_cube');
enterRollUpCube.onclick = function enterRollUpCubeFUN() {
	cleanDoChangeEnterRollUpCubeFAN();
	var rollUpCubeLeft = document.getElementById('roll_up_cube_left').value;
	var rollUpCubeRight = document.getElementById('roll_up_cube_right').value;
	// При ошибке
	var bracketCubeLeft = document.getElementById('bracket_cube_left');
	// Левый цикл
	var separateTextLeftNUM1 = rollUpCubeLeft.length;
    // Создаёт массив букв и цифр
	var separateTextLeftNUMBER = [];
	var separateTextLeftLETTERS = [];
	for(var LefNum = 0; LefNum < separateTextLeftNUM1; LefNum++) {
		var separateTextLeftSymbol = rollUpCubeLeft[LefNum];
		var checkingSeparateTextLeftSymbol = (separateTextLeftSymbol + 1) / (separateTextLeftSymbol + 1);
		if(checkingSeparateTextLeftSymbol == 1) {
			separateTextLeftNUMBER.push(separateTextLeftSymbol);
		} else if(separateTextLeftSymbol == ',') {
			separateTextLeftNUMBER.push('.');
		} else if(separateTextLeftSymbol == '.') {
			separateTextLeftNUMBER.push('.');
		} else {
			separateTextLeftLETTERS.push(separateTextLeftSymbol);
		}
	}
	var wholeSeparateTextLeftNUMBER = parseFloat(separateTextLeftNUMBER.join(''));
	var wholeSeparateTextLeftLETTERS = separateTextLeftLETTERS.join('');
	// Правый цикл
	// Подчёт букв
	var separateTextRightNUM1 = rollUpCubeRight.length;
		// Создаёт массив букв и цифр
	var separateTextRightNUMBER = [];
	var separateTextRightLETTERS = [];
	for(var RigNum = 0; RigNum < separateTextRightNUM1; RigNum++) {
		var separateTextRightSymbol = rollUpCubeRight[RigNum];
		var checkingSeparateTextRightSymbol = (separateTextRightSymbol + 1) / (separateTextRightSymbol + 1);
		if(checkingSeparateTextRightSymbol == 1) {
			separateTextRightNUMBER.push(separateTextRightSymbol);
		} else if(separateTextRightSymbol == ',') {
			separateTextRightNUMBER.push('.');
		} else if(separateTextRightSymbol == '.') {
			separateTextRightNUMBER.push('.');
		} else {
			separateTextRightLETTERS.push(separateTextRightSymbol);
      	}
	}
	var wholeSeparateTextRightNUMBER = parseFloat(separateTextRightNUMBER.join(''));
	var wholeSeparateTextRightLETTERS = separateTextRightLETTERS.join('');
	// Если NaN
	if(isNaN(wholeSeparateTextLeftNUMBER) == true) {
		wholeSeparateTextLeftNUMBER = '';
	}
    if(isNaN(wholeSeparateTextRightNUMBER) == true) {
	wholeSeparateTextRightNUMBER = '';
    }
    // Если ввёл
    if(separateTextLeftNUM1 > 0 & separateTextRightNUM1 > 0) {
    	enterRollUpCubeFAN(wholeSeparateTextLeftNUMBER, wholeSeparateTextLeftLETTERS, wholeSeparateTextRightNUMBER,wholeSeparateTextRightLETTERS)
    } else {
    	bracketCubeLeft.textContent = 'Числа не вписанны'
    }
}
// Функция квадратов
function enterUpdateFORMULcubeTWO(leftT, rightT) {
	// Подчёт букв
	var leftTNUM = (leftT + '^-^').length;
	var rightTNUM = (rightT + '^-^').length;
	// Меняющиеся квадраты
	var squareLeftCube = document.getElementById('square_left_cube');
	var squareRightCube = document.getElementById('square_right_cube');
	if(leftTNUM > 3) {
		squareLeftCube.textContent = '2';
	} else {
		squareLeftCube.textContent = '';
	}
	if(rightTNUM > 3) {
		squareRightCube.textContent = '2';
	} else {
		squareRightCube.textContent = '';
	}
}
// Функция ввода
function enterUpdateFORMULcube(numLeft, textLeft, numRight, textRight) {
	// Подчёт чисел 
	var numLeftSymbol = (numLeft + '^-^').length;
	var numRightSymbol = (numRight + '^-^').length;
	// Меняющийся числа
	var cubeLeft1 = document.getElementById('cube_left1');
	var cubeLeft2 = document.getElementById('cube_left2');
	var cubeRight = document.getElementById('cube_right');
	// Впускает
	if(numLeftSymbol > 3) {
		if(numRightSymbol > 3) {
			// Есть два числа
			var numZeroLeft = 0; 
			for(var numL = 0; numL <= numLeft; numL++) {
				var numEqualLeft = numL * numL * numL;
				if(numEqualLeft == numLeft) {
					numZeroLeft = numL;
				}
			}
			var numZeroRight = 0;
			for(var numR = 0; numR <= numRight; numR++) {
				var numEqualRight = numR * numR * numR;
				if(numEqualRight == numRight) {
					numZeroRight = numR;
				}
			}
			if(numZeroLeft > 0 & numZeroRight > 0) {
				cubeLeft1.textContent = (3 * (numZeroLeft * numZeroLeft) * numZeroRight) + textLeft;
				cubeLeft2.textContent =  textRight;
				cubeRight.textContent = (3 * (numZeroRight * numZeroRight) * numZeroLeft) + textLeft + textRight;
				enterUpdateFORMULcubeTWO(textLeft, textRight)
			} else {
				cubeLeft1.textContent = '?';
				cubeLeft2.textContent = '?';
				cubeRight.textContent = '??';
			}
		}
	}
	if(numLeftSymbol == 3) {
		if(numRightSymbol == 3) {
			// Без чисел	
			cubeLeft1.textContent = '3' + textLeft;
			cubeLeft2.textContent = textRight;
			cubeRight.textContent = '3' + textLeft + textRight;	
			enterUpdateFORMULcubeTWO(textLeft, textRight)
		}
	}
	if(numLeftSymbol == 3) {
		if(numRightSymbol > 3) {
			// Без левого числа
			var numZeroRight = 0;
			for(var numR = 0; numR <= numRight; numR++) {
				var numEqualRight = numR * numR * numR;
				if(numEqualRight == numRight) {
					numZeroRight = numR;
				}
			}
			if(numZeroRight > 0) {
				cubeLeft1.textContent = (3 * numZeroRight) + textLeft;
				cubeLeft2.textContent =  textRight;
				cubeRight.textContent = (3 * (numZeroRight * numZeroRight)) + textLeft + textRight;
				enterUpdateFORMULcubeTWO(textLeft, textRight)
			} else {
				cubeLeft1.textContent = '?';
				cubeLeft2.textContent = '?';
				cubeRight.textContent = '??';
			}
		}
	}
	if(numLeftSymbol > 3) {
		if(numRightSymbol == 3) {
			// Без правого числа 
			var numZeroLeft = 0; 
			for(var numL = 0; numL <= numLeft; numL++) {
				var numEqualLeft = numL * numL * numL;
				if(numEqualLeft == numLeft) {
					numZeroLeft = numL;
				}
			}
			if(numZeroLeft > 0) {
				cubeLeft1.textContent = (3 * (numZeroLeft * numZeroLeft)) + textLeft;
				cubeLeft2.textContent =  textRight;
				cubeRight.textContent = (3 * numZeroLeft) + textLeft + textRight;
				enterUpdateFORMULcubeTWO(textLeft, textRight)
			} else {
				cubeLeft1.textContent = '?';
				cubeLeft2.textContent = '?';
				cubeRight.textContent = '??';
			}
		}
	}
}
// Функция обновления 
function updateFORMULcube() {
	var rollUpCubeLeft = document.getElementById('roll_up_cube_left').value;
	var rollUpCubeRight = document.getElementById('roll_up_cube_right').value;
	// Левый цикл
	var separateTextLeftNUM1 = rollUpCubeLeft.length;
    // Создаёт массив букв и цифр
	var separateTextLeftNUMBER = [];
	var separateTextLeftLETTERS = [];
	for(var LefNum = 0; LefNum < separateTextLeftNUM1; LefNum++) {
		var separateTextLeftSymbol = rollUpCubeLeft[LefNum];
		var checkingSeparateTextLeftSymbol = (separateTextLeftSymbol + 1) / (separateTextLeftSymbol + 1);
		if(checkingSeparateTextLeftSymbol == 1) {
			separateTextLeftNUMBER.push(separateTextLeftSymbol);
		} else if(separateTextLeftSymbol == ',') {
			separateTextLeftNUMBER.push('.');
		} else if(separateTextLeftSymbol == '.') {
			separateTextLeftNUMBER.push('.');
		} else {
			separateTextLeftLETTERS.push(separateTextLeftSymbol);
		}
	}
	var wholeSeparateTextLeftNUMBER = parseFloat(separateTextLeftNUMBER.join(''));
	var wholeSeparateTextLeftLETTERS = separateTextLeftLETTERS.join('');
	// Правый цикл
	// Подчёт букв
	var separateTextRightNUM1 = rollUpCubeRight.length;
		// Создаёт массив букв и цифр
	var separateTextRightNUMBER = [];
	var separateTextRightLETTERS = [];
	for(var RigNum = 0; RigNum < separateTextRightNUM1; RigNum++) {
		var separateTextRightSymbol = rollUpCubeRight[RigNum];
		var checkingSeparateTextRightSymbol = (separateTextRightSymbol + 1) / (separateTextRightSymbol + 1);
		if(checkingSeparateTextRightSymbol == 1) {
			separateTextRightNUMBER.push(separateTextRightSymbol);
		} else if(separateTextRightSymbol == ',') {
			separateTextRightNUMBER.push('.');
		} else if(separateTextRightSymbol == '.') {
			separateTextRightNUMBER.push('.');
		} else {
			separateTextRightLETTERS.push(separateTextRightSymbol);
      	}
	}
	var wholeSeparateTextRightNUMBER = parseFloat(separateTextRightNUMBER.join(''));
	var wholeSeparateTextRightLETTERS = separateTextRightLETTERS.join('');
	// Если NaN
	if(isNaN(wholeSeparateTextLeftNUMBER) == true) {
		wholeSeparateTextLeftNUMBER = '';
	}
    if(isNaN(wholeSeparateTextRightNUMBER) == true) {
	wholeSeparateTextRightNUMBER = '';
    }
    // Впускает
    if(separateTextLeftNUM1 > 0 & separateTextRightNUM1 > 0) {
    		enterUpdateFORMULcube(wholeSeparateTextLeftNUMBER, wholeSeparateTextLeftLETTERS, wholeSeparateTextRightNUMBER,wholeSeparateTextRightLETTERS);
    	} 
}
// Кнопки
var enterCollapseCubeFurmul = document.getElementById('enter_collapse_cube_furmul');
enterCollapseCubeFurmul.onclick = function enterCollapseCubeFurmulFUN() {
	var collapseCubeFurmul = document.getElementById('collapse_cube_furmul');
	collapseCubeFurmul.style.display = 'block';
	var rollUpCubeFormul = document.getElementById('roll_up_cube_formul');
	rollUpCubeFormul.style.display = 'none';
}
var enterRollUpCubeFormul = document.getElementById('enter_roll_up_cube_formul');
enterRollUpCubeFormul.onclick = function enterRollUpCubeFormulFUN() {
	var collapseCubeFurmul = document.getElementById('collapse_cube_furmul');
	collapseCubeFurmul.style.display = 'none';
	var rollUpCubeFormul = document.getElementById('roll_up_cube_formul');
	rollUpCubeFormul.style.display = 'block';
	setInterval(updateFORMULcube, 500);
}
// Функция чистки
function cleanEnterCubeBracketFormul() {
	var numberCube1 = document.getElementById('number_cube_1');
    numberCube1.textContent = '';
	var topTwoCube1 = document.getElementById('top_two_cube1');
    topTwoCube1.textContent = '';
	var plus1Minus = document.getElementById('plus1_minus');
	plus1Minus.textContent = '';
	var numberCube2 = document.getElementById('number_cube_2');
    numberCube2.textContent = '';
	var topTwoCube2 = document.getElementById('top_two_cube2');
    topTwoCube2.textContent = '';
	var number3Cube = document.getElementById('number_cube_3');
    number3Cube.textContent = '';
	var plus2Minus = document.getElementById('plus2_minus');
    plus2Minus.textContent = '';
	var numberCube4 = document.getElementById('number_cube_4');
    numberCube4.textContent = '';
	var topTwoCube3 = document.getElementById('top_two_cube3');
    topTwoCube3.textContent = '';
	var plus3Minus = document.getElementById('plus3_minus');
    plus3Minus.textContent = '';
	var numberCube5 = document.getElementById('number_cube_5');
    numberCube5.textContent = '';
	var topTwoCube4 = document.getElementById('top_two_cube4');
    topTwoCube4.textContent = '';
}
// Функция ввода 2
function ENTERCubeBracketFormul2(leftTEXT, rightTEXT) {
	var leftTEXTNUM = (leftTEXT + '^-^').length;
	var rightTEXTNUM = (rightTEXT + '^-^').length;
	// Менять
	var topTwoCube1 = document.getElementById('top_two_cube1');
	var topTwoCube2 = document.getElementById('top_two_cube2');
	var topTwoCube3 = document.getElementById('top_two_cube3');
	var topTwoCube4 = document.getElementById('top_two_cube4');
	//
	var plus1Minus = document.getElementById('plus1_minus');
	var plus2Minus = document.getElementById('plus2_minus');
	plus2Minus.textContent = '+';
	var plus3Minus = document.getElementById('plus3_minus');
	//
	var plusMinusEnter1 = document.getElementById('plus_minus_enter1');
	if(plusMinusEnter1.textContent == '+') {
		plus1Minus.textContent = '+';
		plus3Minus.textContent = '+';
	} else if(plusMinusEnter1.textContent == '-') {
		plus1Minus.textContent = '-';
		plus3Minus.textContent = '-';
	} 
	//
	if(leftTEXTNUM > 3) {
		topTwoCube1.textContent = '3';
		topTwoCube2.textContent = '2';
	} else {
		topTwoCube1.textContent = '';
		topTwoCube2.textContent = '';
	}
	if(rightTEXTNUM > 3) {
		topTwoCube3.textContent = '2';
		topTwoCube4.textContent = '3';
	} else {
		topTwoCube3.textContent = '';
		topTwoCube4.textContent = '';
	}
}
// Функция ввода 
function ENTERCubeBracketFormul(numLeft, textLeft, numRight, textRight) {
	// Подчёт чисел 
	var numLeftSymbol = (numLeft + '^-^').length;
	var numRightSymbol = (numRight + '^-^').length;
	// Меняющиеся числа
	var numberCube1 = document.getElementById('number_cube_1');
	var numberCube2 = document.getElementById('number_cube_2');
	var numberCube3 = document.getElementById('number_cube_3');
	var numberCube4 = document.getElementById('number_cube_4');
	var numberCube5 = document.getElementById('number_cube_5');
	if(numLeftSymbol > 3) {
		if(numRightSymbol > 3) {
			// Есть два числа 
			if(numLeft > 0) {
				if(numRight > 0) {
					if(Math.floor(numLeft) == numLeft) {
						if(Math.floor(numRight) == numRight) {
							var calculationLeft = ((3 * (numLeft * numLeft) * numRight) + '^-^').length;
							var calculationRight = ((3 * (numRight * numRight) * numLeft) + '^-^').length;
							if(calculationLeft <= 10 & calculationRight <= 10) {
								numberCube1.textContent = (numLeft * numLeft * numLeft) + textLeft;
								numberCube2.textContent = (3 * (numLeft * numLeft) * numRight) + textLeft;
								numberCube3.textContent =  textRight;
								numberCube4.textContent = (3 * (numRight * numRight) * numLeft) + textLeft + textRight;
								numberCube5.textContent = (numRight * numRight * numRight) + textRight;
								ENTERCubeBracketFormul2(textLeft, textRight);
							} else {
								numberCube1.textContent = 'Нельзя указывать большие числа';
							}
						} else {
							numberCube1.textContent = 'Нельзя указывать не целые числа';
						}
					} else {
						numberCube1.textContent = 'Нельзя указывать не целые числа';
					}
				} else {
					numberCube1.textContent = 'Нельзя указывать отрицательныe числа';
				}
			} else {
				numberCube1.textContent = 'Нельзя указывать отрицательныe числа';
			}
		}
	}
	if(numLeftSymbol == 3) {
		if(numRightSymbol == 3) {
			// Без чисел
			numberCube1.textContent = textLeft;
			numberCube2.textContent = '3' + textLeft;
			numberCube3.textContent =  textRight;
			numberCube4.textContent = '3' + textLeft + textRight;
			numberCube5.textContent = textRight;
			ENTERCubeBracketFormul2(textLeft, textRight);
		}
	}
	if(numLeftSymbol == 3) {
		if(numRightSymbol > 3) {
			// Без левого числа
			if(numRight > 0) {
				if(Math.floor(numRight) == numRight) {
					numberCube1.textContent = textLeft;
					numberCube2.textContent = (3 * numRight) + textLeft;
					numberCube3.textContent =  textRight;
					numberCube4.textContent = (3 * (numRight * numRight)) + textLeft + textRight;
					numberCube5.textContent = (numRight * numRight * numRight) + textRight;
					ENTERCubeBracketFormul2(textLeft, textRight);
				} else {
					numberCube1.textContent = 'Нельзя указывать не целые числа';
				}
			} else {
				numberCube1.textContent = 'Нельзя указывать отрицательныe числа';
			}
		}
	}
	if(numLeftSymbol > 3) {
		if(numRightSymbol == 3) {
			// Без правого числа 
			if(numLeft > 0) {
				if(Math.floor(numLeft) == numLeft) {
					numberCube1.textContent = (numLeft * numLeft * numLeft) + textLeft;
					numberCube2.textContent = (3 * (numLeft * numLeft)) + textLeft;
					numberCube3.textContent =  textRight;
					numberCube4.textContent = (3 * numLeft) + textLeft + textRight;
					numberCube5.textContent = textRight;
					ENTERCubeBracketFormul2(textLeft, textRight);
				} else {
					numberCube1.textContent = 'Нельзя указывать не целые числа';
				}
			} else {
				numberCube1.textContent = 'Нельзя указывать отрицательныe числа';
			}
		}
	}
}
//
var enterCubeBracketFormul = document.getElementById('enter_cube_bracket_formul');
enterCubeBracketFormul.onclick = function enterCubeBracketFormulFUN() {
	cleanEnterCubeBracketFormul()
	var cubeBracketFormulLeft = document.getElementById('cube_bracket_formul_left').value;
	var cubeBracketFormulRight = document.getElementById('cube_bracket_formul_right').value;
	// При ошибке
	var numberСube1 = document.getElementById('number_cube_1');
	// Левый цикл
	var separateTextLeftNUM1 = cubeBracketFormulLeft.length;
    // Создаёт массив букв и цифр
	var separateTextLeftNUMBER = [];
	var separateTextLeftLETTERS = [];
	for(var LefNum = 0; LefNum < separateTextLeftNUM1; LefNum++) {
		var separateTextLeftSymbol = cubeBracketFormulLeft[LefNum];
		var checkingSeparateTextLeftSymbol = (separateTextLeftSymbol + 1) / (separateTextLeftSymbol + 1);
		if(checkingSeparateTextLeftSymbol == 1) {
			separateTextLeftNUMBER.push(separateTextLeftSymbol);
		} else if(separateTextLeftSymbol == ',') {
			separateTextLeftNUMBER.push('.');
		} else if(separateTextLeftSymbol == '.') {
			separateTextLeftNUMBER.push('.');
		} else {
			separateTextLeftLETTERS.push(separateTextLeftSymbol);
		}
	}
	var wholeSeparateTextLeftNUMBER = parseFloat(separateTextLeftNUMBER.join(''));
	var wholeSeparateTextLeftLETTERS = separateTextLeftLETTERS.join('');
	// Правый цикл
	// Подчёт букв
	var separateTextRightNUM1 = cubeBracketFormulRight.length;
		// Создаёт массив букв и цифр
	var separateTextRightNUMBER = [];
	var separateTextRightLETTERS = [];
	for(var RigNum = 0; RigNum < separateTextRightNUM1; RigNum++) {
		var separateTextRightSymbol = cubeBracketFormulRight[RigNum];
		var checkingSeparateTextRightSymbol = (separateTextRightSymbol + 1) / (separateTextRightSymbol + 1);
		if(checkingSeparateTextRightSymbol == 1) {
			separateTextRightNUMBER.push(separateTextRightSymbol);
		} else if(separateTextRightSymbol == ',') {
			separateTextRightNUMBER.push('.');
		} else if(separateTextRightSymbol == '.') {
			separateTextRightNUMBER.push('.');
		} else {
			separateTextRightLETTERS.push(separateTextRightSymbol);
      	}
	}
	var wholeSeparateTextRightNUMBER = parseFloat(separateTextRightNUMBER.join(''));
	var wholeSeparateTextRightLETTERS = separateTextRightLETTERS.join('');
	// Если NaN
	if(isNaN(wholeSeparateTextLeftNUMBER) == true) {
		wholeSeparateTextLeftNUMBER = '';
	}
    if(isNaN(wholeSeparateTextRightNUMBER) == true) {
	wholeSeparateTextRightNUMBER = '';
    }
    // Проверка на плюс или минус
    var plusMinusEnter1 = document.getElementById('plus_minus_enter1');
    if(plusMinusEnter1.textContent == '-' | plusMinusEnter1.textContent == '+') {
    	if(separateTextLeftNUM1 > 0 & separateTextRightNUM1 > 0) {
    		ENTERCubeBracketFormul(wholeSeparateTextLeftNUMBER, wholeSeparateTextLeftLETTERS, wholeSeparateTextRightNUMBER,wholeSeparateTextRightLETTERS);
    	} else {
    		numberСube1.textContent = 'Числа не вписанны';
    	}
    } else {
    	numberСube1.textContent = 'Выберете действие';
    }
}
// Меняет плюс или минус
var plusEnter1 = document.getElementById('plus_enter1');
var minusEnter1 = document.getElementById('minus_enter1');
plusEnter1.onclick = function plusEnter1FUN() {
	var plusMinusEnter1 = document.getElementById('plus_minus_enter1');
	plusMinusEnter1.textContent = '+';
}
minusEnter1.onclick = function minusEnter1FUN() {
	var plusMinusEnter1 = document.getElementById('plus_minus_enter1');
	plusMinusEnter1.textContent = '-';
}
// Функция чистки 
function cleanSymbolFormulTwoFUN() {
	var bracketLeftRollUpForm = document.getElementById('bracket_left_rollUp_form');
    bracketLeftRollUpForm.textContent = '';
	var numberTextRollUpLeftForm = document.getElementById('number_text_rollUp_left_form');
    numberTextRollUpLeftForm.textContent = '';
	var plusMinusRollUpForm = document.getElementById('plus_minus_rollUp_form');
    plusMinusRollUpForm.textContent = '';
	var numberTextRollUpRightForm = document.getElementById('number_text_rollUp_right_form');
    numberTextRollUpRightForm.textContent = '';
	var bracketRightRollUpForm = document.getElementById('bracket_right_rollUp_form');
    bracketRightRollUpForm.textContent = '';
	var twoTopFormul = document.getElementById('two_top_formul');
    twoTopFormul.textContent = '';
}
// Функция готовых символов
function symbolFormulTwoFUN() {
	var bracketLeftRollUpForm = document.getElementById('bracket_left_rollUp_form');
	bracketLeftRollUpForm.textContent = '(';
	var plusMinusRollUpForm = document.getElementById('plus_minus_rollUp_form');
	plusMinusRollUpForm.textContent = '±';
	var bracketRightRollUpForm = document.getElementById('bracket_right_rollUp_form');
	bracketRightRollUpForm.textContent = ')';
	var twoTopFormul = document.getElementById('two_top_formul');
	twoTopFormul.textContent = '2';
}
// Функция ввода 
function formulTwoFUN(numLeft, textLeft, numRight, textRight) {
	// Подчёт чисел 
	var numLeftSymbol = (numLeft + '^-^').length;
	var numRightSymbol = (numRight + '^-^').length;
	// В сличии ошибке
	var bracketLeftRollUpForm = document.getElementById('bracket_left_rollUp_form');
	// Меняет текст
	var numberTextRollUpLeftForm = document.getElementById('number_text_rollUp_left_form');
	var numberTextRollUpRightForm = document.getElementById('number_text_rollUp_right_form');
	//
	if(numLeftSymbol > 3) {
		if(numRightSymbol > 3) {
			// Есть два числа 
			if(numLeft > 0) {
				if(numRight > 0) {
					if(Math.floor(numLeft) == numLeft) {
						if(Math.floor(numRight) == numRight) {
							// Левый цикл
							var noneZeroLeft = 0;
							for(var numL = 0; numL < numLeft; numL++) {
								var numSYMLeft = numL * numL;
								if(numLeft == numSYMLeft) {
									numLeft = numL;
									noneZeroLeft = 1;
								}
							}
			                // Правый цикл
			                var noneZeroRight = 0;
			                for(var numR = 0; numR < numRight; numR++) {
			                	var numSYMright = numR * numR;
			                	if(numRight == numSYMright) {
			                		numRight = numR;
			                		noneZeroRight = 1;
			                	}
			                }
			                if(noneZeroLeft > 0 & noneZeroRight > 0) {
			                	numberTextRollUpLeftForm.textContent = numLeft + textLeft;
								numberTextRollUpRightForm.textContent = numRight + textRight;
								symbolFormulTwoFUN()
			                } else {
			                	bracketLeftRollUpForm.textContent = 'Указанны неправильные числа';
			                }
						} else {
							bracketLeftRollUpForm.textContent = 'Нельзя указывать не целые числа';
						}
					} else {
						bracketLeftRollUpForm.textContent = 'Нельзя указывать не целые числа';
					}
				} else {
					bracketLeftRollUpForm.textContent = 'Нельзя указывать отрицательныe числа';
				}
			} else {
				bracketLeftRollUpForm.textContent = 'Нельзя указывать отрицательныe числа';
			}
		}
	}
	if(numLeftSymbol == 3) {
		if(numRightSymbol == 3) {
			// Без чисел
			numberTextRollUpLeftForm.textContent = textLeft;
			numberTextRollUpRightForm.textContent = textRight;
			symbolFormulTwoFUN()
		}
	}
	if(numLeftSymbol == 3) {
		if(numRightSymbol > 3) {
			// Без левого числа
			if(numRight > 0) {
				if(Math.floor(numRight) == numRight) {
					// Правый цикл
			        var noneZeroRight = 0;
			        for(var numR = 0; numR < numRight; numR++) {
			            var numSYMright = numR * numR;
			            if(numRight == numSYMright) {
			                numRight = numR;
			                noneZeroRight = 1;
			            }
			        }
			        if(noneZeroRight > 0) {
			          	numberTextRollUpLeftForm.textContent = textLeft;
						numberTextRollUpRightForm.textContent = numRight + textRight;
						symbolFormulTwoFUN()
			        } else {
			            bracketLeftRollUpForm.textContent = 'Указанны неправильные числа';
			        }
				} else {
					bracketLeftRollUpForm.textContent = 'Нельзя указывать не целые числа';
				}
			} else {
				bracketLeftRollUpForm.textContent = 'Нельзя указывать отрицательныe числа';
			}
		}
	}
	if(numLeftSymbol > 3) {
		if(numRightSymbol == 3) {
			// Без правого числа 
			if(numLeft > 0) {
				if(Math.floor(numLeft) == numLeft) {
					//numberTextRollUpLeftForm.textContent = numLeft + textLeft;
					//numberTextRollUpRightForm.textContent = textRight;
					//symbolFormulTwoFUN()
					// Левый цикл
					var noneZeroLeft = 0;
					for(var numL = 0; numL < numLeft; numL++) {
						var numSYMLeft = numL * numL;
						if(numLeft == numSYMLeft) {
							numLeft = numL;
							noneZeroLeft = 1;
						}
					}
					if(noneZeroLeft > 0) {
						numberTextRollUpLeftForm.textContent = numLeft + textLeft;
						numberTextRollUpRightForm.textContent = textRight;
						symbolFormulTwoFUN()
					} else {
						bracketLeftRollUpForm.textContent = 'Указанны неправильные числа';
					}
				} else {
					bracketLeftRollUpForm.textContent = 'Нельзя указывать не целые числа';
				}
			} else {
				bracketLeftRollUpForm.textContent = 'Нельзя указывать отрицательныe числа';
			}
		}
	}
}
var rollUpFormulTwo = document.getElementById('rollUp_formul_two');
rollUpFormulTwo.onclick = function rollUpFormulTwoFUN() {
	cleanSymbolFormulTwoFUN();
	var leftFormulTwo = document.getElementById('left_formul_two').value;
	var rightFormulTwo = document.getElementById('right_formul_two').value;
	// Левый цикл
	var separateTextLeftNUM1 = leftFormulTwo.length;
    // Создаёт массив букв и цифр
	var separateTextLeftNUMBER = [];
	var separateTextLeftLETTERS = [];
	for(var LefNum = 0; LefNum < separateTextLeftNUM1; LefNum++) {
		var separateTextLeftSymbol = leftFormulTwo[LefNum];
		var checkingSeparateTextLeftSymbol = (separateTextLeftSymbol + 1) / (separateTextLeftSymbol + 1);
		if(checkingSeparateTextLeftSymbol == 1) {
			separateTextLeftNUMBER.push(separateTextLeftSymbol);
		} else if(separateTextLeftSymbol == ',') {
			separateTextLeftNUMBER.push('.');
		} else if(separateTextLeftSymbol == '.') {
			separateTextLeftNUMBER.push('.');
		} else {
			separateTextLeftLETTERS.push(separateTextLeftSymbol);
		}
	}
	var wholeSeparateTextLeftNUMBER = parseFloat(separateTextLeftNUMBER.join(''));
	var wholeSeparateTextLeftLETTERS = separateTextLeftLETTERS.join('');
	// Правый цикл
	// Подчёт букв
	var separateTextRightNUM1 = rightFormulTwo.length;
		// Создаёт массив букв и цифр
	var separateTextRightNUMBER = [];
	var separateTextRightLETTERS = [];
	for(var RigNum = 0; RigNum < separateTextRightNUM1; RigNum++) {
		var separateTextRightSymbol = rightFormulTwo[RigNum];
		var checkingSeparateTextRightSymbol = (separateTextRightSymbol + 1) / (separateTextRightSymbol + 1);
		if(checkingSeparateTextRightSymbol == 1) {
			separateTextRightNUMBER.push(separateTextRightSymbol);
		} else if(separateTextRightSymbol == ',') {
			separateTextRightNUMBER.push('.');
		} else if(separateTextRightSymbol == '.') {
			separateTextRightNUMBER.push('.');
		} else {
			separateTextRightLETTERS.push(separateTextRightSymbol);
      	}
	}
	var wholeSeparateTextRightNUMBER = parseFloat(separateTextRightNUMBER.join(''));
	var wholeSeparateTextRightLETTERS = separateTextRightLETTERS.join('');
	// Если NaN
	if(isNaN(wholeSeparateTextLeftNUMBER) == true) {
		wholeSeparateTextLeftNUMBER = '';
	}
    if(isNaN(wholeSeparateTextRightNUMBER) == true) {
	wholeSeparateTextRightNUMBER = '';
    }	
    // В случии ошибке	
    var bracketLeftRollUpForm = document.getElementById('bracket_left_rollUp_form');
    // Проверка на ввод
    if(separateTextLeftNUM1 > 0) {
    	if(separateTextRightNUM1 > 0) {
    		formulTwoFUN(wholeSeparateTextLeftNUMBER, wholeSeparateTextLeftLETTERS, wholeSeparateTextRightNUMBER, wholeSeparateTextRightLETTERS);
    	} else {
    		bracketLeftRollUpForm.textContent = 'Числа не вписанны';
    	}
    } else {
    	bracketLeftRollUpForm.textContent = 'Числа не вписанны';
    }
}
// Функция чтобы обновлять
function changeNumberTwofun(leftNUM, leftTEXT, rightNUM, rightTEXT) {
	// Подчёт цифр
	var numLeftSymbol = (leftNUM + '^-^').length;
	var numRightSymbol = (rightNUM + '^-^').length;
	// 
	var changeNumberTwo = document.getElementById('change_number_two');
	//
	if(numLeftSymbol > 3) {
		if(numRightSymbol > 3) {
			// Есть два числа
			// Левый цикл
			var noneZeroLeft = 0;
			for(var numL = 0; numL < leftNUM; numL++) {
				var numSYMLeft = numL * numL;
				if(leftNUM == numSYMLeft) {
					leftNUM = numL;
					noneZeroLeft = 1;
				}
			}
			// Правый цикл
			var noneZeroRight = 0;
			for(var numR = 0; numR < rightNUM; numR++) {
				var numSYMright = numR * numR;
				if(rightNUM == numSYMright) {
					rightNUM = numR;
					noneZeroRight = 1;
				}
			}
			if(noneZeroLeft > 0 & noneZeroRight > 0) {
				changeNumberTwo.textContent = (2 * (leftNUM * rightNUM)) + leftTEXT + rightTEXT;
			} else {
				changeNumberTwo.textContent = '??';
			}
		}
	}
	if(numLeftSymbol == 3) {
		if(numRightSymbol == 3) {
			// Без чисел
			changeNumberTwo.textContent = '2' + leftTEXT + rightTEXT;
		}
	}
	if(numLeftSymbol == 3) {
		if(numRightSymbol > 3) {
			// Без левого числа
			// Правый цикл
			var noneZeroRight = 0;
			for(var numR = 0; numR < rightNUM; numR++) {
				var numSYMright = numR * numR;
				if(rightNUM == numSYMright) {
					rightNUM = numR;
					noneZeroRight = 1;
				}
			}
			if(noneZeroRight > 0) {
				changeNumberTwo.textContent = (2 * rightNUM) + leftTEXT + rightTEXT;
			} else {
				changeNumberTwo.textContent = '??';
			}
		}
	}
	if(numLeftSymbol > 3) {
		if(numRightSymbol == 3) {
			// Без правого числа 
			// Левый цикл
			var noneZeroLeft = 0;
			for(var numL = 0; numL < leftNUM; numL++) {
				var numSYMLeft = numL * numL;
				if(leftNUM == numSYMLeft) {
					leftNUM = numL;
					noneZeroLeft = 1;
				}
			}
			if(noneZeroLeft > 0) {
				changeNumberTwo.textContent = (2 * leftNUM) + leftTEXT + rightTEXT;
			} else {
				changeNumberTwo.textContent = '??';
			}
		}
	}
}
// Функция обновления 
function changeNumberTwoFUN() {
	// Что будет меняться
	var changeNumberTwo = document.getElementById('change_number_two');
	// Input
	var leftFormulTwo = document.getElementById('left_formul_two').value;
	var rightFormulTwo = document.getElementById('right_formul_two').value;
	// Левый цикл
	var separateTextLeftNUM1 = leftFormulTwo.length;
    // Создаёт массив букв и цифр
	var separateTextLeftNUMBER = [];
	var separateTextLeftLETTERS = [];
	for(var LefNum = 0; LefNum < separateTextLeftNUM1; LefNum++) {
		var separateTextLeftSymbol = leftFormulTwo[LefNum];
		var checkingSeparateTextLeftSymbol = (separateTextLeftSymbol + 1) / (separateTextLeftSymbol + 1);
		if(checkingSeparateTextLeftSymbol == 1) {
			separateTextLeftNUMBER.push(separateTextLeftSymbol);
		} else if(separateTextLeftSymbol == ',') {
			separateTextLeftNUMBER.push('.');
		} else if(separateTextLeftSymbol == '.') {
			separateTextLeftNUMBER.push('.');
		} else {
			separateTextLeftLETTERS.push(separateTextLeftSymbol);
		}
	}
	var wholeSeparateTextLeftNUMBER = parseFloat(separateTextLeftNUMBER.join(''));
	var wholeSeparateTextLeftLETTERS = separateTextLeftLETTERS.join('');
	// Правый цикл
	// Подчёт букв
	var separateTextRightNUM1 = rightFormulTwo.length;
		// Создаёт массив букв и цифр
	var separateTextRightNUMBER = [];
	var separateTextRightLETTERS = [];
	for(var RigNum = 0; RigNum < separateTextRightNUM1; RigNum++) {
		var separateTextRightSymbol = rightFormulTwo[RigNum];
		var checkingSeparateTextRightSymbol = (separateTextRightSymbol + 1) / (separateTextRightSymbol + 1);
		if(checkingSeparateTextRightSymbol == 1) {
			separateTextRightNUMBER.push(separateTextRightSymbol);
		} else if(separateTextRightSymbol == ',') {
			separateTextRightNUMBER.push('.');
		} else if(separateTextRightSymbol == '.') {
			separateTextRightNUMBER.push('.');
		} else {
			separateTextRightLETTERS.push(separateTextRightSymbol);
        		}
	}
	var wholeSeparateTextRightNUMBER = parseFloat(separateTextRightNUMBER.join(''));
	var wholeSeparateTextRightLETTERS = separateTextRightLETTERS.join('');
	// Если NaN
	if(isNaN(wholeSeparateTextLeftNUMBER) == true) {
		wholeSeparateTextLeftNUMBER = '';
	}
	if(isNaN(wholeSeparateTextRightNUMBER) == true) {
		wholeSeparateTextRightNUMBER = '';
	}
	// Проверка на ввод
	var changeNumberTwo = document.getElementById('change_number_two');
	changeNumberTwo.textContent = '??';
	if(separateTextLeftNUM1 > 0) {
		if(separateTextRightNUM1 > 0) {
			changeNumberTwofun(wholeSeparateTextLeftNUMBER, wholeSeparateTextLeftLETTERS, wholeSeparateTextRightNUMBER, wholeSeparateTextRightLETTERS)
		}
	}
}
// Кнопки 
var deployTwoFormul = document.getElementById('deploy_two_formul');
var rollUpTwoFormul = document.getElementById('rollUp_two_formul');
deployTwoFormul.onclick = function deployTwoFormulFUN() {
	var collapseTwoID = document.getElementById('collapse_two_ID');
	var rollUpTwoFormulID = document.getElementById('roll_up_two_formulID');
	collapseTwoID.style.display = 'block';
	rollUpTwoFormulID.style.display = 'none';
}
rollUpTwoFormul.onclick = function rollUpTwoFormulFUN() {
	var collapseTwoID = document.getElementById('collapse_two_ID');
	var rollUpTwoFormulID = document.getElementById('roll_up_two_formulID');
	collapseTwoID.style.display = 'none';
	rollUpTwoFormulID.style.display = 'block';
	setInterval(changeNumberTwoFUN, 500);
}
// Функция котора чистит
function cleanBracketsTwoFormul() {
	var leftNumBrecket = document.getElementById('left_num_brecket');
	leftNumBrecket.textContent = '';
	var leftTwoFormul = document.getElementById('left_two_formul');
	leftTwoFormul.textContent = '';
	var minusPlusTwo = document.getElementById('minus_plus_two');
	minusPlusTwo.textContent = '';
	var centerTwoFormul = document.getElementById('center_two_formul');
	centerTwoFormul.textContent = '';
	var plusTwoFormul = document.getElementById('plus_two_formul');
	plusTwoFormul.textContent = '';
	var rightTwoFormul = document.getElementById('right_two_formul');
	rightTwoFormul.textContent = '';
	var rightNumBrecket = document.getElementById('right_num_brecket');
	rightNumBrecket.textContent = '';
	var twoFormulLeft = document.getElementById('two_formul_left');
	twoFormulLeft.textContent = '';
	var twoFormulRight = document.getElementById('two_formul_right');
	twoFormulRight.textContent = '';
}
// Функция не изменяемых тегов
function doNotChangeFUN(leftTEXT, rightTEXT) {
	var leftNumBrecket = document.getElementById('left_num_brecket');
	leftNumBrecket.textContent = '(';
	var minusPlusTwo = document.getElementById('minus_plus_two');
	minusPlusTwo.textContent = '±';
	var plusTwoFormul = document.getElementById('plus_two_formul');
	plusTwoFormul.textContent = '+';
	var rightNumBrecket = document.getElementById('right_num_brecket');
	rightNumBrecket.textContent = ')';
	// Проверка на квадрат с помощбю подсчёта чисел
	var twoFormulLeft = document.getElementById('two_formul_left');
	var twoFormulRight = document.getElementById('two_formul_right');
	//
	var twoFormulLeftNUM = (leftTEXT + '^-^').length;
	var twoFormulRightNUM = (rightTEXT + '^-^').length;
	if(twoFormulLeftNUM > 3) {
		twoFormulLeft.textContent = '2';
	} else {
		twoFormulLeft.textContent = '';
	}
	if(twoFormulRightNUM > 3) {
		twoFormulRight.textContent = '2';
	} else {
		twoFormulRight.textContent = '';
	}

}
// Функция ввода 
function bracketsTwoFUN(numLeft, textLeft, numRight, textRight) {
	// Подчёт чисел 
	var numLeftSymbol = (numLeft + '^-^').length;
	var numRightSymbol = (numRight + '^-^').length;
	// При ошибке
	var leftNumBrecket = document.getElementById('left_num_brecket');
	// Ввод
	var leftTwoFormul = document.getElementById('left_two_formul');
	var centerTwoFormul = document.getElementById('center_two_formul');
	var rightTwoFormul = document.getElementById('right_two_formul');
	//
	if(numLeftSymbol > 3) {
		if(numRightSymbol > 3) {
			// Есть два числа 
			if(numLeft > 0) {
				if(numRight > 0) {
					if(Math.floor(numLeft) == numLeft) {
						if(Math.floor(numRight) == numRight) {
							leftTwoFormul.textContent = (numLeft * numLeft) + textLeft;
							centerTwoFormul.textContent = (2 * numLeft * numRight) + textLeft + textRight;
							rightTwoFormul.textContent = (numRight * numRight) + textRight;
							doNotChangeFUN(textLeft, textRight);
						} else {
							leftNumBrecket.textContent = 'Нельзя указывать не целые числа';
						}
					} else {
						leftNumBrecket.textContent = 'Нельзя указывать не целые числа';
					}
				} else {
					leftNumBrecket.textContent = 'Нельзя указывать отрицательныe числа';
				}
			} else {
				leftNumBrecket.textContent = 'Нельзя указывать отрицательныe числа';
			}
		}
	}
	if(numLeftSymbol == 3) {
		if(numRightSymbol == 3) {
			// Без чисел
			leftTwoFormul.textContent = textLeft;
			centerTwoFormul.textContent = '2' + textLeft + textRight;
			rightTwoFormul.textContent = textRight;
			doNotChangeFUN(textLeft, textRight);
		}
	}
	if(numLeftSymbol == 3) {
		if(numRightSymbol > 3) {
			// Без левого числа
			if(numRight > 0) {
				if(Math.floor(numRight) == numRight) {
					leftTwoFormul.textContent = textLeft;
					centerTwoFormul.textContent = (2 * numRight) + textLeft + textRight;
					rightTwoFormul.textContent = (numRight * numRight) + textRight;
					doNotChangeFUN(textLeft, textRight);
				} else {
					leftNumBrecket.textContent = 'Нельзя указывать не целые числа';
				}
			} else {
				leftNumBrecket.textContent = 'Нельзя указывать отрицательныe числа';
			}
		}
	}
	if(numLeftSymbol > 3) {
		if(numRightSymbol == 3) {
			// Без правого числа 
			if(numLeft > 0) {
				if(Math.floor(numLeft) == numLeft) {
					leftTwoFormul.textContent = (numLeft * numLeft)+ textLeft;
					centerTwoFormul.textContent = (2 * numLeft) + textLeft + textRight;
					rightTwoFormul.textContent = textRight;
					doNotChangeFUN(textLeft, textRight);
				} else {
					leftNumBrecket.textContent = 'Нельзя указывать не целые числа';
				}
			} else {
				leftNumBrecket.textContent = 'Нельзя указывать отрицательныe числа';
			}
		}
	}
	
}
var bracketsTwoFormul = document.getElementById('brackets_two_formul');
bracketsTwoFormul.onclick = function bracketsTwoFormulFUN() {
	cleanBracketsTwoFormul()
	var twoFormulLeft = document.getElementById('brackets_two_formul_left').value;
	var twoFormulright = document.getElementById('brackets_two_formul_right').value;
	// При ошибке
	var leftNumBrecket = document.getElementById('left_num_brecket');
	// Проверка с помощью подчёта чисел
	var twoFormulLeftNUM = (twoFormulLeft + '^-^').length;
	var twoFormulrightNUM = (twoFormulright + '^-^').length;
	if(twoFormulLeftNUM > 3) {
		if(twoFormulrightNUM > 3) {
			var separateTextLeftNUM1 = twoFormulLeft.length;
        	// Создаёт массив букв и цифр
        	var separateTextLeftNUMBER = [];
        	var separateTextLeftLETTERS = [];
        	for(var LefNum = 0; LefNum < separateTextLeftNUM1; LefNum++) {
        		var separateTextLeftSymbol = twoFormulLeft[LefNum];
        		var checkingSeparateTextLeftSymbol = (separateTextLeftSymbol + 1) / (separateTextLeftSymbol + 1);
        		if(checkingSeparateTextLeftSymbol == 1) {
        			separateTextLeftNUMBER.push(separateTextLeftSymbol);
        		} else if(separateTextLeftSymbol == ',') {
        			separateTextLeftNUMBER.push('.');
        		} else if(separateTextLeftSymbol == '.') {
        			separateTextLeftNUMBER.push('.');
        		} else {
        			separateTextLeftLETTERS.push(separateTextLeftSymbol);
        		}
        	}
        	var wholeSeparateTextLeftNUMBER = parseFloat(separateTextLeftNUMBER.join(''));
        	var wholeSeparateTextLeftLETTERS = separateTextLeftLETTERS.join('');
        	// Правый цикл
        	// Подчёт букв
        	var separateTextRightNUM1 = twoFormulright.length;
    		// Создаёт массив букв и цифр
        	var separateTextRightNUMBER = [];
        	var separateTextRightLETTERS = [];
        	for(var RigNum = 0; RigNum < separateTextRightNUM1; RigNum++) {
        		var separateTextRightSymbol = twoFormulright[RigNum];
        		var checkingSeparateTextRightSymbol = (separateTextRightSymbol + 1) / (separateTextRightSymbol + 1);
        		if(checkingSeparateTextRightSymbol == 1) {
        			separateTextRightNUMBER.push(separateTextRightSymbol);
        		} else if(separateTextRightSymbol == ',') {
        			separateTextRightNUMBER.push('.');
        		} else if(separateTextRightSymbol == '.') {
        			separateTextRightNUMBER.push('.');
        		} else {
        			separateTextRightLETTERS.push(separateTextRightSymbol);
        		}
        	}
        	var wholeSeparateTextRightNUMBER = parseFloat(separateTextRightNUMBER.join(''));
        	var wholeSeparateTextRightLETTERS = separateTextRightLETTERS.join('');
        	// Если NaN
        	if(isNaN(wholeSeparateTextLeftNUMBER) == true) {
        		wholeSeparateTextLeftNUMBER = '';
        	}
        	if(isNaN(wholeSeparateTextRightNUMBER) == true) {
        		wholeSeparateTextRightNUMBER = '';
        	}
        	bracketsTwoFUN(wholeSeparateTextLeftNUMBER, wholeSeparateTextLeftLETTERS, wholeSeparateTextRightNUMBER, wholeSeparateTextRightLETTERS)
		} else {
			leftNumBrecket.textContent = 'Числа не вписанны';
		}
	} else {
		leftNumBrecket.textContent = 'Числа не вписанны';
	}
}
// Чистит
function cleansCubeRollUpFUN() {
	var bracketLeft3 = document.getElementById('bracket_left3');
	bracketLeft3.textContent = '';
	var numberLeft3 = document.getElementById('number_left_3');
		numberLeft3.textContent = '';
	var supLeft = document.getElementById('sup_left');
	supLeft.textContent = '';
	var minusEndPlus3 = document.getElementById('minus_end_plus_3');
	minusEndPlus3.textContent = '';
	var numberRight3 = document.getElementById('number_right_3');
	numberRight3.textContent = '';
	var supRight = document.getElementById('sup_right');
	supRight.textContent = '';
	var bracketRight3 = document.getElementById('bracket_right3');
	bracketRight3.textContent = '';
}
// Функция с неизменяемыми тегами
function NotChange() {
	var bracketLeft3 = document.getElementById('bracket_left3');
	bracketLeft3.textContent = '(';
	var bracketRight3 = document.getElementById('bracket_right3');
	bracketRight3.textContent = ')';
	var supLeft = document.getElementById('sup_left');
	supLeft.textContent = '3';
	var supRight = document.getElementById('sup_right');
	supRight.textContent = '3';
}
// Функция упрощённого ввода
function SimplifiedInputFunction(leftNUM, leftTEXT, rightNUM, rightTEXT) {
	// Проверка с помощью подсчёта числе
	var leftNUMBER = (leftNUM + '^-^').length;
	var rightNUMBER = (rightNUM + '^-^').length;
	// Меняющийся текст
	var numberLeft3 = document.getElementById('number_left_3');
	var numberRight3 = document.getElementById('number_right_3');
	// В случии чего описать сюда
	var bracketLeft3 = document.getElementById('bracket_left3');
	//
	if(leftNUMBER > 3) {
		if(rightNUMBER > 3) {
			// Если есть оба числа 
			// Проверка 
			if(leftNUM > 0) {
				if(rightNUM > 0) {
					if(Math.floor(leftNUM) == leftNUM) {
						if(Math.floor(rightNUM) == rightNUM) {
							numberLeft3.textContent = (leftNUM * leftNUM * leftNUM) + leftTEXT;
							numberRight3.textContent = (rightNUM * rightNUM * rightNUM) + rightTEXT;
							NotChange();
						} else {
							cleansCubeRollUpFUN();
							bracketLeft3.textContent = 'Нельзя указывать не целые числа';
						}
					} else {
						cleansCubeRollUpFUN();
						bracketLeft3.textContent = 'Нельзя указывать не целые числа';
					}
				} else {
					cleansCubeRollUpFUN();
					bracketLeft3.textContent = 'Нельзя указывать отрицательные числа';
				}
			} else {
				cleansCubeRollUpFUN();
				bracketLeft3.textContent = 'Нельзя указывать отрицательные числа';
			}
		}
	}
	if(leftNUMBER == 3) {
		if(rightNUMBER == 3) {
			// Если нету обоих чисел
			numberLeft3.textContent = leftTEXT;
			numberRight3.textContent = rightTEXT;
			NotChange();
		}
	}
	if(leftNUMBER > 3) {
		if(rightNUMBER == 3) {
			// Если нету правого числа
			// Проверка 
			if(leftNUMBER > 3) {
				if(Math.floor(leftNUM) == leftNUM) {
					numberLeft3.textContent = (leftNUM * leftNUM * leftNUM) + leftTEXT;
					numberRight3.textContent = rightTEXT;
					NotChange();
				} else {
					cleansCubeRollUpFUN();
					bracketLeft3.textContent = 'Нельзя указывать не целые числа';
				}
			} else {
				cleansCubeRollUpFUN();
				bracketLeft3.textContent = 'Нельзя указывать отрицательные числа';
			}
		}
	}
	if(leftNUMBER == 3) {
		if(rightNUMBER > 3) {
			// Если нету левого числа
			if(rightNUM > 0) {
				if(Math.floor(rightNUM) == rightNUM) {
					numberLeft3.textContent = leftTEXT;
					numberRight3.textContent = (rightNUM * rightNUM * rightNUM) + rightTEXT;
					NotChange();
				} else {
					cleansCubeRollUpFUN();
					bracketLeft3.textContent = 'Нельзя указывать не целые числа';
				}
			} else {
				cleansCubeRollUpFUN();
				bracketLeft3.textContent = 'Нельзя указывать отрицательные числа';
			}
		}
	}
}
// Клик для (свернуть в кубе)
var cubeRollUp = document.getElementById('cube_roll_up');
cubeRollUp.onclick = function cubeRollUpFUN() {
	cleansCubeRollUpFUN();
	var separateTextLeft = document.getElementById('separate_text_left').value;
	var separateTextRight = document.getElementById('separate_text_right').value;
	// При неправильнов вводе писать сюда
	var bracketLeft3 = document.getElementById('bracket_left3');
	// Проверка с помощью подчёта чисел
	var separateTextLeftNUM = (separateTextLeft + '^-^').length;
	var separateTextRightNUM = (separateTextRight + '^-^').length;
	if(separateTextLeftNUM > 3) {
		if(separateTextRightNUM > 3) {
	        // Левый цикл
        	// Подчет букв
        	var separateTextLeftNUM1 = separateTextLeft.length;
        	// Создаёт массив букв и цифр
        	var separateTextLeftNUMBER = [];
        	var separateTextLeftLETTERS = [];
        	for(var LefNum = 0; LefNum < separateTextLeftNUM1; LefNum++) {
        		var separateTextLeftSymbol = separateTextLeft[LefNum];
        		var checkingSeparateTextLeftSymbol = (separateTextLeftSymbol + 1) / (separateTextLeftSymbol + 1);
        		if(checkingSeparateTextLeftSymbol == 1) {
        			separateTextLeftNUMBER.push(separateTextLeftSymbol);
        		} else if(separateTextLeftSymbol == ',') {
        			separateTextLeftNUMBER.push('.');
        		} else if(separateTextLeftSymbol == '.') {
        			separateTextLeftNUMBER.push('.');
        		} else {
        			separateTextLeftLETTERS.push(separateTextLeftSymbol);
        		}
        	}
        	var wholeSeparateTextLeftNUMBER = parseFloat(separateTextLeftNUMBER.join(''));
        	var wholeSeparateTextLeftLETTERS = separateTextLeftLETTERS.join('');
        	// Правый цикл
        	// Подчёт букв
        	var separateTextRightNUM1 = separateTextRight.length;
    		// Создаёт массив букв и цифр
        	var separateTextRightNUMBER = [];
        	var separateTextRightLETTERS = [];
        	for(var RigNum = 0; RigNum < separateTextRightNUM1; RigNum++) {
        		var separateTextRightSymbol = separateTextRight[RigNum];
        		var checkingSeparateTextRightSymbol = (separateTextRightSymbol + 1) / (separateTextRightSymbol + 1);
        		if(checkingSeparateTextRightSymbol == 1) {
        			separateTextRightNUMBER.push(separateTextRightSymbol);
        		} else if(separateTextRightSymbol == ',') {
        			separateTextRightNUMBER.push('.');
        		} else if(separateTextRightSymbol == '.') {
        			separateTextRightNUMBER.push('.');
        		} else {
        			separateTextRightLETTERS.push(separateTextRightSymbol);
        		}
        	}
        	var wholeSeparateTextRightNUMBER = parseFloat(separateTextRightNUMBER.join(''));
        	var wholeSeparateTextRightLETTERS = separateTextRightLETTERS.join('');
        	// Если NaN
        	if(isNaN(wholeSeparateTextLeftNUMBER) == true) {
        		wholeSeparateTextLeftNUMBER = '';
        	}
        	if(isNaN(wholeSeparateTextRightNUMBER) == true) {
        		wholeSeparateTextRightNUMBER = '';
        	}
	        // Функция упращённого ввода
	        // Проверяет на плюс 
			var plusMinusEnter = document.getElementById('plus_minus_enter');
			var minusEndPlus3 = document.getElementById('minus_end_plus_3');
			if(plusMinusEnter.textContent == '?') {
				bracketLeft3.textContent = 'Выберете действие';
			} else if(plusMinusEnter.textContent == '+') {
				minusEndPlus3.textContent = '+';
				SimplifiedInputFunction(wholeSeparateTextLeftNUMBER, wholeSeparateTextLeftLETTERS, wholeSeparateTextRightNUMBER, separateTextRightLETTERS);
			} else if(plusMinusEnter.textContent == '-') {
				minusEndPlus3.textContent = '-';
				SimplifiedInputFunction(wholeSeparateTextLeftNUMBER, wholeSeparateTextLeftLETTERS, wholeSeparateTextRightNUMBER, wholeSeparateTextRightLETTERS);
			}
	    } else {
	    	bracketLeft3.textContent = 'Числа не вписанны';
	    }
	} else {
		bracketLeft3.textContent = 'Числа не вписанны';
	}
}
// Функция вопроссов
function questionsFUN() {
	var leftNumberText = document.getElementById('left_number_text');
	leftNumberText.textContent = '?'
	var centerNumberText = document.getElementById('center_number_text');
	centerNumberText.textContent = '??';
	var rightNumberText = document.getElementById('right_number_text');
	rightNumberText.textContent = '?';
}
// Функция ввода
function updatEEnter(leftNUM, leftTEXT, rightNUM, rightTEXT) {
	// Меняющийся текст
	var leftNumberText = document.getElementById('left_number_text');
	var centerNumberText = document.getElementById('center_number_text');
	var rightNumberText = document.getElementById('right_number_text');
	// Проверка с помощью подсчёта символов
	var leftNUMSymbol = (leftNUM + '^-^').length;
	var rightNUMSymbol = (rightNUM + '^-^').length;
	//
	if(leftNUMSymbol > 3) {
		if(rightNUMSymbol > 3) {
			// Если есть оба числа
			if(((leftNUM * rightNUM) + '^-^').length <= 8) {
				leftNumberText.textContent = (leftNUM * leftNUM) + leftTEXT;
				centerNumberText.textContent = (leftNUM * rightNUM) + leftTEXT + rightTEXT;
				rightNumberText.textContent = (rightNUM * rightNUM) + rightTEXT;
			} else {
				leftNumberText.textContent = '?';
				centerNumberText.textContent = '??';
				rightNumberText.textContent = '?';
			}
		}
	}
	//
	if(leftNUMSymbol == 3) {
		if(rightNUMSymbol == 3) {
			// Без чисел
			leftNumberText.textContent = leftTEXT;
			centerNumberText.textContent = leftTEXT + rightTEXT;
			rightNumberText.textContent = rightTEXT;
		}
	}
	//
	if(leftNUMSymbol > 3) {
		if(rightNUMSymbol == 3) {
			// Без правого числа
			leftNumberText.textContent = (leftNUM * leftNUM) + leftTEXT;
			centerNumberText.textContent = leftNUM + leftTEXT + rightTEXT;
			rightNumberText.textContent = rightTEXT;
		}
	}
	if(leftNUMSymbol == 3) {
		if(rightNUMSymbol > 3) {
			// Без левого числа
			leftNumberText.textContent = leftTEXT;
			centerNumberText.textContent = rightNUM + leftTEXT + rightTEXT;
			rightNumberText.textContent = (rightNUM * rightNUM) + rightTEXT;
		}
	}
	// Меняет квадраты
	var insertleft = document.getElementById('insert_left');
	var insertRight = document.getElementById('insert_right');
	// Проверяет вставлять ли квадраты
	var leftTEXTnum = leftTEXT.length;
	var rightTEXTnum = rightTEXT.length;
	if(leftTEXTnum > 0) {
		insertleft.textContent = '2';
	} else {
		insertleft.textContent = '';
	}
	if(rightTEXTnum > 0) {
		insertRight.textContent = '2';
	} else {
		insertRight.textContent = '';
	}
}
// Функция обновления
function update() {
	// Отделить числа от букв
	var separateTextLeft = document.getElementById('separate_text_left').value;
	var separateTextRight = document.getElementById('separate_text_right').value;
	// Левый цикл
	// Подчет букв
	var separateTextLeftNUM = separateTextLeft.length;
	// Создаёт массив букв и цифр
	var separateTextLeftNUMBER = [];
	var separateTextLeftLETTERS = [];
	for(var LefNum = 0; LefNum < separateTextLeftNUM; LefNum++) {
		var separateTextLeftSymbol = separateTextLeft[LefNum];
		var checkingSeparateTextLeftSymbol = (separateTextLeftSymbol + 1) / (separateTextLeftSymbol + 1);
		if(checkingSeparateTextLeftSymbol == 1) {
			separateTextLeftNUMBER.push(separateTextLeftSymbol);
		} else if(separateTextLeftSymbol == ',') {
			separateTextLeftNUMBER.push('.');
		} else if(separateTextLeftSymbol == '.') {
			separateTextLeftNUMBER.push('.');
		} else {
			separateTextLeftLETTERS.push(separateTextLeftSymbol);
		}
	}
	var wholeSeparateTextLeftNUMBER = parseFloat(separateTextLeftNUMBER.join(''));
	var wholeSeparateTextLeftLETTERS = separateTextLeftLETTERS.join('');
	// Правый цикл
	// Подчёт букв
	var separateTextRightNUM = separateTextRight.length;
	// Создаёт массив букв и цифр
	var separateTextRightNUMBER = [];
	var separateTextRightLETTERS = [];
	for(var RigNum = 0; RigNum < separateTextRightNUM; RigNum++) {
		var separateTextRightSymbol = separateTextRight[RigNum];
		var checkingSeparateTextRightSymbol = (separateTextRightSymbol + 1) / (separateTextRightSymbol + 1);
		if(checkingSeparateTextRightSymbol == 1) {
			separateTextRightNUMBER.push(separateTextRightSymbol);
		} else if(separateTextRightSymbol == ',') {
			separateTextRightNUMBER.push('.');
		} else if(separateTextRightSymbol == '.') {
			separateTextRightNUMBER.push('.');
		} else {
			separateTextRightLETTERS.push(separateTextRightSymbol);
		}
	}
	var wholeSeparateTextRightNUMBER = parseFloat(separateTextRightNUMBER.join(''));
	var wholeSeparateTextRightLETTERS = separateTextRightLETTERS.join('');
	// Если NaN
	if(isNaN(wholeSeparateTextLeftNUMBER) == true) {
		wholeSeparateTextLeftNUMBER = '';
	}
	if(isNaN(wholeSeparateTextRightNUMBER) == true) {
		wholeSeparateTextRightNUMBER = '';
	}
	if(separateTextLeftNUM > 0) {
		if(separateTextRightNUM > 0) {
			updatEEnter(wholeSeparateTextLeftNUMBER, wholeSeparateTextLeftLETTERS, wholeSeparateTextRightNUMBER, wholeSeparateTextRightLETTERS)
		} else {
			questionsFUN();
		}
	} else {
		questionsFUN();
	}
	// Обновляет плюс минус
	var plusMinusEnter = document.getElementById('plus_minus_enter');
	var updatePlusMinus = document.getElementById('update_plus_minus');
	if(plusMinusEnter.textContent == '+') {
		updatePlusMinus.textContent = '-';
	} else if(plusMinusEnter.textContent == '-') {
		updatePlusMinus.textContent = '+';
	} else {
		updatePlusMinus.textContent = '±';
	}
}
// Кнопка плюс и минус 
var plusEnter = document.getElementById('plus_enter');
var minusEnter = document.getElementById('minus_enter');
var plusMinusEnter = document.getElementById('plus_minus_enter');
plusEnter.onclick = function plusEnterFUN() {
	plusMinusEnter.textContent = '+';
}
minusEnter.onclick = function minusEnterFUN() {
	plusMinusEnter.textContent = '-';
}
// Кнопки
var plusOrMinus1 = document.getElementById('plus_or_minus1');
var plusOrMinus2 = document.getElementById('plus_or_minus2');
plusOrMinus1.onclick = function plusOrMinus1OPEN() {
	var plusOrMinusID = document.getElementById('plus_or_minusID');
	plusOrMinusID.style.display = 'block';
	var rollUpPlusOrMinusID = document.getElementById('roll_up_plus_or_minusID');
	rollUpPlusOrMinusID.style.display = 'none';
}
plusOrMinus2.onclick = function plusOrMinus2OPEN() {
	var plusOrMinusID = document.getElementById('plus_or_minusID');
	plusOrMinusID.style.display = 'none';
	var rollUpPlusOrMinusID = document.getElementById('roll_up_plus_or_minusID');
	rollUpPlusOrMinusID.style.display = 'block';
	setInterval(update, 500);
}
//Функция котора чистит 
function CleanUP() {
	var bracketLeftShort = document.getElementById('bracket_left_short');
	bracketLeftShort.textContent = '';
	var bracketRightShort = document.getElementById('bracket_right_short');
    bracketRightShort.textContent = '';
	var bracketLeft = document.getElementById('bracket_left');
    bracketLeft.textContent = '';
	var bracketRight = document.getElementById('bracket_right');
    bracketRight.textContent = '';
	var formulaPlus = document.getElementById('formula_plus');
    formulaPlus.textContent = '';
	var leftNum1 = document.getElementById('left_num1');
    leftNum1.textContent = '';
	var rightNum1 = document.getElementById('right_num1');
    rightNum1.textContent = '';
	var leftNum2 = document.getElementById('left_num_2');
    leftNum2.textContent = '';
	var centerNum2 = document.getElementById('center_num_2');
    centerNum2.textContent = '';
	var rightNum2 = document.getElementById('right_num_2');
    rightNum2.textContent = '';
	var minusPlus1 = document.getElementById('minus_plus1');
    minusPlus1.textContent = '';
	var minusPlus2 = document.getElementById('minus_plus2');
    minusPlus2.textContent = '';
	var supText1 = document.getElementById('sup_text_1');
    supText1.textContent = '';
	var supText2 = document.getElementById('sup_text_2');
    supText2.textContent = '';
}
// Функции
function textENDnumber(numLeft, textLeft, numRight, textRight, num) {
	// При ошибке
	var bracketLeftShort = document.getElementById('bracket_left_short');
	//
	if(num == 1) {
		// Без чисел
		introduction(1, numLeft, textLeft, numRight, textRight);
	} else if(num == 2) {
		// С числами
		if(numLeft > 0) {
			if(numRight > 0) {
				if(Math.floor(numLeft) == numLeft) {
					if(Math.floor(numRight) == numRight) {
						// Выбор минимального числа
						// Левого
						var NUMleftMIN1 = 0;
						for(var Lnum = 0; Lnum <= numLeft; Lnum++) {
							var NUMleftCUBE = Lnum * Lnum * Lnum;
							if(NUMleftCUBE == numLeft) {
								NUMleftMIN1 = Lnum;
							} 
						}
						// Правый
						var NUMrightMIN1 = 0;
						for(var Rnum = 0; Rnum <= numRight; Rnum++) {
							var NUMrightCUBE = Rnum * Rnum * Rnum;
							if(NUMrightCUBE == numRight) {
								NUMrightMIN1 = Rnum;
							}
						}
						if(NUMleftMIN1 > 0) {
							if(NUMrightMIN1 > 0) {
								// Ответ (С числами)
								introduction(2, NUMleftMIN1, textLeft, NUMrightMIN1, textRight)
							} else {
								bracketLeftShort.textContent = 'Указанны неправильные числа';
							}
						} else {
							bracketLeftShort.textContent = 'Указанны неправильные числа';
						}
					} else {
						bracketLeftShort.textContent = 'Нельзя указывать не целые числа';
					}
				} else {
					bracketLeftShort.textContent = 'Нельзя указывать не целые числа';
				}
			} else {
				bracketLeftShort.textContent = 'Нельзя указывать отрицательны числа';
			}
		} else {
			bracketLeftShort.textContent = 'Нельзя указывать отрицательны числа';
		}
	} else if(num == 3) {
		// Без левого числа
		if(numRight > 0) {
			if(Math.floor(numRight) == numRight) {
				var NUMrightMIN2 = 0;
				for(var Rnum = 0; Rnum <= numRight; Rnum++) {
					var NUMrightCUBE = Rnum * Rnum * Rnum;
					if(NUMrightCUBE == numRight) {
						NUMrightMIN2 = Rnum;
					}
				}
				if(NUMrightMIN2 > 0) {
					// Ответ (Без левого числа)
					introduction(3, numLeft, textLeft, NUMrightMIN2, textRight)
				} else {
					bracketLeftShort.textContent = 'Указанны неправильные числа';
				}
			} else {
				bracketLeftShort.textContent = 'Нельзя указывать не целые числа';
			}
		} else {
			bracketLeftShort.textContent = 'Нельзя указывать отрицательны числа';
		}
	} else if(num == 4) {
		// Без правого числа
		if(numLeft > 0) {
			if(Math.floor(numLeft) == numLeft) {
				var NUMleftMIN3 = 0;
				for(var Lnum = 0; Lnum <= numLeft; Lnum++) {
					var NUMleftCUBE = Lnum * Lnum * Lnum;
					if(NUMleftCUBE == numLeft) {
						NUMleftMIN3 = Lnum;
					} 
				}
				if(NUMleftMIN3 > 0) {
					// Ответ (без правого числа)
					introduction(4, NUMleftMIN3, textLeft, numRight, textRight)
				} else {
					bracketLeftShort.textContent = 'Указанны неправильные числа';
				}
			} else {
				bracketLeftShort.textContent = 'Нельзя указывать не целые числа';
			}
		} else {
			bracketLeftShort.textContent = 'Нельзя указывать отрицательны числа';
		}
	}
}
// Функция введения 
function introduction(num, numLeft, textLeft, numRight, textRight) {
	// Неизменяемы скобки и плюс
	var bracketLeftShort = document.getElementById('bracket_left_short');
	bracketLeftShort.textContent = '(';
	var bracketRightShort = document.getElementById('bracket_right_short');
	bracketRightShort.textContent = ')';
	var bracketLeft = document.getElementById('bracket_left');
	bracketLeft.textContent = '(';
	var bracketRight = document.getElementById('bracket_right');
	bracketRight.textContent = ')';
	var formulaPlus = document.getElementById('formula_plus');
	formulaPlus.textContent = '+';
	// Меняющийся текст
	var leftNum1 = document.getElementById('left_num1');
	var rightNum1 = document.getElementById('right_num1');
	var leftNum2 = document.getElementById('left_num_2');
	var centerNum2 = document.getElementById('center_num_2');
	var rightNum2 = document.getElementById('right_num_2');
	// Меняющиеся действия
	var minusPlus1 = document.getElementById('minus_plus1');
	var minusPlus2 = document.getElementById('minus_plus2');
	// Меняющийся квадрат
	var supText1 = document.getElementById('sup_text_1');
	var supText2 = document.getElementById('sup_text_2');
	// Проверка на плюс или минус
	var changeMinusPlus = document.getElementById('change_minus_or_plus');
	if(changeMinusPlus.textContent == '+') {
		minusPlus1.textContent = '+';
		minusPlus2.textContent = '-';
	} else if(changeMinusPlus.textContent == '-') {
		minusPlus1.textContent = '-';
		minusPlus2.textContent = '+';
	}
	// Проверка для рассчёта того вставлять ли квадрат
	var textLeftNUM = textLeft.length;
	var textRightNUM = textRight.length;
	if(textLeftNUM > 0) {
		supText1.textContent = '2';
	}
	if(textRightNUM > 0) {
		supText2.textContent = '2';
	}
	// Варианты
	if(num == 1) {
		leftNum1.textContent = textLeft;
		rightNum1.textContent = textRight;
		leftNum2.textContent = textLeft;
		centerNum2.textContent = textLeft + textRight;
		rightNum2.textContent = textRight;
	} else if(num == 2) {
		leftNum1.textContent = numLeft + textLeft;
		rightNum1.textContent = numRight + textRight;
		leftNum2.textContent = (numLeft * numLeft) + textLeft;
		centerNum2.textContent = (numLeft * numRight) + textLeft + textRight;
		rightNum2.textContent = (numRight * numRight) + textRight;
	} else if(num == 3) {
		leftNum1.textContent = textLeft;
		rightNum1.textContent = numRight + textRight;
		leftNum2.textContent = textLeft;
		centerNum2.textContent = numRight + textLeft + textRight;
		rightNum2.textContent = (numRight * numRight) + textRight;
	} else if(num == 4) {
		leftNum1.textContent = numLeft + textLeft;
		rightNum1.textContent = textRight;
		leftNum2.textContent = (numLeft * numLeft) + textLeft;
		centerNum2.textContent = numLeft + textLeft + textRight;
		rightNum2.textContent = textRight;
	}
}
// Задаёт по клику плюс или минус 
var changeOnPlus = document.getElementById('change_onPlus');
	var changeOnMinus = document.getElementById('change_onMinus');
	changeOnPlus.onclick = function changeOnPlusFUN(){
		var changeMinusOrPlus = document.getElementById('change_minus_or_plus');
		changeMinusOrPlus.textContent = '+';
	}
	changeOnMinus.onclick = function changeOnMinusFUN(){
		var changeMinusOrPlus = document.getElementById('change_minus_or_plus');
		changeMinusOrPlus.textContent = '-';
	}
	var cubeSolve = document.getElementById('cube_solve');
	cubeSolve.onclick = function cubeSolveFUN() {
		// Чистит
		CleanUP();
		// Проверка, выбрал ли действие
		var changeMinusOrPlus = document.getElementById('change_minus_or_plus');
		// Если не выбрано будет писаться тут
		var bracketLeftShort = document.getElementById('bracket_left_short');
		//
		if(changeMinusOrPlus.textContent == '?') {
			bracketLeftShort.textContent = 'Выберете действие';
		} else {
			// Поле ввода
			var cubeTextLeft = document.getElementById('cube_text_left').value;
			var cubeTextRight = document.getElementById('cube_text_right').value;
			// Проверка с помощью подсчёта чисел
			var numberCubeTextLeft = (cubeTextLeft + '^-^').length;
			var numberCubeTextRight = (cubeTextRight + '^-^').length;
			if(numberCubeTextLeft > 3) {
				if(numberCubeTextRight > 3) {
					// Считает сколько букв 
					var cubeTextLeftNUM = cubeTextLeft.length;
					// Массивы букв и чисел
					var cubeTextLeftNUMBER = [];
					var cubeTextLeftLETTERS = [];
					// Левый цикл
					for (var LeftNum = 0; LeftNum < cubeTextLeftNUM; LeftNum++) {
						// Делит на буквы
						var FIGcubeTextLeft = cubeTextLeft[LeftNum];
						// Проверяет
						var CheckingCubeTextLeft = (FIGcubeTextLeft + 1) / (FIGcubeTextLeft + 1);
						if(CheckingCubeTextLeft == 1) {
							cubeTextLeftNUMBER.push(FIGcubeTextLeft);
						} else if (FIGcubeTextLeft == ',') {
							cubeTextLeftNUMBER.push('.');
						} else if(FIGcubeTextLeft == '.') {
							cubeTextLeftNUMBER.push('.');
						} else {
							cubeTextLeftLETTERS.push(FIGcubeTextLeft);
						}
					}
					var wholeCubeTextLeftNUMBER = parseFloat(cubeTextLeftNUMBER.join(''));
					// Если NaN 
					var NaNwholeCubeTextLeftNUMBER = isNaN(wholeCubeTextLeftNUMBER);
					if(NaNwholeCubeTextLeftNUMBER == true) {
						wholeCubeTextLeftNUMBER = '';
					}
					var wholeCubeTextLeftLETTERS = cubeTextLeftLETTERS.join('');
					//
					// Счёт букв правого 
					var cubeTextRightNUM = cubeTextRight.length;
					// Массивы правого
					var cubeTextRightNUMBER = [];
					var cubeTextRightLETTERS = [];
					// Правый цикл
					for(var RightNum = 0; RightNum < cubeTextRightNUM; RightNum++) {
						// Делит на буквы
						var FIGcubeTextRight = cubeTextRight[RightNum];
						// Проверяет
						var CheckingCubeTextRight = (FIGcubeTextRight + 1) / (FIGcubeTextRight + 1);
						if(CheckingCubeTextRight == 1) {
							cubeTextRightNUMBER.push(FIGcubeTextRight);
						} else if(FIGcubeTextRight == ',') {
							cubeTextRightNUMBER.push('.');
						} else if(FIGcubeTextRight == '.') {
							cubeTextRightNUMBER.push('.');
						} else {
							cubeTextRightLETTERS.push(FIGcubeTextRight);
						}
					}
					var wholeCubeTextRightNUMBER = parseFloat(cubeTextRightNUMBER.join(''));
					// Если NaN
					var NaNwholeCubeTextRightNUMBER = isNaN(wholeCubeTextRightNUMBER);
					if(NaNwholeCubeTextRightNUMBER == true) {
						wholeCubeTextRightNUMBER = '';
					}
					var wholeCubeTextRightLETTERS = cubeTextRightLETTERS.join('');
					// Есть ли в букве число
					if(wholeCubeTextLeftNUMBER == '') {
						if(wholeCubeTextRightNUMBER == '') {
							// Без чисел
							textENDnumber(wholeCubeTextLeftNUMBER, wholeCubeTextLeftLETTERS, wholeCubeTextRightNUMBER, wholeCubeTextRightLETTERS, 1)
						} else {
							// Без левого числа
							textENDnumber(wholeCubeTextLeftNUMBER, wholeCubeTextLeftLETTERS, wholeCubeTextRightNUMBER, wholeCubeTextRightLETTERS, 3)
						} 
					} else if(wholeCubeTextRightNUMBER == '') {
						// Без правого числа
						textENDnumber(wholeCubeTextLeftNUMBER, wholeCubeTextLeftLETTERS, wholeCubeTextRightNUMBER, wholeCubeTextRightLETTERS, 4)
					} else {
						// Оба с числами
						textENDnumber(wholeCubeTextLeftNUMBER, wholeCubeTextLeftLETTERS, wholeCubeTextRightNUMBER, wholeCubeTextRightLETTERS, 2)
					}	
				} else {
					bracketLeftShort.textContent = 'Числа не вписанны';
				}
			} else {
				bracketLeftShort.textContent = 'Числа не вписанны';
			}
		}
	}
// Кнопка 
var buttonRollUp = document.getElementById('button_rollUp');
buttonRollUp.onclick = function happensRollUp() {
	// Меняет текст
	var leftBracket = document.getElementById('left_bracketID');
	// 
	var bBotLeft = document.getElementById('bot_left');
	var leftTwoTop = document.getElementById('left_two_top');
	//
	var minusCENTER = document.getElementById('minus_CENTER');
	// 
	var bBotRight = document.getElementById('bot_right');
	var rightTwoTop = document.getElementById('right_two_top');
	//
	var rightBracket = document.getElementById('right_bracketID');
	// Чистит текст
	leftBracket.textContent = '';
	bBotLeft.textContent = '';
	leftTwoTop.textContent = '';
	minusCENTER.textContent = '';
	bBotRight.textContent = '';
	rightTwoTop.textContent = '';
	rightBracket.textContent = '';
	//
	var leftRollUp = document.getElementById('left_rollUp').value;
	var rightRollUp = document.getElementById('right_rollUp').value;
	// Проверка с помощь счёта чисел
	var NUMleftRollUp = (leftRollUp + '^-^').length;
	var NUMrightRollUp = (rightRollUp + '^-^').length;
	// Сообщает что числа не вписанны
	var leftBracket = document.getElementById('left_bracketID');
	if(NUMleftRollUp > 3) {
		if(NUMrightRollUp > 3) {
			LeftENDrightAnswer(leftRollUp, rightRollUp)
		} else {
			leftBracket.textContent = 'Числа не вписанны';
		}
	} else {
		leftBracket.textContent = 'Числа не вписанны';
	}
}
// Функция обновления 
	function updatedFun() {
		// Обновляется 
		var leftRollUp = document.getElementById('left_rollUp').value;
		var rightRollUp = document.getElementById('right_rollUp').value;
		// Счёт букв 
		var leftRollUpTEXT = leftRollUp + '^-^';
		var rightRollUpTEXT = rightRollUp + '^-^';
		var leftRollUpNUM = leftRollUpTEXT.length;
		var rightRollUpNUM = rightRollUpTEXT.length;
		// 
		var leftUpdated = document.getElementById('left_updated');
		var rightUpdated = document.getElementById('right_updated');
		if(leftRollUpNUM <= 14) {
			if(rightRollUpNUM <= 14) {
				if(leftRollUp == '') {
					leftUpdated.textContent = '?';
				} else {
					leftUpdated.textContent = leftRollUp;
				}
				if(rightRollUp == '') {
					rightUpdated.textContent = '?';
				} else {
					rightUpdated.textContent = rightRollUp;
				}
			}
		}
	}
// Функция ответа
function LeftENDrightAnswer(leftText, rightText) {
	// Счёт символов 
	var leftSymbolNUM = leftText.length;
	var rightSymbolNUM = rightText.length; 
	// Массивы текста и числа 
	var leftTextNUMBER = [];
	var leftTextLETTERS = [];
	var rightTextNUMBER = [];
	var rightTextLETTERS = [];		
	// Левый цикл	
	for(var numL = 0; numL < leftSymbolNUM; numL++) {
		// Делит на буквы 
		var leftTextSymbol = leftText[numL];
		// Проверяет 
		var leftCheckingText = (leftTextSymbol + 1) / (leftTextSymbol + 1);
		// Левый цикл
		if(leftCheckingText == 1) {
			leftTextNUMBER.push(leftTextSymbol); 
		} else if(leftTextSymbol == ',') {
			leftTextNUMBER.push('.');
		} else if(leftTextSymbol == ',') {
			leftTextNUMBER.push('.');
		} else {
			leftTextLETTERS.push(leftTextSymbol);
		}
	}
	var wholeLeftTextNUMBER = parseFloat(leftTextNUMBER.join(''));
	wholeLeftTextNUMBER = wholeLeftTextNUMBER * wholeLeftTextNUMBER;
	var wholeLeftTextLETTERS = leftTextLETTERS.join('');
	// Правый цикл
	for(var numR = 0; numR < rightSymbolNUM; numR++) {
		// Делит на буквы 
		var rightTextSymbol = rightText[numR];
		// Проверяет 
		var rightCheckingText = (rightTextSymbol + 1) / (rightTextSymbol + 1);
		// Левый цикл
		if(rightCheckingText == 1) {
			rightTextNUMBER.push(rightTextSymbol); 
		} else if(rightTextSymbol == ',') {
			rightTextNUMBER.push('.');
		} else if(rightTextSymbol == ',') {
			rightTextNUMBER.push('.');
		} else {
			rightTextLETTERS.push(rightTextSymbol);
		}
	}
	var wholeRightTextNUMBER = parseFloat(rightTextNUMBER.join(''));
	wholeRightTextNUMBER = wholeRightTextNUMBER * wholeRightTextNUMBER;
	var wholeRightTextLETTERS = rightTextLETTERS.join('');
	// Проверка на NaN
	var wholeLeftTextNaN = isNaN(wholeLeftTextNUMBER);
	var wholeRightTextNaN = isNaN(wholeRightTextNUMBER);
	if(wholeLeftTextNaN == true) {
		wholeLeftTextNUMBER = '';
	}
	if(wholeRightTextNaN == true) {
		wholeRightTextNUMBER = '';
	}
	// Меняющийся текст 
	var leftBracket = document.getElementById('left_bracketID');
	// 
	var bBotLeft = document.getElementById('bot_left');
	var leftTwoTop = document.getElementById('left_two_top');
	//
	var minusCENTER = document.getElementById('minus_CENTER');
	// 
	var bBotRight = document.getElementById('bot_right');
	var rightTwoTop = document.getElementById('right_two_top');
	//
	var rightBracket = document.getElementById('right_bracketID');
	// Меняет
	leftBracket.textContent = '(';
	bBotLeft.textContent =  wholeLeftTextNUMBER + wholeLeftTextLETTERS;
	leftTwoTop.textContent = '2';
	minusCENTER.textContent = '-';
	bBotRight.textContent = wholeRightTextNUMBER + wholeRightTextLETTERS;
	rightTwoTop.textContent = '2';
	rightBracket.textContent = ')';
}
/* Кнопки */
var enaFormula1 = document.getElementById('enableFormula1');
var enaFormula2 = document.getElementById('enableFormula2');
var enaFormula3 = document.getElementById('enableFormula3');
var enaFormula4 = document.getElementById('enableFormula4');
// 
var solving1 = document.getElementById('solveUsing1');
var solving2 = document.getElementById('solveUsing2');
var solving3 = document.getElementById('solveUsing3');
var solving4 = document.getElementById('solveUsing4');
// Развернуть и свернуть 
var collapseFormula = document.getElementById('collapse_formula');
var expandFormula = document.getElementById('expand_formula');
//
var collapseBlock = document.getElementById('collapse_block');
var rollUpBlock = document.getElementById('rollUp_block');
collapseFormula.onclick = function collapseFun() {
	collapseBlock.style.display = 'block';
	rollUpBlock.style.display = 'none';
}
expandFormula.onclick = function expandFun() {
	collapseBlock.style.display = 'none';
	rollUpBlock.style.display = 'block';
	// Функция обновления
	setInterval(updatedFun, 500);
} 
function cleaningFormulas() {
	 solving1.style.display = 'none';
	 solving2.style.display = 'none';
	 solving3.style.display = 'none';
	 solving4.style.display = 'none';
	 var removeTooltip = document.getElementById('remove_tooltip');
	 removeTooltip.style.display = 'none';	 
}
// Функция повторяющихся цветов
function repeatColorFUN() {
var enableFormula1ID = document.getElementById('enableFormula1');
enableFormula1ID.style.backgroundColor = '#4682B4';
var enableFormula2ID = document.getElementById('enableFormula2');
enableFormula2ID.style.backgroundColor = '#4682B4';
var enableFormula3ID = document.getElementById('enableFormula3');
enableFormula3ID.style.backgroundColor = '#4682B4';
var enableFormula4ID = document.getElementById('enableFormula4');
enableFormula4ID.style.backgroundColor = '#4682B4';
}
// Выбор формулы
enaFormula1.onclick = function clickFormula1() {
	cleaningFormulas();
	solving1.style.display = 'block';
	repeatColorFUN();
	enaFormula1.style.backgroundColor = '#9370DB';
}
enaFormula2.onclick = function clickFormula2() {
	cleaningFormulas();
	solving2.style.display = 'block';
	repeatColorFUN();
	enaFormula2.style.backgroundColor = '#9370DB';
}
enaFormula3.onclick = function clickFormula3() {
	cleaningFormulas();
	solving3.style.display = 'block';
	repeatColorFUN();
	enaFormula3.style.backgroundColor = '#9370DB';
}
enaFormula4.onclick = function clickFormula4() {
	cleaningFormulas();
	solving4.style.display = 'block';
	repeatColorFUN();
	enaFormula4.style.backgroundColor = '#9370DB';
}
/**/
// Функции
function ifLetters(letters, leftNUM, leftTEXT, rightNUM, rightTEXT, leftCheck, rightCheck) {
	// Меняющийся текст
	var leftBracket1_0 = document.getElementById('left_bracket1_0');
	var plusMinus1 = document.getElementById('plus_minus1');
	var rightBracket1_0 = document.getElementById('right_bracket1_0');
	var leftBracket1_1 = document.getElementById('left_bracket1_1');
	var plusFormula1 = document.getElementById('plus_formula1');
	var rightBracket1_1 = document.getElementById('right_bracket1_1');
	// Чистит текст
	leftBracket1_0.textContent = '';
	plusMinus1.textContent = '';
	rightBracket1_0.textContent = '';
	leftBracket1_1.textContent = '';
	plusFormula1.textContent = '';
	rightBracket1_1.textContent = '';
	// Ответ с буквами 
if(leftCheck <= 10) {
if(rightCheck <=10) {
	if(letters == 1) {
		//Левая скобка
		leftBracket1_0.textContent = '(';
		plusMinus1.textContent = leftTEXT + ' - ' + rightNUM + rightTEXT;
		rightBracket1_0.textContent = ')';
		// Правая скобка
		leftBracket1_1.textContent = '(';
		plusFormula1.textContent = leftTEXT + ' + ' + rightNUM + rightTEXT;
		rightBracket1_1.textContent = ')';
	}
	if(letters == 2) {
		// Левая скобка 
		leftBracket1_0.textContent = '(';
		plusMinus1.textContent = leftNUM + leftTEXT + ' - ' + rightTEXT;
		rightBracket1_0.textContent = ')';
		// Правая скобка
		leftBracket1_1.textContent = '(';
		plusFormula1.textContent = leftNUM + leftTEXT + ' + ' + rightTEXT;
		rightBracket1_1.textContent = ')';
	} 
	if(letters == 3) {
		// Левая скобка 
		leftBracket1_0.textContent = '(';
		plusMinus1.textContent = leftTEXT + ' - ' + rightTEXT;
		rightBracket1_0.textContent = ')';
		// Правая скобка
		leftBracket1_1.textContent = '(';
		plusFormula1.textContent = leftTEXT + ' + ' + rightTEXT;
		rightBracket1_1.textContent = ')';
	}
} else {
	plusMinus1.textContent = 'Корни не извлекаются';
}
} else {
plusMinus1.textContent = 'Корни не извлекаются';
}
}
function reallocation(leftLine, rightLine) {
	// Меняющийся текст
	var leftBracket1_0 = document.getElementById('left_bracket1_0');
	var plusMinus1 = document.getElementById('plus_minus1');
	var rightBracket1_0 = document.getElementById('right_bracket1_0');
	var leftBracket1_1 = document.getElementById('left_bracket1_1');
	var plusFormula1 = document.getElementById('plus_formula1');
	var rightBracket1_1 = document.getElementById('right_bracket1_1');
	// Чистит текст
	leftBracket1_0.textContent = '';
	plusMinus1.textContent = '';
	rightBracket1_0.textContent = '';
	leftBracket1_1.textContent = '';
	plusFormula1.textContent = '';
	rightBracket1_1.textContent = '';
	// Cчитает сколько символов
	var leftTextNUM = leftLine.length;
	var rightTextNUM = rightLine.length;
	// Массивы для замены
	var leftTextNUMBER = [];
	var leftTextLetters = [];
	var rightTextNUMBER = [];
	var rightTextLetters = [];
	// Левый цикл
	for(numLeft = 0; numLeft < leftTextNUM; numLeft++) {
		var LeftSymbol = leftLine[numLeft];
		var LeftCheckingBull = (LeftSymbol + 1) / (LeftSymbol + 1);
		if(LeftCheckingBull == 1) {
			leftTextNUMBER.push(LeftSymbol);
		} else if(LeftSymbol == ',') {
			leftTextNUMBER.push('.');
		} else if(LeftSymbol == '.') {
			leftTextNUMBER.push('.');
		} else {
			leftTextLetters.push(LeftSymbol)
		}
	}
	var wholeLeftTextNUMBER = leftTextNUMBER.join('');
	var LeftNotWhole = parseFloat(wholeLeftTextNUMBER);
	//
	var wholeLeftTextLetters = leftTextLetters.join('');
	var LeftCountingLetters = wholeLeftTextLetters.length;
	// Правый цикл
	for(numRight = 0; numRight < rightTextNUM; numRight++) {
		var RightSymbol = rightLine[numRight];
		var RightCheckingBull = (RightSymbol + 1) / (RightSymbol + 1);
		if(RightCheckingBull == 1) {
			rightTextNUMBER.push(RightSymbol);
		} else if(RightSymbol == ',') {
			rightTextNUMBER.push('.');
		} else if(RightSymbol == '.') {
			rightTextNUMBER.push('.');
		} else {
			rightTextLetters.push(RightSymbol);
		} 
	}
	var wholeRightTextNUMBER = rightTextNUMBER.join('');
	var RightNotWhole =  parseFloat(wholeRightTextNUMBER);

	var wholeRightTextLetters = rightTextLetters.join('');
	var RightCountingLetters = wholeRightTextLetters.length;
	// Извлеч корни
	var leftRootTextNUM = Math.sqrt(LeftNotWhole);
	var rightRootTextNUM = Math.sqrt(RightNotWhole);
	// Проверка с помощью cчёта чисел
	var leftRoundingCheck = (leftRootTextNUM + '^-^').length;
	var rightRoundingCheck = (rightRootTextNUM + '^-^').length;
	// Если число будет отрицательным
	var NaNleftRootTextNUM = isNaN(leftRootTextNUM);
	var NaNrightRootTextNUM = isNaN(rightRootTextNUM);
	// Условия 
	if(NaNleftRootTextNUM === false) {
		if(NaNrightRootTextNUM === false) {
			if(leftRoundingCheck <= 10) {
				if(rightRoundingCheck <= 10) {
				// Левая скобка 
				leftBracket1_0.textContent = '(';
				plusMinus1.textContent = leftRootTextNUM + wholeLeftTextLetters + ' - ' + rightRootTextNUM + wholeRightTextLetters;
				rightBracket1_0.textContent = ')';
				// Правая скобка
				leftBracket1_1.textContent = '(';
				plusFormula1.textContent = leftRootTextNUM + wholeLeftTextLetters + ' + ' + rightRootTextNUM + wholeRightTextLetters;
				rightBracket1_1.textContent = ')';
				} else {
					plusMinus1.textContent = 'Корни не извлекаются';
				}
			} else {
				plusMinus1.textContent = 'Корни не извлекаются';
			}
		// plus_enter
		} else if(RightCountingLetters > 0) {
			if(NaNleftRootTextNUM === false) {
				ifLetters(2, leftRootTextNUM, wholeLeftTextLetters, rightRootTextNUM, wholeRightTextLetters, leftRoundingCheck, rightRoundingCheck);
			} else {
				ifLetters(3, leftRootTextNUM, wholeLeftTextLetters, rightRootTextNUM, wholeRightTextLetters, leftRoundingCheck, rightRoundingCheck);
			}
		}
	} else if(LeftCountingLetters > 0) {
		if(NaNrightRootTextNUM === false) {
			ifLetters(1, leftRootTextNUM, wholeLeftTextLetters, rightRootTextNUM, wholeRightTextLetters, leftRoundingCheck, rightRoundingCheck);
		} else {
			ifLetters(3, leftRootTextNUM, wholeLeftTextLetters, rightRootTextNUM, wholeRightTextLetters, leftRoundingCheck, rightRoundingCheck);
		}
	}
}	
var solveButton = document.getElementById('the_solve_button');
solveButton.onclick = function decisionFormulas() {
	// Меняющийся текст
	var leftBracket1_0 = document.getElementById('left_bracket1_0');
	var plusMinus1 = document.getElementById('plus_minus1');
	var rightBracket1_0 = document.getElementById('right_bracket1_0');
	var leftBracket1_1 = document.getElementById('left_bracket1_1');
	var plusFormula1 = document.getElementById('plus_formula1');
	var rightBracket1_1 = document.getElementById('right_bracket1_1');
	// Чистит текст 
	leftBracket1_0.textContent = '';
	plusMinus1.textContent = '';
	rightBracket1_0.textContent = '';
	leftBracket1_1.textContent = '';
	plusFormula1.textContent = '';
	rightBracket1_1.textContent = '';
	// Введение
	var leftSide = document.getElementById('left_side').value;
	var rightSide = document.getElementById('right_side').value;
	if(leftSide == '') {
		plusMinus1.textContent = 'Числа не вписанны';
	} else if(rightSide == '') {
		plusMinus1.textContent = 'Числа не вписанны';
	} else {
		reallocation(leftSide, rightSide);
	}
}
//quadratic_equation