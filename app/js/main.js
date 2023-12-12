/* function dataMediaQueries(array, dataSetValue) {
    // Получение объектов с медиа запросами
    const media = Array.from(array).filter(function (item, index, self) {
        if (item.dataset[dataSetValue]) {
            return item.dataset[dataSetValue].split(",")[0];
        }
    });
    // Инициализация объектов с медиа запросами
    if (media.length) {
        const breakpointsArray = [];
        media.forEach(item => {
            const params = item.dataset[dataSetValue];
            const breakpoint = {};
            const paramsArray = params.split(",");
            breakpoint.value = paramsArray[0];
            breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
            breakpoint.item = item;
            breakpointsArray.push(breakpoint);
        });
        // Получаем уникальные брейкпоинты
        let mdQueries = breakpointsArray.map(function (item) {
            return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
        });
        mdQueries = uniqArray(mdQueries);
        const mdQueriesArray = [];

        if (mdQueries.length) {
            // Работаем с каждым брейкпоинтом
            mdQueries.forEach(breakpoint => {
                const paramsArray = breakpoint.split(",");
                const mediaBreakpoint = paramsArray[1];
                const mediaType = paramsArray[2];
                const matchMedia = window.matchMedia(paramsArray[0]);
                // Объекты с нужными условиями
                const itemsArray = breakpointsArray.filter(function (item) {
                    if (item.value === mediaBreakpoint && item.type === mediaType) {
                        return true;
                    }
                });
                mdQueriesArray.push({
                    itemsArray,
                    matchMedia
                })
            });
            return mdQueriesArray;
        }
    }
}
    // Уникализация массива
 function uniqArray(array) {
	return array.filter(function (item, index, self) {
		return self.indexOf(item) === index;
	});
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}
// Вспомогательные модули плавного расскрытия и закрытия объекта ======================================================================================================================================================================
let _slideUp = (target, duration = 500, showmore = 0) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = `${target.offsetHeight}px`;
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = showmore ? `${showmore}px` : `0px`;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = !showmore ? true : false;
			!showmore ? target.style.removeProperty('height') : null;
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			!showmore ? target.style.removeProperty('overflow') : null;
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
			// Создаем событие 
			document.dispatchEvent(new CustomEvent("slideUpDone", {
				detail: {
					target: target
				}
			}));
		}, duration);
	}
}
let _slideDown = (target, duration = 500, showmore = 0) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.hidden = target.hidden ? false : null;
		showmore ? target.style.removeProperty('height') : null;
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = showmore ? `${showmore}px` : `0px`;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
			// Создаем событие 
			document.dispatchEvent(new CustomEvent("slideDownDone", {
				detail: {
					target: target
				}
			}));
		}, duration);
	}
} */


/* dropdown */
/* let isMobile = { 
    Android: function () { return navigator.userAgent.match(/Android/i); }, 
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, 
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, 
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, 
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } 
};
let body = document.querySelector('body');
if(isMobile.any()) {
        body.classList.add('touch');
        
      let arrow=document.querySelectorAll('.arrow'); 
    for(i=0; i<arrow.length; i++){
        let thisLink=arrow[i].previousElementSibling;
        let subMenu=arrow[i].nextElementSibling; 
        let thisArrow=arrow[i];
        thisLink.classList.add('parent'); 
        arrow[i].addEventListener('click', function(){
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        }); 
    }
 }else{
    body.classList.add('mouse');
} */
/* dropdown end */




/*spoller&accordion*/
/* 	const spollersArray = document.querySelectorAll('[data-spollers]');
	if (spollersArray.length > 0) {
		// Получение обычных слойлеров
		const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
			return !item.dataset.spollers.split(",")[0];
		});
		// Инициализация обычных слойлеров
		if (spollersRegular.length) {
			initSpollers(spollersRegular);
		}
		// Получение слойлеров с медиа запросами
		let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
		if (mdQueriesArray && mdQueriesArray.length) {
			mdQueriesArray.forEach(mdQueriesItem => {
				// Событие
				mdQueriesItem.matchMedia.addEventListener("change", function () {
					initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
				});
				initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
			});
		}
		// Инициализация
		function initSpollers(spollersArray, matchMedia = false) {
			spollersArray.forEach(spollersBlock => {
				spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
				if (matchMedia.matches || !matchMedia) {
					spollersBlock.classList.add('_spoller-init');
					initSpollerBody(spollersBlock);
					spollersBlock.addEventListener("click", setSpollerAction);
				} else {
					spollersBlock.classList.remove('_spoller-init');
					initSpollerBody(spollersBlock, false);
					spollersBlock.removeEventListener("click", setSpollerAction);
				}
			});
		}
		// Работа с контентом
		function initSpollerBody(spollersBlock, hideSpollerBody = true) {
			let spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
			if (spollerTitles.length) {
				spollerTitles = Array.from(spollerTitles).filter(item => item.closest('[data-spollers]') === spollersBlock);
				spollerTitles.forEach(spollerTitle => {
					if (hideSpollerBody) {
						spollerTitle.removeAttribute('tabindex');
						if (!spollerTitle.classList.contains('_spoller-active')) {
							spollerTitle.nextElementSibling.hidden = true;
						}
					} else {
						spollerTitle.setAttribute('tabindex', '-1');
						spollerTitle.nextElementSibling.hidden = false;
					}
				});
			}
		}
		function setSpollerAction(e) {
			const el = e.target;
			if (el.closest('[data-spoller]')) {
				const spollerTitle = el.closest('[data-spoller]');
				const spollersBlock = spollerTitle.closest('[data-spollers]');
				const oneSpoller = spollersBlock.hasAttribute('data-one-spoller');
				const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
				if (!spollersBlock.querySelectorAll('._slide').length) {
					if (oneSpoller && !spollerTitle.classList.contains('_spoller-active')) {
						hideSpollersBody(spollersBlock);
					}
					spollerTitle.classList.toggle('_spoller-active');
					_slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
				}
				e.preventDefault();
			}
		}
		function hideSpollersBody(spollersBlock) {
			const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._spoller-active');
			const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
			if (spollerActiveTitle && !spollersBlock.querySelectorAll('._slide').length) {
				spollerActiveTitle.classList.remove('_spoller-active');
				_slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
			}
		}
		// Закрытие при клике вне спойлера
		const spollersClose = document.querySelectorAll('[data-spoller-close]');
		if (spollersClose.length) {
			document.addEventListener("click", function (e) {
				const el = e.target;
				if (!el.closest('[data-spollers]')) {
					spollersClose.forEach(spollerClose => {
						const spollersBlock = spollerClose.closest('[data-spollers]');
						const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
						spollerClose.classList.remove('_spoller-active');
						_slideUp(spollerClose.nextElementSibling, spollerSpeed);
					});
				}
			});
		}
	}
 */
/*spoller&accordion end*/



/* lazy loading */
/* "use strict"
const lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]'); 
const loadMapBlock= document.querySelector('._load-map');
const windowHeight = document.documentElement.clientHeight;
const loadMoreBlock = document.querySelector('._load-more');
let lazyImagesPositions = []; 
if (lazyImages.length > 0) { 
	lazyImages.forEach(img => {
		if (img.dataset.src || img.dataset.srcset) {
			lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
			lazyScrollCheck();
		}
	});
}	
window.addEventListener("scroll", lazyScroll);
function lazyScroll() {
	if (document.querySelectorAll('img[data-src], source [data-srcset]').length > 0) {
		lazyScrollCheck();
	}
	if(!loadMapBlock.classList.contains('_loaded')) {
		getMap();
	}
	if(!loadMoreBlock.classList.contains('_loading')) {
		loadMore();
	}
}
function lazyScrollCheck() {
	let imgIndex = lazyImagesPositions.findIndex( item => pageYOffset > item - windowHeight);
	if (imgIndex >= 0) {
	if (lazyImages[imgIndex].dataset.src) {
		lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src; 
		lazyImages [imgIndex].removeAttribute('data-src');
	} else if (lazyImages[imgIndex].dataset.srcset) {
		lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset; 
		lazyImages [imgIndex].removeAttribute('data-srcset');
	}
		delete lazyImagesPositions[imgIndex];
	}
}
function getMap() {
	const loadMapBlockPos = loadMapBlock.getBoundingClientRect().top + pageYOffset;
	if (pageYOffset > loadMapBlockPos - windowHeight) {
		const loadMapUrl = loadMapBlock.dataset.map;
		if (loadMapUrl) {
			loadMapBlock.insertAdjacentHTML(
				"beforeend",
				`<iframe src="${loadMapUrl}" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
			);
			loadMapBlock.classList.add('_loaded');
		}
	}
}
function loadMore() {
	const loadMoreBlockPos = loadMoreBlock.getBoundingClientRect().top + pageYOffset; 
	const loadMoreBlockHeight = loadMoreBlock.offsetHeight;
	if (pageYOffset > (loadMoreBlockPos + loadMoreBlockHeight) - windowHeight)  {
		getContent();
	}
}
async function getContent() {
	if (!document.querySelector('._loading-icon')) { 
		loadMoreBlock.insertAdjacentHTML(
			"beforeend",
			`<div class="_loading-icon"></div>`
		);
	}
	loadMoreBlock.classList.add('_loading');
	let response = await fetch('../pages/_more.html', { 
		method: 'GET',
	});
	if (response.ok) {
		let result = await response.text();
		loadMoreBlock.insertAdjacentHTML('beforeend', result); 
		loadMoreBlock.classList.remove('_loading');
		if (document.querySelector('._loading-icon')) { 
			document.querySelector('._loading-icon').remove();
		}
	} else {
		alert("Oшnбka");
	}
} */
/*lazy loading end*/



/*burger jquery*/
/* $(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
}); */
/*burger jquery end*/



/*swiper js*/
/* new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
  	},
	  // If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true
	},
	autoHeight: true,
}); */
/*swiper js end*/



/*slick slider js*/
/* $(document).ready(function() {
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		infinite:true,
		autoplay:true,
		autoplaySpeed:2000,
		slidesToShow: 3,
		centerMode: true
	});
}); */
/*slick slider js end*/