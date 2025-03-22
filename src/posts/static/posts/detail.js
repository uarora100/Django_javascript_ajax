console.log('hello world detail')

const backBtn = document.getElementById('back-btn')         // cleck event for back button

backBtn.addEventListener('click', () =>{
    history.back()                  // it means back to main page
})