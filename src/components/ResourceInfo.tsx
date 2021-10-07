
interface ResoruceInfoProps {
  title: any,
  summary: any,
  url: any,
  icon?: any
}
export default ({icon, title, summary, url} : ResoruceInfoProps) => {
  return (
    <div className="ResourceInfo">
      <div className="resource-info-inner">
        {icon &&
        <div className="icon-holder">
          {icon}
        </div>}
        <div className="text-holder">
          <span className="title">{title}</span>
          <span className="summary">{summary} <a href={url}>Read More.</a></span>
        </div>
      </div>
    </div>
  )
}