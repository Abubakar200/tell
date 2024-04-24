import { UserButton } from "@clerk/nextjs";


const Protected = async() => {
    
    return ( 
        <div>
            <UserButton afterSignOutUrl="/"/>
        </div>
     );
}
 
export default Protected;