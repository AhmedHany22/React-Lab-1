import './About.css';
export default function About() {
  return (
    <div className="container Container">
      <div className="row">
        <div className="col-sm-4 Title">
          <span>About me</span>
        </div>
        <div className="col-sm-8">
          <span className="Content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempora obcaecati molestias magni? Rerum, reiciendis. Quibusdam reiciendis beatae exercitationem
          suscipit aliquam mollitia aut hic nisi! Magnam unde ipsa quas deleniti autem. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Minus, molestiae quidem? Ea ipsum dolorem nam non quidem!
          Sapiente excepturi libero fugit quos unde consectetur dolorum, vitae veniam, quasi, culpa corrupti?</span><br/>
          <button type="button" className="btn btn-dark px-3 py-2 rounded-0">Download Resume</button>
        </div>
      </div>
    </div>
  );
}
