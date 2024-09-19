import './Footer.css'

const Footer = ({data}) => {
  console.log()
  const {title, subTitle1, subTitle2,  subTitle3,subTitle4,subTitle5} = data
    
  return (
    
  <div className="footer-wrap">
    <div className='footer-flex' >
    <h1>{title}</h1>
    <p>{subTitle1}</p>
    <p>{subTitle2}</p>
    <p>{subTitle3}</p>
    <p>{subTitle4}</p>
    <p>{subTitle5}</p>

    </div>    
   
  

    

  </div>
  )
}

export default Footer
