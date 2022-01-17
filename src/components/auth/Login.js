
const Login = () => {
    return ( 
        <div className="form-usuario">

        <div className="contenedor-form sombra-dark">
            <h1>Iniciar Sesión</h1>

            <form
                
            >
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
                    <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión" />
                </div>
            </form>

            {/* <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                Obtener Cuenta
            </Link> */}
        </div>
    </div>
     );
}
 
export default Login;