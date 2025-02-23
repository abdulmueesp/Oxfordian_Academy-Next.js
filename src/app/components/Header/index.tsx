import {Button} from "antd"
import Image from "next/image";
import Flag from "../../assets/flag.svg"
const Header = () => {
    return (
      <>
        <div className="w-[100%] h-[50px] flex bg-gray-50">
          {/* Brand name */}
          <div className="w-[40%] h-full flex items-center pl-[50px]  font-kanit text-xl font-semibold">
            <h2>Oxfordian Academy</h2>
          </div>
          {/* second main box  */}
          <div className="w-[60%] flex items-center justify-end gap-5 pr-[50px] h-full  ">
            <div className="w-[130px] h-[35px] flex justify-center items-center bg-gray-200  font-kanit text-lg">Sign Up</div>
            <div className="w-[130px] h-[35px] flex  items-center justify-center gap-3 bg-gray-200 border-2  font-kanit">
              <Image src={Flag} alt="Country flag"  />
              IN | ENG
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Header;
  