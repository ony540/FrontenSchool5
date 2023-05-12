import './Result.css'

export default function Result({domain,time,setModal}) {
  const openModal = ()=>{
    setModal(true)
  }

  const shareOver = (e) =>{
    e.currentTarget.childNodes[0].style.display='none'
  }
  const shareLeave = (e)=>{
    e.currentTarget.childNodes[0].style.display='inline-block'
  }

  return (
    <section className='result-section'>
      <div className='result-text'>
        <span>당신은<strong className='result-strong'>{domain}</strong>전문가가 되기 위해서</span>
      </div>
      <div className='result-text'>
        <span>대략<strong className='result-strong'>{Number.isFinite(parseInt(time)) ? parseInt(time) : '10000' }</strong>일 이상 훈련하셔야 합니다! :)</span>
      </div>

      <div className='btn-wrap'>
        <button onClick={openModal} className='train-btn'>훈련하러 가기 GO!GO!</button>
        <div onMouseOver={shareOver} onMouseLeave={shareLeave}  className='share-box'>
          <button className='share-btn'>공유하기</button>
        </div>
      </div>
    </section>
  )
}
