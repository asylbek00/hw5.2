import React from "react";
import "./Comment.css";

function Comment(props) {

  return (
    <div>
      {props.blocks.map((el) => {
        let math= '#' + Math.random().toString(16).substring(2, 8)
      const math1 ={
        backgroundColor: math
      } 
        return (
          <div className="block1" style={math1} key={el.id} >{el.id}</div>
        )
        

      })}
    
    </div>
  );
}

export default Comment;