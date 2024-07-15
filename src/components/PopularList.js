const PopularList = () => {
  let popularList = [
    {
      key: "suits",
      thumbnail: '../suits-thumbnail.jpeg'
    },
    {
      key: "bridgerton",
      thumbnail: '../bridgerton-thumbnail.jpeg'
    },
    {
      key: "supacell",
      thumbnail: '../supacell-thumbnail.jpeg'
    },
    {
      key: "worst-roommate-ever",
      thumbnail: '../worst-roommate-thumbnail.jpeg'
    }, {
      key: "americas-sweethearts",
      thumbnail: '../americas-sweethearts-thumbnail.jpeg'
    }, {
      key: "your-honor",
      thumbnail: '../your-honor-thumbnail.jpeg'
    },
    {
      key: "queen-charlotte",
      thumbnail: '../queen-charlotte-thumbnail.jpeg'
    },
    {
      key: "sweet-tooth",
      thumbnail: '../sweet-tooth-thumbnail.jpeg'
    },
    {
      key: "perfect-match",
      thumbnail: '../perfect-match-thumbnail.jpeg'
    }
  ];

  let imageElements = popularList.map((obj) => {
    let src = obj.thumbnail;
    let key = obj.key;
    return <img className="content-card" src={src} alt={key}></img>;
  })

  return imageElements;
};

export default PopularList;