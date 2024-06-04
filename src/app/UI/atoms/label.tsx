type IProps = {
  name: string | number
}

const Label = ({ name }: IProps) => (
  <>
    <div className="bg-pri rounded px-1 py-0.5">
      <h4 className="text-sec font-light text-sm">{name}</h4>
    </div>
  </>
)

export default Label
