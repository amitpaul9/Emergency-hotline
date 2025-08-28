// Heart button feature
const heartIcon = document.getElementsByClassName('heart-icon');
for(const heart of heartIcon){
    heart.addEventListener('click', function(){
    const heartCount = parseInt(document.getElementById('heart-count').innerText);
    const totalHeartCount = heartCount + 1;
    document.getElementById('heart-count').innerText = totalHeartCount;
    })
}

//Copy button feature
const copyBtns = document.getElementsByClassName('copy-btn');
for(const copyBtn of copyBtns){
    copyBtn.addEventListener('click', function(){
    const copyCount  = parseInt(document.getElementById('copy-count').innerText);
    const totalCopyCount = copyCount + 1;
    document.getElementById('copy-count').innerText = totalCopyCount;
    })
}


// call button feature
const callBtns = document.getElementsByClassName('call-btn');

for(const callBtn of callBtns){
    callBtn.addEventListener('click', function(){

        // alert feature
        const serviceTitle = callBtn.parentNode.parentNode.childNodes[3].innerText;
        const serviceNumber = callBtn.parentNode.parentNode.childNodes[7].innerText;
       alert(`📞Calling ${serviceTitle} ${serviceNumber}`)

    
        // coin reduce feature
        const coins = parseInt(document.getElementById('coins').innerText);
        const coinsCount = coins - 20;
        document.getElementById('coins').innerText = coinsCount;


        // call history add feature
        const callHistory = document.getElementById('call-history');
        const newCallHistory = document.createElement('div');
        

        // Time feature
        let now = new Date();

        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;




       newCallHistory.innerHTML = `
         <div class="flex justify-between p-4 bg-[#FAFAFA] rounded-[8px] mx-4 mb-2">
    <div >
        <h1 class="text-[15px] font-semibold ">${serviceTitle}</h1>
        <p class="text-[#5C5C5C] text-[14px]">${serviceNumber}</p>
    </div>
    <p>${`${hours}:${minutes}:${seconds} ${ampm}`}</p>
    </div>
        `
        callHistory.append(newCallHistory)


        
    })} 
    

        
