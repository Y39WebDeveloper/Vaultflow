import './Button.css'

const Button = ({content="Button",alt, sm}) => {
  return (
      <a href='/' className={`btn ${alt && 'btn-alt'} ${sm && 'btn-sm'}`}>{content}</a>
  )
}

export default Button