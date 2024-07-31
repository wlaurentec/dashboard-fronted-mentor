import data from "../../data/data.json"
import {OverviewCard, OverviewTodayCard} from "./OverviewCard"

export const OverviewContainer = () => {

  return (
    <section className="absolute top-[196px] gap-7 left-0 right-0 mx-auto max-w-[1440px] flex flex-wrap justify-center">
      {data.overview.map((item) => (
        <OverviewCard key={item.id} {...item}/>
      ))}
    </section>
  )
}

export const OverviewTodayContainer = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-7 text-Dark-Grayish-Blue ml-8 ">Overview - Today</h2>
      <div className="flex flex-wrap justify-center">
      {data["overview-today"].map((item) => (
        <OverviewTodayCard key={item.id} {...item}/>
      ))}
    </div>
    </section>
  )
}

export default OverviewContainer
