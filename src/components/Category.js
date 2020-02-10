
import React from 'react'
import { ItemGroup } from 'semantic-ui-react'
import CategoryItem from './CategoryItem'
const data = {
    category:"DANA KATEGORIA",
    title:"Tytuł",
    description:"Krótki opsi danego tematu z kategorii",
    postsNumber:"Ilość postów w temacie",
    lastPostCreated: {
      name:"Użytkownik",
      title:"Temat"
    },
    image:"https://via.placeholder.com/50"
  
  }
function Category() {

    return(
        <div>
<div>{data.category}</div>
              <ItemGroup>
                <CategoryItem data={data}/>
                <CategoryItem data={data}/>
                <CategoryItem data={data}/>

            </ItemGroup>
        </div>
    )
}


export default Category