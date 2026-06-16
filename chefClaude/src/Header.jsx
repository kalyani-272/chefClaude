import logo from "./logo.png"
export default function Header(){
    return(
        <header>
            <img className="logo" src={logo} alt="logo"/>
            <h2>chefClaude</h2>
        </header>
    )
}