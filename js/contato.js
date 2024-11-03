setTimeout(() => {
    document
        .getElementById('contact-form')
        .addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Sua mensagem foi enviada! Assim que possível te respondo!');
            this.reset();
        });
}, 300)