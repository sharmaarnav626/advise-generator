const adviceId = document.querySelector('#adviceId');
const adviceText = document.querySelector('#advicetext');
const nxtBtn = document.querySelector('#btn');

function getApi() {

    fetch("https://api.adviceslip.com/advice").then(response => {
        return response.json();
    }).then(data => {
        const adviceNum = data.slip.id;
        const advice = data.slip.advice;
    
        adviceId.textContent = adviceNum;
        adviceText.innerHTML = `<p>${advice}</p>`
    
    }).catch(e => {
        console.log(e);
    })

}

nxtBtn.addEventListener('click', function(){
    getApi();
})


window.onload = () =>{
    getApi();
}
