console.log(';3');
	function multiplier(max, min, maxTOP, minBOT, veri) {
		console.log('Функция прошла успешно ' + max + ' и ' + min);
		if(max < 0) {
		max = -1 * max;
	}
		if (min < 0) {
		min = -1 * min;
	}
		for (numMax = 2; numMax <= max; numMax++) {
			var check_MAX = max / numMax;
			if (Math.floor(check_MAX) == check_MAX) {
				for (var numMin = 2; numMin <= min; numMin++) {
					var check_MIN = min / numMin;
					if(Math.floor(check_MIN) == check_MIN) {
						if (numMin == numMax) {
							var conclusion = numMin;
						}
					} 
				}
			}
		}
		console.log(conclusion);
		if(conclusion > 0) {
			if(veri == 1) {
            var redEquallyX1 = document.getElementById('red_equallyX1');
		 	var multiX1TOP = document.getElementById('X1red_top');
			var multiX1BOT = document.getElementById('X1red_bot');
			redEquallyX1.textContent = ' = ';
			var reductX1TOP = maxTOP / conclusion;
			var reductX1BOT = minBOT / conclusion;
			multiX1TOP.textContent = reductX1TOP;
			multiX1BOT.textContent = reductX1BOT;
		}
		if(veri == 2) {
			var redEquallyX2 = document.getElementById('red_equallyX2');
			var multiX2TOP = document.getElementById('X2red_top');
			var multiX2BOT = document.getElementById('X2red_bot');
			redEquallyX2.textContent = ' = '
			var reductX2TOP = maxTOP / conclusion;
			var reductX2BOT = minBOT / conclusion;
			multiX2TOP.textContent = reductX2TOP;
			multiX2BOT.textContent = reductX2BOT;
			}
		if(veri == 3) {
			var redEquallyX1 = document.getElementById('red_equallyX1');
		 	var multiX1TOP = document.getElementById('X1red_top');
			var multiX1BOT = document.getElementById('X1red_bot');
			redEquallyX1.textContent = ' = ';
			var reductX1TOP = maxTOP / conclusion;
			var reductX1BOT = minBOT / conclusion;
			multiX1TOP.textContent = reductX1TOP;
			multiX1BOT.textContent = reductX1BOT;
		}
	}
}
	//Конец функций
var decision = document.getElementById('decision_1');
decision.onclick = function The_way_to_solve() {
	// Поиск по чисел по айди
	var numA = document.getElementById('opA').value;
	var numB = document.getElementById('opB').value;
	var numC = document.getElementById('opC').value;
	// Превратить строчные числа в Number
	var numA = parseInt(numA);
	var numB = parseInt(numB);
	var numC = parseInt(numC);
	// Если числа вписанны (Проверка)
	var ifNubers = numA + numB + numC;
	ifNubers = isNaN(ifNubers);
	// Меняющийся текст 
	var notendCorrect = document.getElementById('dec_D');
	var orNum = document.getElementById('les_D');
	var onX_1 = document.getElementById('onX1');
	var andX1Top = document.getElementById('X1_top');
	var andX1Bot = document.getElementById('X1_bot');
	var onX_2 = document.getElementById('onX2');
	var andX2Top = document.getElementById('X2_top');
	var andX2Bot = document.getElementById('X2_bot');
	var X1TOP1 = document.getElementById('X1TOP');
	var X1BOT1 = document.getElementById('X1BOT');
	var X1_equally = document.getElementById('equallyX1');
	var X2TOP2 = document.getElementById('X2TOP');
	var X2BOT2 = document.getElementById('X2BOT');
	var X2_equally = document.getElementById('equallyX2');
	//
	var redEquallyX1 = document.getElementById('red_equallyX1');
 	var multiX1TOP = document.getElementById('X1red_top');
	var multiX1BOT = document.getElementById('X1red_bot');
	var redEquallyX2 = document.getElementById('red_equallyX2');
	var multiX2TOP = document.getElementById('X2red_top');
	var multiX2BOT = document.getElementById('X2red_bot');
	// Чистит текст
	notendCorrect.textContent = ' ';
	orNum.textContent = ' ';
	onX_1.textContent = ' ';
	andX1Top.textContent = ' ';
	andX1Bot.textContent = ' ';
	onX_2.textContent = ' ';
	andX2Top.textContent = ' ';
	andX2Bot.textContent = ' ';
	X1TOP1.textContent = ' ';
	X1BOT1.textContent = ' ';
	X1_equally.textContent = ' ';
	X2TOP2.textContent = ' ';
	X2BOT2.textContent = ' ';
	X2_equally.textContent = ' ';
	//
	redEquallyX1.textContent = ' ';
	multiX1TOP.textContent = ' '; 
	multiX1BOT.textContent = ' ';
	redEquallyX2.textContent = ' ';
	multiX2TOP.textContent = ' ';
	multiX2BOT.textContent = ' ';
	// Не правильно
	if(ifNubers == true) {
		notendCorrect.textContent = 'Впишите правильные числа : (';
	}
	// Правильно
	if(ifNubers == false) {
		var squareDiscriminant = numB * numB;
		var formulDiscriminant = -4 * numA * numC;
		var answerDiscriminant = squareDiscriminant + formulDiscriminant;
		notendCorrect.textContent = 'D = ' + squareDiscriminant + ' + ' + formulDiscriminant + ' = ' + answerDiscriminant;
		if(answerDiscriminant > 0) {
			orNum.textContent = 'D = ' + answerDiscriminant + ' > 0, - ' + '(Имеет 2 корня.)';
			var minusB = numB * -1;
			var rootDiscriminant = Math.sqrt(answerDiscriminant);
			var Xtop1 = minusB + rootDiscriminant;
			var Xtop2 = minusB - rootDiscriminant;
			var Xbot = numA * 2;
			// Верх 1
			onX_1.textContent = 'x1 = ';
			andX1Top.textContent = minusB + ' + ' + rootDiscriminant;
			X1_equally.textContent = ' = ';
			X1TOP1.textContent = Xtop1;
			// Низ 1
			X1BOT1.textContent = ' ' + Xbot;
			andX1Bot.textContent = '2 * ' + numA;
			//Общий знаминатель X1
			if(Xtop1 == Xbot) {
				var verify1 = 1;
				multiplier(Xtop1, Xbot, Xtop1, Xbot, verify1);
			} else if(Xtop1 > Xbot) {
				var verify1 = 1;
				multiplier(Xtop1, Xbot, Xtop1, Xbot, verify1);
			} else if(Xbot > Xtop1) {
				var verify1 = 1;
				multiplier(Xbot, Xtop1, Xtop1, Xbot, verify1)
			}
			// Верх 2
			onX_2.textContent = 'x2 = ';
			andX2Top.textContent = minusB + ' - ' + rootDiscriminant;
			X2_equally.textContent = '=';
			X2TOP2.textContent = Xtop2;
			// Низ 2
			X2BOT2.textContent = ' ' + Xbot;
			andX2Bot.textContent = '2 * ' + numA;
			//Общий знаминатель X2
			if(Xtop2 == Xbot) {
				var verify2 = 2;
				multiplier(Xtop2, Xbot, Xtop2, Xbot, verify2);
			} else if(Xtop2 > Xbot) {
				var verify2 = 2;
				multiplier(Xtop2, Xbot, Xtop2, Xbot, verify2);
			} else if(Xbot > Xtop2) {
				var verify2 = 2;
				multiplier(Xbot, Xtop2, Xtop2, Xbot, verify2);
			}
		} else if (answerDiscriminant == 0) {
			orNum.textContent = 'D = ' + answerDiscriminant + ' = 0, - ' + '(Имеет 1 корень.)';
			onX_1.textContent = 'x1 = ';
			var minusB = numB * -1;
			andX1Top.textContent = minusB;
			andX1Bot.textContent = '2 * ' + numA;
			X1_equally.textContent = ' = ';
			X1TOP1.textContent = minusB;
			var X1bot1X = numA * 2;
			X1BOT1.textContent = X1bot1X;
			if(minusB > X1bot1X) {
				var verify3 = 3;
				multiplier(minusB, X1bot1X, minusB, X1bot1X, verify3)
			} else if (X1bot1X > minusB) {
				var verify3 = 3;
				multiplier(X1bot1X, minusB, minusB, X1bot1X, verify3)
			} else if(X1bot1X == minusB) {
				console.log(X1bot1X + ' и ' + minusB + ' - Равны');
				var verify3 = 3;
				multiplier(minusB, X1bot1X, minusB, X1bot1X, verify3)
			}
		} else if (answerDiscriminant < 0) {
			orNum.textContent = 'D = ' + answerDiscriminant + ' < 0, - ' + '(Не имеет корней.)';
		} else {orNum.textContent = 'Упс, здесь какаято ошибочка : ('};
	}
}
var UPLeftDisplay1 = document.getElementById('UP_left_display_1');
UPLeftDisplay1.onclick = function UPLeftDisplay1FUN() {
	var displayLeft = document.getElementById('display_left');
	displayLeft.style.height = '400px';
}
var UPLeftDisplay2 = document.getElementById('UP_left_display_2');
UPLeftDisplay2.onclick = function UPLeftDisplay2FUN() {
	var displayLeft = document.getElementById('display_left');
	displayLeft.style.height = '400px';
}
var noneLeftImg = document.getElementById('none_left_img');
noneLeftImg.onclick = function noneLeftImgFUN() {
	var displayLeft = document.getElementById('display_left');
	displayLeft.style.height = '0px';
}
//
var fnc = setInterval(function UPborderDisplay() {
	var UPborderDisplayWidth = window.screen.width;
	if(UPborderDisplayWidth >= 710) {
		var displayLeft = document.getElementById('display_left');
		displayLeft.style.height = '100%';
	}
}, 100);

