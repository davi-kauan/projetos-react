import { Link } from "react-router-dom"

function ButtonLink ({link, children}) {

    return (
        <Link to={link} > {children} </Link>
    )
}

export default ButtonLink