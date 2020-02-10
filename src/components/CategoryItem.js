import React from 'react'
import { Item, Icon  } from 'semantic-ui-react'
import styles from './CategoryItem.module.css'
const paragraph = "asjhadfjSDJKA;SDJFLADVLK NSDKLFWNsvl adlkvz dzmsdbvadkv sdjvna;lvm askjvba;sk vask asjv"
const data = {
  category:"DANA ATEGORIA",
  title:"Tytuł",
  description:"Krótki opsi danego tematu z kategorii",
  postsNumber:"Ilość postów w temacie",
  lastPostCreated: {
    name:"Użytkownik",
    title:"Temat"
  },
  image:"https://via.placeholder.com/50"

}
function CategoryItem() {

    return(
        <div className={styles.mainDiv}>
          <Item className={styles.Item}>
          <Item.Image  src={data.image}/>
          <Item.Content>
            <Item.Header as='a'>{data.title}</Item.Header>
            <Item.Description>{data.description}</Item.Description>
            <Item.Extra>
              <Icon color='green' name='check' /> {data.postsNumber}
              <Icon color='green' name='check' /> {data.lastPostCreated.title}
              <Icon color='green' name='check' /> {data.lastPostCreated.name}

            </Item.Extra>
          </Item.Content>
        </Item>
        </div>
    )
}


export default CategoryItem