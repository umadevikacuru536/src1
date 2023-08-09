// import './index.css';
const UsersDestination=(props)=>{
    const {eachinitialUserDetailsList,onDelete} = props
    const {skillsets,cities} = eachinitialUserDetailsList
  
    return(
       <ul className=" d-flex flex-column justify-content-center  align-items-center">
         <li>
            {skillsets}
         </li>
         
          
       </ul>
    )
}
export default UsersDestination;