import { FC } from "react";
interface IProps {
  text: string
}

const RouteDescription: FC<IProps> = ({ text }) => {

  return (
    <div id="routeDescription" className="container-100">
      <div className="title title-m-32">
        Описание маршрута
      </div>
      <div className='default-tag' dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  )
}

export default RouteDescription;
