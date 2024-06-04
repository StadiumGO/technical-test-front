import Title from '../atoms/Title'

type IProps = {
  className?: string
}

const Banner = ({ className = '' }: IProps) => (
  <>
    <div className={`${className} bg-pri flex justify-center items-center`}>
      <Title isTitle={true} title="movie night" />
    </div>
  </>
)

export default Banner
