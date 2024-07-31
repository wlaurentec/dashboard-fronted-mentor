import data from "../../data/data.json"
import OverviewCard from "./OverviewCard"

const OverviewContainer = () => {
  return (
    <section className="border border-red-600">
      {data.overview.map((item) => (
        <OverviewCard key={item.id} {...item}/>
      ))}
    </section>
  )
}

export default OverviewContainer
