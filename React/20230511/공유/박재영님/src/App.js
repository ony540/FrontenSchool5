import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Modal from './components/Main/Modal/Modal';
import { useState } from 'react';

function App() {  
  const [modal, setModal] = useState(false)
  
  return (
    <>
      <Header />
      <Main setModal={setModal}/>
      <Footer />
      {modal && <Modal setModal={setModal}/>}
    </>
  );
}
export default App;
