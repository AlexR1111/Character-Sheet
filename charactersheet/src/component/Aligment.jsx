import React from "react";

function Aligment() {
    return (
        <div>
            <label for ='aligm'>Aligment</label>
            <br/>
            <select class='aligm'>
              <option value="LG">Lawful Good</option>  
              <option value="NG">Neutral Good</option>  
              <option value="CG">Chaotic Good</option>  
              <option value="LN">Lawful Neutral</option>  
              <option value="N">True Neutral</option>  
              <option value="CN">Chaotic Neutral</option>  
              <option value="LE">Lawful Evil</option>  
              <option value="NE">Neutral Evil</option>  
              <option value="CE">Chaotic Evil</option>  
            </select>
        </div>
    )
}

export default Aligment