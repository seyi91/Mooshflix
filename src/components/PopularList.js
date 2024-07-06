const PopularList = () => {
  let popularList = [];

  for (let i = 0; i < 10; i++) {
    let content = <div className="content-card">Content {i + 1}</div>;
    popularList[i] = content;
  }
  return popularList;
};

export default PopularList;