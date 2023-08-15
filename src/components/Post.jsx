import "./Post.css";

export const Post = ({ id, title, description }) => {
  return (
    <>
      <div id="cardPost" className="card">
        <img src="python.png" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};
