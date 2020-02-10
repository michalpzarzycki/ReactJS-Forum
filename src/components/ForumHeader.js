import React, { useState } from 'react'
import styles from './Header.module.css'
import { Button, Icon, Header } from 'semantic-ui-react'
import firebase from '../firebase/firebase'




function ForumHeader() {
const [isLoggedIn, setIsLoggedIn] = useState(false)

function handleClick() {
  let newLink = {
    category:"ReactJS",
    title:"Hooki",
    description:"Hooki, komponenty fukncyjne, custom hooki - to wszytsko tutaj",
    postsNumber:"",
    lastPostCreated: {
      name:"Użytkownik",
      title:"Temat"
    },
    image:"https://via.placeholder.com/50"
  
  }
  firebase.db.collection('first_cat').add(newLink);
  console.log("UDALO SIE")

}
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
      </Button> :     <Button basic inverted color='blue' onClick={handleClick}>
        Zaloguj
      </Button>}
            </div>
        </div>
    )
}


export default ForumHeader