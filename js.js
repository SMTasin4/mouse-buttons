let btn = document.querySelector('#btn')
btn.addEventListener('contextmenu',(e)=>{
    e.preventDefault()
})
btn.addEventListener('mouseup',(e)=>{
    let msg = document.querySelector ('#message')
    switch (e.button){
        case 0:
            msg.textContent = 'left btn clicked'
            break
        case 1:
            msg.textContent = 'middle btn clicked'
            break
        case 2:
            msg.textContent = 'right btn clicked'
            break
        default:
            msg.textContent = 'unknown btn clicked'
    }
})