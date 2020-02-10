import React, { useState } from 'react'
import styles from './Header.module.css'
import { Button, Icon, Header } from 'semantic-ui-react'



function ForumHeader() {
const [isLoggedIn, setIsLoggedIn] = useState(false)
    return(
        <div  className={styles.mainDiv}>
            <div className={styles.logoSection}>
            <Header as='h2'>
    <Icon name='react' />
    <Header.Content>React Forum</Header.Content>
  </Header>
            </div>
            <div className={styles.btnSection}>
         {isLoggedIn ?    <Button basic inverted color='blue'>
        Wyloguj
      </Button> :     <Button basic inverted color='blue'>
        Zaloguj
      </Button>}
            </div>
        </div>
    )
}


export default ForumHeader