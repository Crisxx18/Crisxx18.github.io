const yes = document.querySelector('#yes');

yes.addEventListener('click',function () {
    alert(' sabia que me ibas a decir que si 7u7')

});

const No = document.querySelector('#No');

No.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*700);
    const randomY = parseInt(Math.random()*700);
    No.style.setProperty('top',randomY+'%');
    No.style.setProperty('left',randomX+'%');
    No.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})

