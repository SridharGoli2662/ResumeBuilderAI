import { useContext } from "react";
import { store } from "./ResumeEdit";
export function ButtonsNavigator()
{
    const[index,setindex]=useContext(store)
    function handleindex()
    {
        //   e.preventDefault();
       setindex(index+1)
    }
    function reduceindex()
    {
        // e.preventDefault();
        setindex(index-1)
    }
    return(
        <Btns>
    <div>
        <button onChange={reduceindex} disabled={index==0}> Previous</button>
         <button onChange={handleindex} >Next</button>
    </div>
    </Btns>
    )
}
export const Btns=styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`