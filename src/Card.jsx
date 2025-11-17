import profilePic from "./assets/new_foto.JPG";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="" />
      <h2>Dwiki Yulian</h2>
      <p>Software Engineer is an artist too</p>
    </div>
  );
}

export default Card;
