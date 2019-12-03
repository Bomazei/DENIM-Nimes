// filter button
const filter = document.querySelector('.filter-button')
const filterOpened = document.querySelector('.filter-button-open')

const selector = document.querySelectorAll('.selector')
const selectorCont = document.querySelector('.selector-content')

filter.addEventListener('click', function(){
    this.classList.toggle('arrowFlip')
    filterOpened.classList.toggle('close')
})
selector.forEach(x => {
    x.addEventListener('click', function(){
        this.classList.toggle('arrowFlip')
        this.lastElementChild.classList.toggle('close')
})
})
