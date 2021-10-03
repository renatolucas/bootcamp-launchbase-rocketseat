const cards = document.querySelectorAll('.card')
const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close-modal')
const maximizeModal = document.querySelector('.maximize-modal')
let postId

for (let card of cards){
    card.addEventListener("click", function(){
        postId = card.getAttribute("id");
        modalOverlay.classList.add("active")
        document.querySelector('iframe').src = `https://blog.rocketseat.com.br/${postId}`
    })
}

closeModal.addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})

maximizeModal.addEventListener('click', function(){
    if (modal.classList.contains('maximize'))
        modal.classList.remove('maximize')
    else
        modal.classList.add('maximize')
})
