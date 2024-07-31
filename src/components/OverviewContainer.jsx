import data from "../../data/data.json"
import OverviewCard from "./OverviewCard"

const OverviewContainer = () => {

  return (
    <section className="absolute top-[196px] left-0 right-0 mx-auto w-[326px]">
      {data.overview.map((item) => (
        <OverviewCard key={item.id} {...item}/>
      ))}
    </section>
  )
}

export default OverviewContainer
