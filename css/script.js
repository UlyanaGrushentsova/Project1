
let buttons = document.querySelectorAll('.popup');
					buttons.forEach(button => {
					button.addEventListener('mouseover', showPopup);
					button.addEventListener('mouseout', hidePopup);
					});

					function showPopup() {
						let visible = this.nextElementSibling;
						if (visible.classList.contains('visible')) {
							visible.classList.add('visible2');
						}
					}

					function hidePopup() {
						let visible = this.nextElementSibling;
						if (visible.classList.contains('visible')) {
							visible.classList.remove('visible2');
						}
					}



/*мой вариант
					let button = document.querySelector('.popup');
					button.addEventListener('mouseover', showPopup);
					
					function showPopup() {
						document.querySelector('.visible').classList.add('visible2');
					}

					button.addEventListener('mouseout', hidePopup);
					
					function hidePopup() {
						document.querySelector('.visible').classList.remove('visible2');
					}

*/