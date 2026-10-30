const bar = document.getElementById('bar');

const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', (e)=>{
        e.preventDefault();
        nav.classList.remove('active');
    })
}

const whatsappForm = document.getElementById('whatsapp-form');

if (whatsappForm){
    whatsappForm.addEventListener('submit', (event)=>{
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        const phone = '526361140223';
        const lines = [`Hola, soy ${name}.`];
        if (email) lines.push(`Correo: ${email}`);
        if (subject) lines.push(`Motivo: ${subject}`);
        lines.push(`Mensaje: ${message}`);

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(lines.join('\n'))}`;
        window.open(url, '_blank');
    })
}

const currentYear = document.getElementById('currentYear');

if (currentYear){
    currentYear.textContent = new Date().getFullYear();
}
