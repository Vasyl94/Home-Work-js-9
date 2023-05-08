import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const obj = {position,delay};
  const shouldResolve = Math.random() > 0.3;
  return new Promise ((resolve,reject) => {

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(obj)
      } else {
        // Reject
        reject(obj)
      }
    }, delay);
  })
}
const form = document.querySelector(".form")


form.addEventListener("submit",submittingForm)

function submittingForm (e) {
  e.preventDefault()

  let delay = Number(form.delay.value)

  for (let i = 0; i < form.amount.value; i += 1) {
    createPromise(i, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  delay += Number(form.step.value)
  }
}

