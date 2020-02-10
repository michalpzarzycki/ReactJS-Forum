import React from 'react'
import { Icon } from 'semantic-ui-react'
import styles from './Footer.module.css'

function Footer() {

    return(
        <div className={styles.mainDiv}>
            <a href="www.facebook.com"><Icon color='blue' name='facebook official' size='huge' /></a>
            <a href="www.facebook.com"><Icon  name='instagram' size='huge'/></a>
            <a href="www.facebook.com"><Icon color='black' name='github' size='huge'/></a>
            <a href="www.facebook.com"><Icon color='blue' name='linkedin' size='huge'/></a>
        </div>
    )
}


export default Footer