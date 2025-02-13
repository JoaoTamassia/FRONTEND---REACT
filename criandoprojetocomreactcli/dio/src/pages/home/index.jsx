import { Link } from "react-router-dom"

const Home = () => {
    return (<>
        <h1>Home</h1>
        <Link to="/login">Ir para a página de login</Link>
        </>
    )
}

export { Home }