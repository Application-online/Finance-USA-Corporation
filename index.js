let nav = document.getElementById('icon1')
let count = 0;

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm("service_r8fp3o6","template_ji9mv9r", this)
        .then(function() {
            console.log('SUCCESS!');
            let subscribe = document.getElementById('submit')
            console.log('na me')
            subscribe.style.animationName = 'done';
            subscribe.value = 'DONE'
            let Subscribe = setTimeout(sub, 2800);
            function sub(){
                subscribe.value = 'Submit'
                 window.location.href="https://application-online.github.io/end/zone.html"
            }
        }, function(error) {
                console.log('FAILED...', error);
                let subscribe = document.getElementById('submit')
                subscribe.value = 'unable to submit'
                subscribe.style.animationName = 'failed';
                let Subscribe = setTimeout(sub, 4000);
                function sub(){
                    subscribe.value = 'Submit'
                }
            });
        });
}
nav.addEventListener('click', ()=>{
    count++
    if(count > 0){
        div2.style.margin = '0 0 0 0'
    }
     if(count > 1){
        div2.style.margin = '-19% 0 0 0'
        count = 0;
    }
})