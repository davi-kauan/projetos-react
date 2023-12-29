import './Main.module.css'

function Main ({route}) {

    return <main> {route()} </main>
}

export default Main