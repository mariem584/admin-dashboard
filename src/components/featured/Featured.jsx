import React from "react";
import "./featured.scss";
import MoreVert from "@mui/icons-material/MoreVert";
import {CircularProgressbar} from 'react-circular-progressbar'
import { KeyboardArrowDown } from "@mui/icons-material";
import { KeyboardArrowUpOutlined } from "@mui/icons-material";
import 'react-circular-progressbar/dist/styles.css'
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVert  fontSize="small"/>
      </div>

      <div className="bottom">

        <div className="featureChart">
             <CircularProgressbar value={70}  text="70%" strokeWidth={5}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">Previous transcations proccessing. Last payments may not be included.</p>

<p className="summary">
<div className="item">
<div className="itemTitle">
    Target
</div>
<div className="itemResult negative">
    <KeyboardArrowDown fontSize="small"/>
    <div className="resulatAmount">
        $12.4k
    </div>
</div>



</div>


<div className="item">
<div className="itemTitle">
   Last Week
</div>
<div className="itemResult positive">
    <KeyboardArrowUpOutlined fontSize="small"/>
    <div className="resulatAmount">
        $12.4k
    </div>
</div>



</div>


<div className="item">
<div className="itemTitle">
    Last Month
</div>
<div className="itemResult positive">
    <KeyboardArrowUpOutlined fontSize="small"/>
    <div className="resulatAmount">
        $12.4k
    </div>
</div>



</div>
</p>

      </div>
    </div>
  );
};

export default Featured;
