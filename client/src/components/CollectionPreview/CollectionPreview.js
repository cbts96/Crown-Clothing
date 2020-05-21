import React from "react";
import "./CollectionPreview.scss";
import CollectionItem from "../CollectionItem/CollectionItem";
import {withRouter} from "react-router-dom";



const CollectionPreview=({title,items,history,match,routeName})=>{
    
    return(
    <div className="collection-preview">
        <h1 className="title" onClick={()=>history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((item,id)=>id<4).map((item)=>(
                <CollectionItem key={item.id} item={item}></CollectionItem>
            ))}
        </div>
    </div>
)}

export default withRouter(CollectionPreview);