//FUNÇÃO PARA MOSTRAR OS INPUTS DE ERRO AO NÃO PREENCHIMENTO DO FORMULÁRIO
function alertasInput() {
    const txtOfertas = document.querySelector('#txtOfertas');
    const btnOfertas = document.querySelector('.botao-ofertas');

    btnOfertas.addEventListener('click', (event) => {
        if (txtOfertas.value === '' || !txtOfertas.value.includes("@") || txtOfertas.value.length < 12) {
            txtOfertas.style.border = '2px solid red';
            txtOfertas.title = 'Insira um e-mail válido';
            event.preventDefault();
        } else {
            alert(`Fique atento em ${txtOfertas.value} para visualizar suas ofertas`);
            txtOfertas.value = '';
            txtOfertas.style.border = '1px solid #000';
        }
    });
}
alertasInput();

//FUNÇÃO PARA ADICIONAR UM SCROLL SUAVE AO CLICAR NOS LINKS DO MENU
function scrollSuave() {
    const links = document.querySelectorAll('.item-menu');
    const arrayLinks = Array.from(links);

    arrayLinks.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href);

            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    })
}
scrollSuave();

//FUNÇÃO PARA FAZER UM FETCH E MUDAR A FRASE A CADA 5 SEGUNDOS
async function mudarFrase() {
    const campoFrase = document.querySelector('#campo-frases');
    const responseFrases = await fetch('js/frases.json');
    const bodyFrases = await responseFrases.json();

    setInterval(() => {
        const randomElement = bodyFrases[Math.floor(Math.random() * bodyFrases.length)]; //Escolhendo um elemento aleatório do Array
        campoFrase.innerHTML = `"${randomElement.frase}"`;
    }, 5000);

    // botaoMudar.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     const randomElement = bodyFrases[Math.floor(Math.random() * bodyFrases.length)]; //Escolhendo um elemento aleatório do Array
    //     campoFrase.innerHTML = `"${randomElement.frase}"`;
    // });
}
mudarFrase();

//FUNÇÃO PARA MARCAR O ITEM DE MENU QUANDO ESTIVER EM SUA RESPECTIVA SECTION
function marcarItemMenu() {
    const links = document.querySelectorAll('.item-menu');
    const arrayLinks = Array.from(links);

    arrayLinks[0].style.fontWeight = 'bold';
    arrayLinks[0].style.color = '#222';
    
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 0 && window.scrollY <= 420) {
            arrayLinks[0].style.fontWeight = 'bold';
            arrayLinks[0].style.color = '#222';
        } else {
            arrayLinks[0].style.fontWeight = 'normal';
            arrayLinks[0].style.color = '#fff';
        }

        if (window.scrollY >= 500 && window.scrollY <= 1500) {
            arrayLinks[1].style.fontWeight = 'bold';
            arrayLinks[1].style.color = '#222';
        } else {
            arrayLinks[1].style.fontWeight = 'normal';
            arrayLinks[1].style.color = '#fff';
        }

        if (window.scrollY >= 1500 && window.scrollY <= 2100) {
            arrayLinks[2].style.fontWeight = 'bold';
            arrayLinks[2].style.color = '#222';
        } else {
            arrayLinks[2].style.fontWeight = 'normal';
            arrayLinks[2].style.color = '#fff';
        }

        if (window.scrollY >= 2100 && window.scrollY <= 2300) {
            arrayLinks[3].style.fontWeight = 'bold';
            arrayLinks[3].style.color = '#222';
        } else {
            arrayLinks[3].style.fontWeight = 'normal';
            arrayLinks[3].style.color = '#fff';
        }        
        
        if (window.scrollY >= 2400 && window.scrollY <= 2700) {
            arrayLinks[4].style.fontWeight = 'bold';
            arrayLinks[4].style.color = '#222';
        } else {
            arrayLinks[4].style.fontWeight = 'normal';
            arrayLinks[4].style.color = '#fff';
        }

        if (window.scrollY > 2700) {
            arrayLinks[5].style.fontWeight = 'bold';
            arrayLinks[5].style.color = '#222';
        } else {
            arrayLinks[5].style.fontWeight = 'normal';
            arrayLinks[5].style.color = '#fff';
        }

        if (window.innerWidth < 800) {
            arrayLinks.forEach((item) => {
                item.style.fontWeight = 'normal';
                item.style.color = '#fff';
            })
        }
    })
}
marcarItemMenu();

//FUNÇÃO PARA MOSTRAR O MENU HAMBURGUER
function apareceMenu() {
    const iconeMenu = document.querySelector('.botao-menu');
    const itemMenu = document.querySelector('.menu-oculto');
    const cssItem = getComputedStyle(itemMenu);

    console.log(window.innerWidth);

    iconeMenu.addEventListener('click', (event) => {
        event.preventDefault();

        if (cssItem.display === "none") {
            itemMenu.style.display = "block";
            iconeMenu.innerHTML = '&#10008;';
            itemMenu.classList.add('ativo');
        } else if (cssItem.display === "block") {
            itemMenu.style.display = "none";
            iconeMenu.innerHTML = '&#9776;';
        }
    });

    window.addEventListener('mousemove', () => {
        if (window.innerWidth > 960) {
            itemMenu.style.display = "none";
            iconeMenu.innerHTML = '&#9776;';
        }
    })
}
apareceMenu();

alert(window.innerWidth);