import React from "react";
import styles from './People.module.css';
import SwapiService from "../../services/SwapiService";
import Person from './../Person/Person';

class People extends React.Component {
   swapi = new SwapiService();
   state = {
      people: [],
      // person: [],
      isLoading: true,
      page: 1,
      id: 1,
   };
   async componentDidMount() {
      const people = await this.swapi.getAllPeople(this.state.page);
      this.setState({ people, isLoading: false });
   }


   onclickPage = (evt) => {
      this.setState({
         page: 2
      }

      )
   }
   render() {

      const buttonArrayValue = ["<<", "<", ">", ">>"];
      console.log(this.state.page);
      return (
         <section className={styles.section} >
            <nav className={styles.navbar}>
               <div className={styles.nav_item}>Peoples</div>
               <div className={styles.nav_item}>Planets</div>
               <div className={styles.nav_item}>Species</div>
               <div className={styles.nav_item}>Starships</div>
               <div className={styles.nav_item}>Vehicles</div>
            </nav>
            <div className={styles.peopleItems}>

               {
                  this.state.isLoading ?
                     <div>Loading...</div>
                     :
                     this.state.people.map((person, i) => <Person onClick='' person={person} id={i} key={person.name} />)

               }
            </div>
            {/* pagination */}
            <div className={styles.pagination}>
               <button>{buttonArrayValue[0]}</button>
               <button>{buttonArrayValue[1]}</button>
               <button>1</button>
               <button onClick={this.onclickPage}>2</button>
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
         </section>
      );
   }
}

export default People;