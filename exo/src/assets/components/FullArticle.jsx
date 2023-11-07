import Article from "./Article"
import ArticleTitle from "./ArticleTitle"

const FullArticle = ({category})=>{
return (

<section className="full-article">
  <div>
    <ArticleTitle category={category}/>
  </div>

  <div className="articles">
  {category.meals.map((meal, num)=>{
       return <Article meal= {meal} num={num} key={num}/>  
    })}
  </div>  
</section>

)}

export default FullArticle