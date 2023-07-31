
let next = document.querySelector('.next')
let pre = document.querySelector('.prev')

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})
pre.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})

//see more button
let readMoreBtn = document.querySelector('.readmore-btn')
let text = document.querySelector('.des')
readMoreBtn.addEventListener('click',(msg)=>{
    text.classList.toggle('show-more');
    if(readMoreBtn.innerHTML === 'See More'){
        readMoreBtn.innerHTML = 'See Less';
    } else{
        readMoreBtn.innerHTML = 'See More';
    }
})

