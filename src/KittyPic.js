
const KittyPic = ({kittyURL, onClick}) => {

  return (
    <div>
      <img src={kittyURL} alt="kitty" onClick={() => onClick()}></img>
    </div>
  )
}

export default KittyPic;