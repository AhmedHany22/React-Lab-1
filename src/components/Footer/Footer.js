import './Footer.css';
export default function Footer() {

  return (
    <div id = 'sss' class = "ftrFlxCnt" >
      <div class = "lftFtrCont" >
        <h4 > GET IN TOUCH < /h4>
        <span><i class="fa fa-envelope"></i> mail@mail.com</span><br/>
        <span><i class="fa fa-address-card"></i> 0111111111111</span>
      </div>
      <div>
        <button type ="button" class ="btn btn-outline-primary contactBtn">CONTACT ME</button>
      </div>
      <div class="rightFtrCont">
        <span class="SMicons">
          <a class="myAnchor" href="" target="_blank">
            <i class="fa fa-twitter-square"></i>
          </a>
          <a class="myAnchor" href ="" target = "_blank" >
            <i class="fa fa-facebook-square"></i>
          </a>
          <a class="myAnchor"href ="" target = "_blank" >
            <i class="fa fa-linkedin-square"></i>
          </a>
          </span> <br/><br/>
        <span>Copyright <i class="far fa-copyright"></i> 2021 Ahmed Hany</span>
      </div>
    </div>
  );
}
