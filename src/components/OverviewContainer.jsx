import data from "../../data/data.json"
import OverviewCard from "./OverviewCard"

const OverviewContainer = () => {
  return (
    <section>
      {data.overview.map((item) => (
        <OverviewCard key={item.id} {...item}/>
      ))}
    </section>
  )
}

export default OverviewContainer
