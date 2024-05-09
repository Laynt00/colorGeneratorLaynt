import { useState } from "react";
import Values from "values.js";

const FormColor = ({ setList }) => {
    const[color,setColor] = useState("blue");   {/* Creation of State */}
    const [error, setError] = useState(false);

    const handleGenerator = e => {
        e.preventDefault();
        try {
            let colors = new Values(color).all(10);
            setList(colors);
            setError(false);
        } catch (error) {
            console.log(error)
            setError(true);
            }
        console.log(color);
    }

    return ( 
        <>
            <form onSubmit={ handleGenerator }>
                <input type="text" placeholder="#fff" onChange={e => setColor(e.target.value)} /> {/* create event onChange with allow function */}
                <input type="submit" value="Generar" />
            </form>
            { error ? <p className="error">This color does not exist</p> :null }  {/* if error = true->p if not*/}
            
        </>
     );
}
 
export default FormColor; 