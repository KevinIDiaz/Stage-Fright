import './Button.css'
export default function Button({text}:{text:string}){
    return(
        <>
        <button id="button">{text}</button>
        </>
    )
}