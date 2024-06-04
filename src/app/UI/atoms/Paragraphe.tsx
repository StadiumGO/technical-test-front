type IProps = {
  text: string
  className?: string
}

const Paragraphe = ({ text, className = '' }: IProps) => (
  <p className={`text-sec ${className} text-sm`}>{text}</p>
)

export default Paragraphe
