
export const Container = (prop) => {
    return (
        <div className={prop.style}>
            { prop.children }
        </div>
    )
}