import data from "../../data/data.json"
import {OverviewCard, OverviewTodayCard} from "./OverviewCard"

export const OverviewContainer = () => {

  return (
    <section className="absolute top-[196px] left-0 right-0 mx-auto w-[326px]">
      {data.overview.map((item) => (
        <OverviewCard key={item.id} {...item}/>
      ))}
    </section>
  )
}

export const OverviewTodayContainer = () => {
  return (
    <div>
      {data["overview-today"].map((item) => (
        <OverviewTodayCard key={item.id} {...item}/>
      ))}
    </div>
  )
}

export default OverviewContainer
