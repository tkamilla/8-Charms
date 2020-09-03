// Selector
const cards = document.querySelectorAll('.card');
const detail_wrap = document.querySelector('.detail-wrap');
const letter = document.querySelector('.envelope-wrap');
const paper = document.querySelector('.paper');
const detail = detail_wrap.querySelector('.detail')
const detail_text = detail_wrap.querySelector('.detail p')
const container = document.querySelector('.container')
const title = document.querySelector('.title')
const triangle = document.querySelector('.triangle')
const cards_wrap = document.querySelector('.cards')
const subtitle = document.querySelector('.subtitle')

// Event listeners
letter.addEventListener('click', (e) => openLetter(e))
window.addEventListener('keydown', function(e){
  if(e.keyCode == 27){
    closeModal();
  }
})
window.addEventListener('click', function(e){
  if(e.target == detail || 
    e.target == detail_text && 
    detail_wrap.classList.contains('show')){
    return
  }
  else if (detail_wrap.classList.contains('show') && 
  e.target == container || 
  e.target == paper || e.target == title || e.target == cards_wrap || e.target == subtitle

  ){
    closeModal()
  }
})



// Functions
function openLetter(e) {
  triangle.classList.add('flip')
  triangle.classList.add('fadeout')
  

  setTimeout(() => {
    paper.classList.add('open')

    setTimeout(() => {

      cards.forEach(card => {
        card.addEventListener('mouseenter', (e)=>{
          openCard(e)
          card.addEventListener('click', function(e){
            const inner = card.querySelector('.card-wrap .card-inner p')
            openModal(inner)
          })
        })
        card.addEventListener('mouseleave', (e)=>{
          closeCard(e)
        })
      })
    }, 450);
  }, 300);
}

function openCard(e) {
  const cover = e.currentTarget.firstElementChild.lastElementChild
  cover.classList.remove('unflip')
  cover.classList.add('flip')
}
function closeCard(e) {
  const cover = e.currentTarget.firstElementChild.lastElementChild
  cover.classList.remove('flip')
  cover.classList.add('unflip')
}

function openModal(inner){
  detail_wrap.classList.replace('hidden', 'show')
  detail_text.innerHTML = inner.textContent
}

function closeModal(){
  detail_wrap.classList.replace('show','hidden')
}

// JS Media Queries
let size = window.matchMedia("(max-width: 800px)");
function openMobile(size){
  if (size.matches){
    cards.forEach(card => {
      card.addEventListener('click', (e)=>{
      const inner = card.querySelector('.card-wrap .card-inner p')
      openModal(inner)
      })
    })
  }
  window.addEventListener('click', function(e){
    if(e.target == detail || 
      e.target == detail_text && 
      detail_wrap.classList.contains('show')){
      return
    }
    else if (detail_wrap.classList.contains('show') && 
    e.target == container || 
    e.target == paper || e.target == title
    ){
      closeModal()
    }
  })
}
openMobile(size)