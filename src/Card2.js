const Card2 = (prop) => {
  let badgeText;
  if (prop.sosno === 0) {
    badgeText = "sold out"
  }
  else {
    badgeText = "online"
  }
  console.log(prop)
  return (
    <div className="card">
      
        <div className="smallcard">{badgeText}</div>
        <img src={prop .img} alt="" className='img3' />
        <div class="container">
          <h4><b>{prop .name}</b></h4>
          <p>Price:{prop .price}</p>
          <p>rating:{prop .rating}</p>
        </div>
    

    </div>
  );
}

export default Card2;