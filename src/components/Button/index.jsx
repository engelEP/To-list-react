
export const Button = (prop) => {
    return(
        <div className={prop.width}>
            <button type={prop.type} onClick={prop.onClick} className={prop.style}>{ prop.text }</button>
        </div>
    )
}