"use strict";let mouseDown=!1,customFocusList=document.querySelectorAll(".main-header a,\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.main-footer a,\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.catalog-depth-nav a,\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.filter-range-slider,\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.filter-form label,\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.catalog-sorting-section a,\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.compare-item,\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.catalog-pagination-container a,\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.contact-us-map,\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.promo-pagination-list button");for(let t=0;t<customFocusList.length;t++)customFocusList[t].addEventListener("mousedown",function(){mouseDown=!0}),customFocusList[t].addEventListener("mouseup",function(t){t.preventDefault(),mouseDown=!1}),customFocusList[t].addEventListener("mousemove",function(t){t.preventDefault(),mouseDown=!1}),customFocusList[t].addEventListener("focus",function(){mouseDown||customFocusList[t].classList.add("focused-by-keyboard")}),customFocusList[t].addEventListener("blur",function(){customFocusList[t].classList.remove("focused-by-keyboard")});let promoImagesList=document.querySelectorAll(".promo-image-slide"),promoDescriptionsList=document.querySelectorAll(".promo-description-slide"),promoButtonsList=document.querySelectorAll(".promo-pagination-list button"),promoLength=promoDescriptionsList.length;if(0!==promoLength){let t=0;function showPromoSlide(e){if(e!=t){for(let t=0;t<promoLength;t++)promoButtonsList[t].disabled=!0;promoImagesList[t].classList.remove("current-slide"),promoDescriptionsList[t].classList.remove("current-slide"),promoButtonsList[t].classList.remove("current-button"),promoImagesList[e].classList.add("current-slide"),promoDescriptionsList[e].classList.add("current-slide"),promoButtonsList[e].classList.add("current-button"),promoDescriptionsList[t].style.animation="dissolve-down 1s",promoImagesList[t].style.animation="dissolve-down 1s",setTimeout(function(){promoDescriptionsList[t].style.animation="none",promoImagesList[t].style.animation="none"},650),setTimeout(function(){for(let t=0;t<promoLength;t++)promoButtonsList[t].disabled=!1;promoButtonsList[e].disabled=!0,t=e},650)}}promoDescriptionsList.length===promoImagesList.length&&promoDescriptionsList.length===promoButtonsList.length||alert("Я сломался из-за того, что количество слайдов изображений, их описаний, и кнопок, им соответствующих, не равно ( ͡° ͜ʖ ͡°)");for(let t=0;t<promoLength;t++)promoButtonsList[t].onclick=function(e){e.preventDefault(),promoButtonsList[t].blur(),showPromoSlide(t)},promoButtonsList[t].onkeyup=function(e){32==e.keyCode&&setTimeout(function(){t<promoLength-1?promoButtonsList[t+1].focus():promoButtonsList[0].focus()},720)}}let servicesButtonList=document.querySelectorAll(".services-button"),servicesInfoList=document.querySelectorAll(".services-info-item"),servicesLength=servicesButtonList.length;if(0!==servicesLength){let t=0;function showServicesSlide(e){servicesButtonList[t].disabled=!1,servicesButtonList[e].disabled=!0,servicesInfoList[t].style.animation="dissolve 1s",setTimeout(function(){servicesInfoList[e].style.animation="appear-from-left 1s"},200);let o=document.querySelector(".services-info-list"),s=document.querySelector(`.services-info-item:nth-of-type(${e+1})`);o.style.height=`${s.clientHeight}px`,servicesInfoList[t].classList.remove("current-info-item"),servicesButtonList[t].classList.remove("services-current-button"),servicesInfoList[e].classList.add("current-info-item"),servicesButtonList[e].classList.add("services-current-button"),t=e}servicesButtonList.length!==servicesInfoList.length&&alert("Добавил кпопку - добавь и слайд ( ͡° ͜ʖ ͡°)");for(let t=0;t<servicesLength;t++)servicesButtonList[t].onclick=function(e){e.preventDefault(),showServicesSlide(t)}}let filterInputList=document.querySelectorAll(".filter-form input"),filterLabelList=document.querySelectorAll(".filter-form label"),labelsLength=filterLabelList.length;for(let t=0;t<labelsLength;t++)filterLabelList[t].onkeyup=function(e){32!=e.keyCode&&13!=e.keyCode||(e.preventDefault(),filterInputList[t].checked&&"checkbox"==filterInputList[t].type?filterInputList[t].checked=!1:filterInputList[t].checked=!0)};let mapPopup=document.querySelector(".map-popup"),mapIframe=document.querySelector(".map-popup iframe");if(mapPopup){let t=document.querySelector(".contact-us-map"),e=document.querySelector(".close-map-popup");t.onclick=function(t){t.preventDefault(),mapPopup.classList.add("is-displayed"),mapPopup.focus()},e.onclick=function(e){e.preventDefault(),mapPopup.classList.remove("is-displayed"),t.focus()},window.addEventListener("keydown",function(t){27===t.keyCode&&mapPopup.classList.contains("is-displayed")&&(t.preventDefault(),mapPopup.classList.remove("is-displayed"))})}let writeUsPopup=document.querySelector(".write-us-popup"),writeUsForm=document.querySelector(".write-us-form");if(writeUsPopup){let t=document.querySelector(".write-us-button"),e=document.querySelector(".close-write-us-popup"),o=document.getElementById("write-us-name"),s=document.getElementById("write-us-email"),i=document.getElementById("write-us-message"),n=!0,r="",u="";try{r=localStorage.getItem("name"),u=localStorage.getItem("email")}catch(t){n=!1}t.onclick=function(t){t.preventDefault(),writeUsPopup.classList.add("is-displayed"),setTimeout(function(){r?(o.value=r,s.value=u,i.focus()):o.focus()},100)},writeUsForm.addEventListener("submit",function(t){o.value&&s.value&&i.value?n&&(localStorage.setItem("name",o.value),localStorage.setItem("email",s.value),writeUsPopup.classList.remove("error-animation")):(t.preventDefault(),writeUsPopup.classList.remove("error-animation"),writeUsPopup.offsetWidth,writeUsPopup.classList.add("error-animation"))}),e.onclick=function(t){t.preventDefault(),writeUsPopup.classList.remove("is-displayed")},window.addEventListener("keydown",function(t){27===t.keyCode&&writeUsPopup.classList.contains("is-displayed")&&(t.preventDefault(),writeUsPopup.classList.remove("is-displayed"))})}