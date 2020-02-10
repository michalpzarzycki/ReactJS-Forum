import React from 'react'
import { Icon, Image, Item } from 'semantic-ui-react'
import CategoriesList from'./CategoriesList'
import styles from './MainPage.module.css'



function MainPage() {

    return(
        <div  className={styles.mainDiv}>
        <Item.Group>
       <CategoriesList />
      </Item.Group>
      </div>
    )
}


export default MainPage