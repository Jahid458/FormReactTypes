
import "./App.css";
import GrandPa from "./components/GrandPa/GrandPa";
// import ReusuableForm from "./components/ReusuableForm/ReusuableForm";
// import HookForm from "./components/HookForm/HookForm";
// import RefForm from "./components/RefForm/RefForm";
// import StateFullForm from "./components/StateFullForm/StateFullForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";

function App() {
  // const handleSignUpSubmit = data =>{
  //   console.log('sign up data',data)
  // }

  // const handleUpdateProfile = data =>{
  //   console.log('Update Profile data',data)
  // }


  return (
    <>
        <h1>Form Master</h1>
        <GrandPa></GrandPa>
        {/* <SimpleForm></SimpleForm> */}
        {/* <StateFullForm></StateFullForm> */}
          {/* <RefForm></RefForm> */}
          {/* <HookForm></HookForm> */}
          {/* <ReusuableForm fromTitle={'sign Up'} handleSubmit={handleSignUpSubmit}>
              <div>
                <h2>Sign Up</h2>
                <p>Please Sign Up right Now</p>
              </div>

          </ReusuableForm>
          <ReusuableForm 
          fromTitle={'Profile Update'} submitBtnText='Update' handleSubmit={handleUpdateProfile}>
              <div>
                <h2>Update Profile</h2>
                <p>Always keep your Update Profile</p>
              </div>
          </ReusuableForm> */}


    </>
  );
}

export default App;
