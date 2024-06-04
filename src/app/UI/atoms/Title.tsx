type IProps = {
  title: string
  isTitle?: boolean
  className?: string
}

const Title = ({ title, isTitle = false, className = '' }: IProps) => {
  const style = `text-sec ${className}`

  return (
    <>
      {isTitle ? (
        <h1 className={`${style} uppercase font-bold`}>{title}</h1>
      ) : (
        <h2 className={`${style} text-lg`}>{title}</h2>
      )}
    </>
  )
}

export default Title
