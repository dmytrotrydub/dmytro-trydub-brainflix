export const timeConverter = (dateConv) => {
  const timestamp = parseInt(dateConv);
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const fullDate = `${month}/${day}/${year}`;

  return fullDate;
};



export const filteredVideo = (videoArray, filteredVideo) => {
  const chosenVideo = videoArray.filter((id) => id.id === filteredVideo);
  return chosenVideo;
};
