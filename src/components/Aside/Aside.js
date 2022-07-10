import React from "react";
import styles from './Aside.module.css';

class Aside extends React.Component {
   render() {
      return (
         <aside>
            <section className={styles.people_info}>
               <div className={styles.people_logo}>
                  <img src="http://cdn.onlinewebfonts.com/svg/img_568656.png" />
               </div>
               <div className={styles.people_info__items}>
                  <div className={styles.people_info__item}>Eduard Grigoryan</div>
                  <div className={styles.people_info__item}>Eduard</div>
                  <div className={styles.people_info__item}>EduardGrigoryan17@gmail.com</div>
                  <div className={styles.people_info__item}>Yerevan</div>
               </div>
            </section>
         </aside>
      );
   }
}

export default Aside;

