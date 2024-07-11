import React from 'react'
import Comment from './Comment';
import {faker} from '@faker-js/faker';
import Card from './Card';

 const App = () => {
  return (
    <div className="ui comments" style={{
      paddingTop:'10px',
      paddingLeft:'15px'
    }}>
      <Card><Comment avatar={faker.image.avatar()} fullname="Kazım İNCEBAY" daysago="2" star="2" comment="React Efsane"/></Card>
    <Card><Comment avatar={faker.image.avatar()} fullname="Ali Veli" daysago="3" star="4" comment="React Denemesi"/></Card>
    
    </div>
  )
}

export default App;