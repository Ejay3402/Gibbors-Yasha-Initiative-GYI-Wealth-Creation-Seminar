const scriptURL = 'https://script.google.com/macros/s/AKfycbxJvcqh_st4q5WhZVHTgLOmDkOishlxh2ctkbMXlNpt8DB4ME5wyK0UXOnhX0ObXumu/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

