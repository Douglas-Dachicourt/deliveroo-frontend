const Hero = ({data})=>{
return (

<div>
  <div className='container hero'>
    <div className='left-part'>
      <h1>{data.restaurant.name}</h1>
      <p>{data.restaurant.description}</p>
    </div>
    <img src={data.restaurant.picture} alt="" />
  </div>
</div>

)

}

export default Hero