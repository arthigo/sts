const bodyTop = document.getElementById("bodyTop");
const flavor = document.getElementById("flavor");
const servico = document.getElementById("servico");
const contato = document.getElementById("contato");
const contatoForm = document.getElementById("contato-form");
const sobre = document.getElementById("sobre");
const formEmail = document.getElementById("form-email");
const formText = document.getElementById("form-text");
const formBtn = document.getElementById("form-btn");

flavor.classList.add('fade-in');

servico.addEventListener('click', () => {
    flavor.style.display = "block";
    contatoForm.style.display = "none";
    flavor.classList.remove("flavor-text");    
    flavor.classList.add("servico-text");    
    flavor.innerText = "Rich in heavy atoms two ghostly white figures in coveralls and helmets are softly dancing across the centuries. Star stuff harvesting star light adipisci velit nisi ut aliquid ex ea commodi consequatur rich in mystery permanence of the stars preserve and cherish that pale blue dot and billions upon billions upon billions upon billions upon billions upon billions upon billions."
})
sobre.addEventListener('click', () => {
    flavor.style.display = "block";
    contatoForm.style.display = "none";
    flavor.classList.remove("flavor-text");
    flavor.classList.add("servico-text");
    flavor.innerHTML = "A STS (Simple Technologic Solution) foi criada para atender as diversas demandas dos clientes de forma dinâmica,"
        + "sempre visando a praticidade e agilidade."
        + "<p>Nosso objetivo é a resolução de desafios tecnológicos através de um atendimento seguro, rápido e eficiente.</p>";
})
contato.addEventListener('click', () => {
    flavor.style.display = "none";
    contatoForm.style.display = "block";
})

formEmail.addEventListener('input', checkFormInput);
formText.addEventListener('input', checkFormInput);

/* Habilita/Desabilita submit */
function checkFormInput() {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    formBtn.disabled = !(re.test(formEmail.value) && formText.value !== '');
}

/* Muda o background */
let i = 0;
const imgQuantity = 6;
function switchImg() {
    if (i >= imgQuantity) { i = 0 };
    bodyTop.style.backgroundImage = `url(img/${++i}.jpeg)`;
}

(function thanks() {
    if (document.location.href.includes('#') && performance.getEntriesByType("navigation")[0].type === 'navigate') {
        window.history.replaceState({}, document.title, "/" + "");
        flavor.classList.remove("flavor-text");
        flavor.classList.add("servico-text");
        flavor.style.opacity = 1;
        flavor.innerText = "Obrigado por entrar em contato conosco. Responderemos assim que avaliarmos a sua solicitação."
        
        setInterval(() => {
            flavor.classList.remove("servico-text");
            flavor.classList.add("flavor-text");
            flavor.innerText = "Simple Thecnologic Solution"
        }, 5000);
    }
})();

//contato.click(); //remove
setInterval(switchImg, 5000); //enable

/*

Sobre nós

A STS (Simple Technologic Solution) foi criada para atender as diversas demandas dos clientes de forma dinâmica, sempre visando a praticidade e agilidade.

Objetivo

Nosso objetivo é a resolução de desafios tecnológicos através de um atendimento seguro, rápido e eficiente.

*/