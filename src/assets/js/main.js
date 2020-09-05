document.addEventListener('DOMContentLoaded', function () {
	const tabsParent = document.querySelector('.tabheader__items');
	const tabs = document.querySelectorAll('.tabheader__item');
	const tabsContent = document.querySelectorAll('.tabcontent');

	function hideTabs() {
		tabs.forEach((item) => {
			item.classList.remove('tabheader__item_active');
		});

		tabsContent.forEach((item) => {
			item.classList.remove('show', 'fade');
			item.classList.add('hide');
		});
	}
	function showTab(i = 0){
		tabs[i].classList.add('tabheader__item_active');
		tabsContent[i].classList.remove('hide');
		tabsContent[i].classList.add('show', 'fade');
	}

	hideTabs();
	showTab();

	tabsParent.addEventListener('click', function (e) {
		const target = e.target;

		tabs.forEach((item, index) => {
			if(target && target === item){
				hideTabs();
				showTab(index);
			}
		});
	});
});