import { Outlet, Link } from "react-router-dom";

function Nav(){
    return(
    <nav className="menu">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
            <li><Link to="/contatos">Contatos</Link></li>
        </ul>

        <div className="social-icons">
            <a href="http://www.facebook.com" className="btn-facebook"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com/loja_infobama" className="btn-twitter"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.google.com/intl/pt-BR/account/about/lojainfobama@gmail.com" className="btn-google"><i
                    className="fa-brands fa-google"></i></a>
        </div>
    <Outlet />
    </nav>

        
    )
}

export default Nav