const article = document.querySelector('.popup');
const openBtn = document.querySelector('.btn-open');
const closeBtn = document.querySelector('.btn-close');

const firstEl = article.querySelector('a'); //첫번쨰 목록 노드


function openPopup (){
    article.classList.add('active');
    firstEl.focus();
}
function closePopup (){
    article.classList.remove('active');
}

openBtn.addEventListener('click',openPopup);
closeBtn.addEventListener('click',closePopup);


// 접근성 높이기
//모달이 떴을때 마지막으로 닫기버튼에서 탭을하면 이전 목록으로 돌아가도록 하기
closeBtn.addEventListener('keydown',function(e){
    if(!e.shiftKey && e.key === 'Tab'){
        console.log('tab만 누름');
        e.preventDefault();
        firstEl.focus()
    } 
});

//첫번째 버튼에서 shift+tab하면 close버튼 포커스하기
firstEl.addEventListener('keydown',function(e){
   if(e.shiftKey && e.key === 'Tab'){
        console.log('shift + tab')
        e.preventDefault();
        closeBtn.focus();
    }
})

// 팝업 밖 클릭 시 모달닫기 
const dim = document.querySelector('.dim');
dim.addEventListener('click',closePopup);


