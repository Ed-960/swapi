import React from "react";
import styles from './../People/People.module.css';
import SwapiService from "../../services/SwapiService";

export default class Person extends React.Component {

   swapi = new SwapiService()
   state = {
      isLoading: false,
   };



   render() {
      const { person, id } = this.props;
      const { name, height, mass, hair_color, skin_color } = person;
      {
         return (
            <div className={styles.peopleItem}>
               {name}
            </div>
         );
      }
   }
}
