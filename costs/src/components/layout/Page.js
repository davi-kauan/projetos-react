import style from './Page.module.css'

function Page ({route}) {

    return <div className={style.Page} > {route()} </div>
}

export default Page