var countdown = require('countdown')

function makeCountdown(selector, dateStr, happyCouple) {
	var ele = document.querySelector(selector)

	function onCount(down) {
		ele.innerHTML = (down.value > 0) ?
			down.toString() + ' until ' + happyCouple + '\'s wedding!!!' :
			'Congratulations ' + happyCouple + '!!!'
	}

	countdown(onCount, new Date(dateStr))
}

makeCountdown('#seth-laura', '2015 May 16 12:00 cst', 'Seth and Laura')
makeCountdown('#michael-elizabeth', '2015 November 20 12:00 cst', 'Michael and Elizabeth')
