function makeCountdown(selector, dateStr, happyCouple) {
	var ele = document.querySelector(selector)

	function onCount(down) {
		ele.innerHTML = (down.value > 0) ?
			down.toString() + ' until ' + happyCouple + '\'s wedding!!!' :
			'Congratulations ' + happyCouple + '!!!'
	}

	window.countdown(onCount, new Date(dateStr))
}

makeCountdown('#jordon-jessica', '2008 August 16 12:00 cst', 'Jordon and Jessica')
makeCountdown('#seth-laura', '2015 May 16 12:00 cst', 'Seth and Laura')
makeCountdown('#david-ruth', '2012 April 20 12:00 cst', 'David and Ruth')
makeCountdown('#michael-elizabeth', '2015 November 20 12:00 cst', 'Michael and Elizabeth')
makeCountdown('#micah-rebecca', '2016 December 17 12:00 cst', 'Micah and Rebecca')
// makeCountdown('#joseph-nooneyetlol', 'Future', 'Joseph and wifey')
makeCountdown('#levi-hannah', '2019 November 11 12:00 cst', 'Levi and Hannah')
// makeCountdown('#daniel-nooneyet', 'Future', 'Daniel and wifey')
// makeCountdown('#nathanael-noone', 'Future', 'Nathanael and wifey')
