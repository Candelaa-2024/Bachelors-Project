import Background from "../Assets/logs.jpg" 
import { SignUpForm } from '../Components'


const SignUp = ()=>{
    return(
        <>
            <div style={{
                backgroundImage: ` url(${Background})`
            }}

            className='bg-fixed w-screen h-screen bg-center bg-no-repeat bg-cover flex justify-center items-center'
            >
                <div className="rounded-lg w-4/5 lg:w-1/2 bg-white h-75 p-6 grid overflow-auto">
                    <h3 className='text-center h-max'>Logs</h3>

                    <div className="w-4/5 mx-auto">
                        <SignUpForm/>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default SignUp