import Iframe from 'react-iframe'

export default function Aside(){
    return(
    <aside className="onde-estamos">
            <h2>ONDE ESTAMOS</h2>
            <p>Rua Tito, nº54 - Vila Romana - São Paulo - SP - Brasil</p>
            
            <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0971374763362!2d-46.6936393021301!3d-23.52900842743574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1678296425608!5m2!1spt-BR!2sbr"
                style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></Iframe> 
               
            <h2>Contatos</h2>
            <ul>
                <li><i className="fa-solid fa-phone"></i> (11)15423025</li>
                <li><i className="fa-brands fa-whatsapp"></i> (11)96154632565</li>
                <li><i className="fa-solid fa-envelope"></i> bracocurto@senac.com.br</li>
            </ul>
        </aside>
        )
} 