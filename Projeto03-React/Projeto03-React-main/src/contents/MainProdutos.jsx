import './MainProdutos.css'
import '../App.css'
import Produto from "./Produto";

function MainProdutos(){
    return(
        <main classNAme="principal-prod">
            <h2>Produtos em Destaque</h2>
                <Produto/>
                <Produto/>
                <Produto/>
                <Produto/>
            <h2>Produtos Mais Vendidos</h2>
                <Produto/>
                <Produto/>
                <Produto/>
                <Produto/>
        </main>
    )
}

export default MainProdutos