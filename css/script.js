
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



