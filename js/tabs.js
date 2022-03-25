const tabButtons = document.querySelectorAll('.design-list__item')
const tabDescription = document.querySelectorAll('.design__descr')
const tabImages = document.querySelectorAll('.design-images')
const title = document.querySelector('title')
const tabImg = document.querySelectorAll('.design-block__img')
const tabTitle = document.querySelectorAll('.design__title')


const changeContent = (array, value) => {
	array.forEach((elem) => {
		if(elem.dataset.tabsField === value) {
			elem.classList.remove('hidden')
		} else {
			elem.classList.add('hidden')
		}
	})
}

tabButtons.forEach((tabButton) => {
	tabButton.addEventListener('click', (event) =>{
		const dataValue = tabButton.dataset.tabsHandler

		changeContent(tabImg, dataValue)
		changeContent(tabDescription, dataValue)
		changeContent(tabImages, dataValue)
		changeContent(tabTitle, dataValue)
		tabTitle.forEach(title1 => {
			if(!title1.classList.contains('hidden')) {
				title.innerHTML = title1.textContent
			}
		})

		tabButtons.forEach((btn) => {
			if (btn === event.target) {
				btn.classList.add('design-list__item_active')
			} else {
				btn.classList.remove('design-list__item_active')
			}
		})
	})
})