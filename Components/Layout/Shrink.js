const $header = document.querySelector('#header')
const $fakeHeader = document.querySelector('#fake-header')
const $logo = document.querySelector('#logo')

window.addEventListener('scroll', () => {
	if (window.scrollY > 64) {
		$header.classList.add('-translate-y-4')
		$logo.classList.remove('scale-125')
		
		$fakeHeader.classList.add('scale-y-75')
		$fakeHeader.classList.add('shadow-xl')
		return
	}
	
	$header.classList.remove('-translate-y-4')
	$logo.classList.add('scale-125')
	
	$fakeHeader.classList.remove('scale-y-75')
	$fakeHeader.classList.remove('shadow-xl')
})