import './Input.css'

export default function Input({ setDomain, setTime }) {

  const clickEvent = () => {
    const domainInp = document.querySelector('#domain')
    const timeInp = document.querySelector('#time')
    if (domainInp.value === '' || timeInp.value === '') {
      alert('입력하지 않은 값이 있습니다')
      if (domainInp.value === '') {
        domainInp.focus()
      } else {
        timeInp.focus()
      }
    } else {
      if (Number.isNaN(parseInt(timeInp.value)) || parseInt(timeInp.value) > 19) {
        if (Number.isNaN(parseInt(timeInp.value))) {
          alert('시간은 숫자로 입력해주세요')
        } else {
          if (parseInt(timeInp.value) > 24) {
            alert('24시간이 넘는건 불가능해요')
          } else {
            alert(`안주무세요?`)
          }
        }
        timeInp.value = ''
        timeInp.focus()
      } else {
        setDomain(domainInp.value)
        setTime(timeInp.value)

        const loadingImg = document.querySelector('.loading-img')
        const result = document.querySelector('.result-section')
        loadingImg.style.display = 'flex'
        result.style.display = 'none'
        document.querySelector('.share-btn').style.display = 'inline-block'

        setTimeout(() => {
          loadingImg.style.display = 'none'
          result.style.display = 'block'
        }, 1000)
      }
    }
  }

  return (
    <section className='input-section'>
      <div className='input-text'>
        <span>나는</span>
        <label className='a11y-hidden' htmlFor="domain">아이디 입력</label>
        <input id='domain' type="text" placeholder='예)프로그래밍' />
        <span>전문가가 될 것이다.</span>
      </div>
      <div className='input-text'>
        <span>그래서 앞으로 매일 하루에</span>
        <label className='a11y-hidden' htmlFor="time">시간 입력</label>
        <input id='time' type="text" placeholder='예)5시간' />
        <span>시간씩 훈련할 것이다.</span>
      </div>
      <div className='inp-btn-wrap'>
        <button className='input-btn' onClick={clickEvent}>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
        <img className='click-img' src="./img/click.png" alt="포인터 이미지" />
      </div>
    </section>
  )
}
