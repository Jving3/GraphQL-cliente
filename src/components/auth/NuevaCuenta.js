

const NuevaCuenta = () => {
    return ( 
        <div className="form-usuario">

        <div className="contenedor-form sombra-dark">
            <h1>Obtener una cuenta</h1>

            <form
                
            >
                <div className="campo-form">
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Tu Nombre"
                        
                    />
                </div>

                <div className="campo-form">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Tu Email"
                        
                    />
                </div>

                <div className="campo-form">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Tu Password"
                        
                    />
                </div>

                <div className="campo-form">
                    <label htmlFor="confirmar">Confirmar Password</label>
                    <input 
                        type="password"
                        id="confirmar"
                        name="confirmar"
                        placeholder="Repite tu Password"
                        
                    />
                </div>

                <div className="campo-form">
                    <input type="submit" className="btn btn-primario btn-block" value="Registrarme" />
                </div>
            </form>

            {/* <Link to={'/'} className="enlace-cuenta">
                Volver a Iniciar Sesión
            </Link> */}
        </div>
    </div>
     );
}
 
export default NuevaCuenta;