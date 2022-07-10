import React from "react";
import SwapiService from "../../services/SwapiService";
import styles from './Pagination.module.css';
import People from "../People/People";


class Pagination extends React.Component {

   render() {
      const buttonArrayValue = ["<<", "<", ">", ">>"];
      return (
         <div className={styles.pagination}>
            <button>{buttonArrayValue[0]}</button>
            <button>{buttonArrayValue[1]}</button>
            <button>1</button>
            <button onClick={onclick}>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>{buttonArrayValue[2]}</button>
            <button>{buttonArrayValue[3]}</button>
         </div>
      );
   }
}

export default Pagination;