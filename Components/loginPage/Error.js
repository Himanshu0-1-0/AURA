import "./Error.css";
export default function Error({msg}) {
    
  return (<>   
            <div className="error">
             {msg}
            </div>
    </>
  )
}
