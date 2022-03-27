import { Link } from "react-router-dom"

export const Button = () => {
    return (
        <Link to='/'>
            <button className="btn">
                Registrarse
            </button>
        </Link>
    )
}
