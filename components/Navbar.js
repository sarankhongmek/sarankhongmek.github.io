
import Link from "next/link";
import { IoHomeOutline, IoFolderOutline,IoCameraOutline,IoLogoGithub,IoMailOutline,IoMoonOutline,IoSunnyOutline,IoSettingsOutline } from "react-icons/io5";
 import { useRouter } from 'next/router'

const Navbar =  () => { return(

   <div className="flex item-center space-x-1 justify-center fixed w-screen bottom-0.5 mb-8 ">


  <div className="flex item-center bg-red-200 w-auto rounded-md-500 border-2 border-md-[10px] rounded-b-2xl rounded-tr-2xl rounded-tl-2xl overflow-auto">

  
    <NavbarIcon icon={<IoHomeOutline size="28"/>} path={"/"}/>
    <NavbarIcon icon={<IoFolderOutline size="28"/>} path={"/project"}/>
    <NavbarIcon icon={<IoCameraOutline size="28"/>} path={"/gallery"}/>
    <NavbarIcon icon={<IoLogoGithub size="28"/>} path={"https://github.com/sarankhongmek"}/>
    <Emailbtn icon={<IoMailOutline size="28"/>}/>
    <NavbarIcon icon={<IoSunnyOutline size="28"/>}/>
    <NavbarIcon icon={<IoSettingsOutline size="28"/>}/>
    </div>

  </div>



)
};

const NavbarIcon = ({icon ,path}) => { return(  
  
  <Link href={`${path}`}>
    <div className="navbar-icon">
      {icon}
    </div>
  </Link>
)
};



const Emailbtn = ({icon}) => {  
const router = useRouter()  

  return(  
    <div className="navbar-icon">
    <a href="mailto:test@email.com" onClick={() => router.push('mailto:email@yahoo.com')}>{icon}</a>
    </div>
)
};



export default Navbar;