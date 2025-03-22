console.log('hello world detail')

const backBtn = document.getElementById('back-btn')         // cleck event for back button
const updateBtn = document.getElementById('update-btn')
const deleteBtn = document.getElementById('delete-btn')
const url = window.location.href + "data/"
const spinnerBox = document.getElementById('spinner-box')

backBtn.addEventListener('click', () =>{
    history.back()                  // it means back to main page
})

$.ajax({
    type: 'GET',
    url: url,
    success: function(response){
        console.log(response)
        const data = response.data

        if (data.logged_in !== data.author){        
            console.log('different')
        }
        else{
            console.log('same')
            updateBtn.classList.remove('not-visible')
            deleteBtn.classList.remove('not-visible')
        }
        spinnerBox.classList.add('not-visible')

    },
    error: function(error){
        console.log(error)
    }
})