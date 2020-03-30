const form = document.querySelector('.notify')
const feed = document.querySelector('.feedback')
const input = document.querySelector('#maiil')
const regexp =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


form.addEventListener('submit', e => {
    e.preventDefault()

    // validate email
    const mail = form.mail.value;

    if(mail == ""){
        feed.innerHTML = 'field must not be empty'
        input.style.borderColor = 'red'
    }else if(regexp.test(mail) == false){
        feed.innerHTML = 'Please provide a valid email address'
        input.style.borderColor = 'red'
    }
    else {
        feed.style.display = 'none';
        input.style.borderColor = 'green'
    }
})


