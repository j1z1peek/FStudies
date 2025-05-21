const openModal = document.getElementById('open-modal')
const closeModal = document.getElementById('times')
const dialog = document.getElementById('dialog')

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('dialog').showModal();
});

openModal.addEventListener('click', function(){
    dialog.showModal()
})

closeModal.addEventListener('click', function(){
    dialog.close()
})


