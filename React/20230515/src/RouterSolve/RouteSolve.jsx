import { BrowserRouter, Routes, Route, Link, useLocation, Outlet, useParams } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

// - **Home Page :** /
// - **Product Detail Page** : /products/:id
//     - ex) /products/1 , /products/2, /products/3, /products/4
// - **Product Detail Notice Page :** /products/:id/notice
//     - ex) /products/1/notice , /products/2/notice…
// - **Cart Page :** /cart
// - **User Page :** /users
// - **Coupon Page :** /users/coupon
// - **Question Page :** /users/question
// - **Notice Page :** /users/notice
const GlobalStyle = createGlobalStyle`
    a{
        margin-right: 15px;
    }
    `;

function RouteSolve() {
    const productIds = [1, 2, 3, 4, 5];
    return (
        <BrowserRouter>
            <GlobalStyle />
            <h1>퀴즈</h1>
            {/* navi */}
            <Link to="/">홈페이지</Link>
            {/* 1부터 5까지 */}
            {productIds.map((productId) => (
                <Link to={`/products/${productId}`}>상품{productId}</Link>
            ))}
            <Link to="/users">Users</Link>
            <Link to="/cart">Cart</Link>
            <Link to='/hojunIndex'>호준인덱스</Link>

            {/* 진짜 렌더링될 것들  */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* /:id는 동적 라우팅을 위해 사용되는 URL 패턴 */}
                <Route path="/products/:id" element={<Products />} />
                <Route path="/products/:id/notice" element={<ProductNotice />} />
                <Route path="/cart" element={<Cart name="licat" />} />
                <Route path="/users/" element={<Users />}>
                    {/* 중첩된 라우터 <Outlet/>  */}
                    {/* Users안에  <Outlet/>이 있고 거기에 여기 하위로 있는 Route들로 바뀐다 */}
                    <Route path="coupon" element={<div>쿠폰</div>} />
                    <Route path="question" element={<div>퀘스션</div>} />
                    <Route path="notice" element={<div>노티스</div>} />
                </Route>
                <Route path="/hojunIndex" element={<HojunIndex/>} ></Route>
            </Routes>
        </BrowserRouter>
    );
}

function HomePage() {
    return <h1>홈페이지</h1>;
}

function HojunIndex() {
    // 파라미터만 잘라내는 hook 1 - useLocation
    const location = useLocation();
    console.log(location);
    //{pathname: '/hojunIndex', search: '', hash: '', state: null, key: '74gsx8qh'}
    const path = location.pathname.split('/')[2]
    console.log(path)
    return <h1>hello Hojun index</h1>;
}

function Products() {
    // 파라미터만 잘라내는 hook 2 - useParams (구조분해할당)
    const { id } = useParams();
    return (
        <div>
            <h1>hello Products {id}</h1>
            {/* 기존 링크 뒤에 notice 붙이기 */}
            <Link to="./notice">Notice</Link>
        </div>
    );
}
function ProductNotice() {
    // 파라미터만 잘라내는 hook 2 - useParams (기본)
    const pram = useParams();
    console.log(pram);
    // {id: '4'}
    return <h1>hello Products {pram.id} Notice </h1>;
}

function Cart({ name }) {
    return <h1>{name} world1 여기는 {name}의 cart 입니다.</h1>;
}

function Users() {
    return (
        <div>
            {/* 네비게이션 */}
            <Link to="/users/coupon">usersCoupon</Link>
            <br />
            <Link to="/users/notice">Notice</Link>
            <br />
            <Link to="/users/question">Question</Link>
            <br />
            <h1>여기는 Users</h1>
            <Outlet />
        </div>
    );
}






export default RouteSolve;
