var burgerMenu = document.querySelector('.burgerMenu')
var burgerMenuClose = document.querySelector('.burgerMenuClose')
var containerWhiteLines = document.querySelector('.containerWhiteLines')
var containerWhiteCross = document.querySelector('.containerWhiteCross')



burgerMenu.addEventListener('click', function() {
	if (burgerMenuClose.style.display === 'flex') {
		burgerMenuClose.style.display = 'none'
		containerWhiteLines.style.display = 'flex'
		containerWhiteCross.style.display = 'none'
	} else {
		burgerMenuClose.style.display = 'flex'
		containerWhiteLines.style.display = 'none'
		containerWhiteCross.style.display = 'flex'
	}
})