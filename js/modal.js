const modalButton = document.querySelectorAll('.more')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeButton = document.querySelector('.modal__close')

modalButton.forEach((btn) => {
	btn.addEventListener('click', () => {
		modal.classList.remove('hidden')
	})
})

/* modalButton.addEventListener('click', () => {
	modal.classList.remove('hidden')
}) */

overlay.addEventListener('click', () => {
	modal.classList.add('hidden')
})

closeButton.addEventListener('click', () => {
	modal.classList.add('hidden')
})