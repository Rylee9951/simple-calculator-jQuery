


$(document).ready(function() {
	// Adding
	$('#plus').on('click', function() {
		var num1 = Number($('.num1').val())
		var num2 = Number($('.num2').val())
		var add = num1 + num2
		$('.solution').text(add)
	})

	// Subtracting
	$('#minus').on('click', function() {
		var num1 = Number($('.num1').val())
		var num2 = Number($('.num2').val())
		var subtract = num1 - num2
		
		$('.solution').text(subtract)
	})

	// Multiplying
	$('#multiply').on('click', function() {
		var num1 = Number($('.num1').val())
		var num2 = Number($('.num2').val())
		var multiply = num1 * num2

		$('.solution').text(multiply)
	})

		// Dividing
	$('#divide').on('click', function() {
		var num1 = Number($('.num1').val())
		var num2 = Number($('.num2').val())
		var divide = num1 / num2

		$('.solution').text(divide)
	})

})
