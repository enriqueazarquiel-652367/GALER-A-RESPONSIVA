const imagenes = [
    { archivo: 'arbol-rosa', desc: 'Árbol rosa' },
    { archivo: 'atardecer', desc: 'Atardecer' },
    { archivo: 'campo', desc: 'Campo' },
    { archivo: 'flor-azul', desc: 'Flor azul' },
    { archivo: 'flores', desc: 'Flores' },
    { archivo: 'lavar-ropa', desc: 'Lavar ropa' },
    { archivo: 'miradero', desc: 'Miradero' },
    { archivo: 'seta', desc: 'Seta' },
    { archivo: 'trigo', desc: 'Trigo' }
];

const galeriaContainer = document.getElementById('galeria-container');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTexto = document.getElementById('modal-texto');
const btnCerrar = document.querySelector('.cerrar');

imagenes.forEach(imgData => {
    const card = document.createElement('div');
    card.classList.add('foto-card');

    const imgTag = document.createElement('img');

    imgTag.srcset = `
        imagenes/${imgData.archivo}-small.jpg 400w,
        imagenes/${imgData.archivo}-medium.jpg 800w,
        imagenes/${imgData.archivo}-large.jpg 1200w
    `;

    imgTag.src = `imagenes/${imgData.archivo}-medium.jpg`;
    imgTag.sizes = "(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw";
    imgTag.alt = imgData.desc;

    const descTag = document.createElement('p');
    descTag.classList.add('foto-desc');
    descTag.textContent = imgData.desc;

    card.addEventListener('click', () => {
        abrirModal(imgData);
    });

    card.appendChild(imgTag);
    card.appendChild(descTag);
    galeriaContainer.appendChild(card);
});

function abrirModal(imgData) {
    modalImg.src = `imagenes/${imgData.archivo}-xlarge.jpg`;
    modalTexto.textContent = imgData.desc;
    modal.classList.add('activo');
}

btnCerrar.addEventListener('click', () => {
    modal.classList.remove('activo');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('activo');
    }
});