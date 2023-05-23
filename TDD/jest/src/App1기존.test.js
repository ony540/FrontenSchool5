// import { render, screen } from '@testing-library/react';
// import App from './App';

test('renders learn react link', () => {
  // render - 실제로 App을 렌더링 했다고 치고! / 인자로 받는 JSX의 가상돔을 생성
  render(<App />);

  //Screen - 생성된 가상돔에 접근하기 위한 전역 객체 
  //getByText 함수 : 인자로 전달된 텍스트를 가지는 돔 안의 요소를 찾은 것 - 정규표현식 / /i는 대소문자 구분 X
  const linkElement = screen.getByText(/learn react/i);
  //expect - 기대식
  //.toBeInTheDocument : matcher 함수 linkElement가 도큐먼트 안에 있는가??
  expect(linkElement).toBeInTheDocument();
});
