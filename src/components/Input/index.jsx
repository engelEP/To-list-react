export const Input = (prop) => {
    return(

        <div className={prop.width}>
            <input
                type={prop.type} 
                onChange={prop.onChange} 
                className={prop.style} 
                placeholder={prop.placeholder}
                value={prop.value}
            />
        </div>

    )
}