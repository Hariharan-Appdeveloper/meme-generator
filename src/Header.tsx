import meme from "./assets/meme.png";

export default function Header(){
    return(
        <div className="MemeHeader">
            <img className="MemeLogo" src={meme} alt="meme" />
            <p className="MemeHeaderText" >MeMe Generator</p>
        </div>
    )
}