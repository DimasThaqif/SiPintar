// document.querySelectorAll('.btnDetail').forEach(item => {
//     item.addEventListener('click', (e) => {
//         let parent = e.target.parentNode.parentNode;


//         let gambar = parent.querySelector('.card-img-top').src;
//         let judul = parent.querySelector('.card-text').innerHTML;
//         let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML : '<i>tidak ada informasi</i>';


//         let tombolModal = document.querySelector('.btnModal');
//         tombolModal.click();

//         document.querySelector('.modalTittle').innerHTML = judul;
//         let image = document.createElement('img');
//         image.src = gambar;
//         image.classList.add('w-100')
//         document.querySelector('.modalImage').innerHTML = '';
//         document.querySelector('.modalImage').appendChild(image);
//         document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
//     });

// });

document.addEventListener('DOMContentLoaded', function () {
    const btnDetails = document.querySelectorAll('.btnDetail');
    const modalTitle = document.querySelector('.modalTittle');
    const modalDeskripsi = document.querySelector('.modalDeskripsi');
    const modalImage = document.querySelector('.modalImage');
    const btnQuiz = document.querySelector('.btnQuiz');

    btnDetails.forEach(btn => {
        btn.addEventListener('click', function () {
            const quizUrl = this.getAttribute('data-quiz-url');
            const card = this.closest('.card');
            const cardImage = card.querySelector('.card-img-top');
            const cardTitle = card.querySelector('.card-text').textContent;

            modalTitle.textContent = cardTitle;
            modalDeskripsi.textContent = card.querySelector('.deskripsi').textContent;
            modalImage.innerHTML = cardImage.outerHTML;
            btnQuiz.setAttribute('href', quizUrl);

            // Open the modal
            const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
            modal.show();
        });
    });
});