import './Card.css'

const Card = ({ img, icon, title, content, link }) => {
  return (
      <div className="card">
          <div className="card-content">
              <div className="icon"><img src={icon} alt="" /></div>
              <h3 className="title">{title}</h3>
              <p className="content">
                  {content}
              </p>
              <a href='/'>
                  {link}
              </a>
          </div>
          {img && 
          <div className="card-img">
              <img src={img} alt="" />
          </div>
          }
      </div>
  )
}

export default Card