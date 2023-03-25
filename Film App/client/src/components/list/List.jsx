import "./list.scss";
import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
  
export default function List({ list }) {
    return (
        <div className="list">
            <span className="listTitle">
                {/* code */}
            </span>
            <div className="wrapper">
                <div className="container" ref={listRef}>
                    {/* code */}
                </div>         
            </div>
        </div>
    );
}
  