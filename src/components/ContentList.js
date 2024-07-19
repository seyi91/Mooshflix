const ContentList = (props) => {
  const imageElements = props.content.map((obj) => {
    let src = obj.thumbnail;
    let key = obj.key;
    return <img id={key} className="content-card" src={src} alt={key}></img>;
  })
  return <>
    <div className="content-list">
        <div className="content-list-title">{props.title}</div>
        
        <div className="content">
          {imageElements}
        </div>
      </div>
  </>
}

export default ContentList;