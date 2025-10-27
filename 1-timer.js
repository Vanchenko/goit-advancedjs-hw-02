import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as t}from"./assets/vendor-D0gBiHs0.js";const e=document.querySelector(".gallery"),i=galleryItems.map(a=>`
<li class="gallery__item">
  <a class="gallery__link" href="${a.original}">
    <img class="gallery__image" src="${a.preview}"
      data-source="${a.original}" alt="${a.description}" />
  </a>
</li>`).join("");e.insertAdjacentHTML("beforeend",i);new t(".gallery a",{enableKeyboard:!0,captionPosition:"bottom",captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250,showCounter:!1,spinner:!0});
//# sourceMappingURL=1-timer.js.map
