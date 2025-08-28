// Heart button feature
const heartIcon = document.getElementsByClassName('heart-icon');
for(const heart of heartIcon){
    heart.addEventListener('click', function(){
    const heartCount = parseInt(document.getElementById('heart-count').innerText);
    const totalHeartCount = heartCount + 1;
    document.getElementById('heart-count').innerText = totalHeartCount;
    })
}