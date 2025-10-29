import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formEl = document.querySelector(".form");
formEl.addEventListener("submit", GenProm);

function createPromise(state, del) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (state ==='fulfilled') {
      resolve({ del });
    } else {
      reject({ del });
    }
    }, del );
  });
}

function GenProm(evt) {
  evt.preventDefault();
  const state = evt.currentTarget.elements.state.value;
  let delay = Number(evt.currentTarget.elements.delay.value);
  
      createPromise(state, delay)
        .then(({ del }) => {
          iziToast.success({
            message: `✅ Fulfilled promise in ${del}ms`,
            position: 'topCenter',
          });
        })
        .catch(({ del }) => {
          iziToast.error({
            message: `❌ Rejected promise in ${del}ms`,
            position: 'topCenter',
          });
        })
  evt.currentTarget.reset();
}
