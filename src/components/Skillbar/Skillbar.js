export default function Skillbar(props) {
  return(
    <>
      <div class="progress m-3" style={{height:50}}>
        <span class="text-capitalize text-white bg-secondary p-4 text-center" style={{width:70}}>{props.dataSkill.skillName}</span>
        <span class="progress-bar bg-secondary" style={{width:props.dataSkill.precentage}}></span>
      </div>
    </>
  )
}
