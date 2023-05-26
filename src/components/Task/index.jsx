import { Button } from "../Button/index";

export const Task = (prop) => {
    return(
        <div className={`row justify-content-between task ${prop.width}`}>
            <div className="col-9 align-self-center">
                <p> { prop.text } </p>
            </div>
            <Button 
                text={"X"} 
                width={"col-2 align-self-center"} 
                type={"button"} 
                style={"btn btn-primary"}
                onClick={prop.onClick}
              />
        </div>
    )
}