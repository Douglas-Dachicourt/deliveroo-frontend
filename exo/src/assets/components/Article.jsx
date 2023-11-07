const Article = ({meal})=>{
return (

<div className='article'>   
      <article className="inside-article">
        <div >
          <h3>{meal.title}</h3>
          <p className="description">{meal.description}</p>
          <div className="last-one">
          <p className="price">{meal.price} €</p>
          {meal.popular && <p className="orange">Populaire</p> }
          </div>
         </div>
         {meal.picture && <img src={meal.picture} alt="" /> }     
      </article>
</div>

)}

export default Article