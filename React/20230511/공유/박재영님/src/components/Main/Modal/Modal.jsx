import './Modal.css'

export default function Modal({setModal}) {
  const closeModal = () =>{
    setModal(false)
  }
  return (
    <div onClick={closeModal} className="dim">
      <section className="modal-wrap">
        <h2 className="modal-title">화이팅!!♥♥♥</h2>
        <h3 className="modal-subtitle">당신의 꿈을 응원합니다!</h3>
        <img className="modal-img" src="./img/licat.png" alt="라이캣 이미지" />
        <button onClick={closeModal} className="modal-btn">종료하고 진짜 훈련하러 가기 GO!GO!</button>
      </section>
    </div>
  )
}
