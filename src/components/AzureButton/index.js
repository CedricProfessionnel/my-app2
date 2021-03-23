import azureFunction from "./azureFunction"
import {Button} from "@material-ui/core"
const buttonAzure= ()=>{
    const buttononclick = () =>{
        azureFunction()
    }
    return(
        <div class="border text-justify">
            <div>Ceci est la composante 3</div>
            <Button class="btn btn-success"onClick={buttononclick}>Azure Button</Button>
        </div>
    )
}
export default buttonAzure