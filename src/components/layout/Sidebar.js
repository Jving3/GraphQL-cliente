import NuevoProyecto from "../proyectos/NuevoProyecto";

const Sidebar = () => {
    return ( 
    <aside>
        <h1>FORUS<span>Bee</span></h1>

        <NuevoProyecto/>

        <div className="proyectos">
            <h2>Mis Proyectos</h2>   
        </div>

        
    </aside>    
     );
}
 
export default Sidebar;