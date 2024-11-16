import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/reset.css'
import './style/index.css'
import Header from './components/header'
import DropDown from './components/dropDown'
import General from './components/general'
import Address from './components/address'
import Education from './components/education'
import WorkExperience from './components/workExp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <DropDown name={"General Infomation"} info={<General />}/>
    <DropDown name={"Address"} info={<Address />}/>
    <DropDown name={"Education"} info={<Education />}/>
    <DropDown name={"Work Experience"} info={<WorkExperience />} />
    
  </StrictMode>,
)
