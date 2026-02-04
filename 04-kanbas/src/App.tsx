import  Kanban  from './components/kanban/Kanban';

export default function App() {
  return (
    <div className="p-0 m-0 box-border">
        <div className='p-[50px]'>
            <h1 className='mb-[20px] font-bold text-4xl text-night'>Kanban UI</h1>
            <Kanban/>
        </div>
    </div>
  )
}
