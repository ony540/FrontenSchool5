import './Main.css'
import Input from './Input/Input';
import Result from './Result/Result';
import { useState } from 'react';

export default function Main({setModal}) {
  const [domain, setDomain] = useState('')
  const [time, setTime] = useState('')

  return (
    <main>
        <h2 className='main-head'>“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</h2>
        <div className='main-text-wrap'>
          <h3 className='main-text'>
              <strong className='main-strong'>1만 시간의 법칙</strong>은<br/>
              어떤 분야의 전문가가 되기 위해서는<br/>
              최소한 1만 시간의 훈련이 필요하다는 법칙이다.
          </h3>
        </div>
        <Input
              setDomain={setDomain} 
              setTime={setTime} />
        <img className='loading-img' src="./img/loading.png" alt="로딩중" />
        <Result domain={domain} 
              time={10000/parseInt(time)}
              setModal={setModal} 
              setDomain={setDomain} 
              setTime={setTime}/>
    </main>
  )
}
