export default function Card(props) {
  return (
    <div className="p-[30px] bg-night rounded-xl">
        {props.children}
    </div>
  )
}
