function Section(){
    return(
    <>
    <section className="newsletter">
        <h3>Newsletter</h3>
        <p>Receba nossas promoções por e-mail.</p>
        <form action="" method="post">
            <input type="text" name="nome" id="nome" placeholder="Seu nome" />
            <input type="email" name="emal" id="email" placeholder="Seu e-mail" />
            <button>Cadastrar</button>
        </form>
    </section>
        </>
    )
}

export default Section