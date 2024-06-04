type IProps = {
  link: string
}

const Picture = ({ link }: IProps) => (
  <div
    className="w-32 h-48 bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: `url(${link})` }}
  ></div>
)

export default Picture
