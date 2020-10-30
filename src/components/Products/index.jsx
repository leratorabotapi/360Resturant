import React, { useContext } from 'react'
import ApplicationContext from '../ApplicationContext/Application'
import Card from '../Card'
import Label from '../Label'

const Products = () => { 
  
  const { activeCategory, products } = useContext(ApplicationContext)

  return (
    <div>

      <div style={{ marginBottom: '30px' }}>
      <Label label={activeCategory.name} color="dark" size="xlarge" text="Menu" />
      </div>

      <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {products
      .filter(product => product.category.includes(activeCategory.id))
      .map(product => (
        
        <Card product={product} label={product.name} thumbnails={product.images} amount={product.unitCost} productSize={product.size} children={product.description} />

      ))} 
      </div>
      
    </div>   
    )
  }
  
  export default Products