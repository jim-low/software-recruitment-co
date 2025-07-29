import { COMPANY_NAME } from "../../constants";
import { Button } from "../ui/button";
import NavMenu from "./navigation-menu";

export default function Header() {
  return (
    <div id="header" className="h-[84px] w-full px-[120px] py-[20px] flex items-center justify-between">
      <div className="brand-and-links flex items-center">
        <h1 className="font-bold bg-brand-blue mr-[46px] text-xs">{COMPANY_NAME}</h1>
        <NavMenu />
      </div>

      <div className="action-buttons flex items-center gap-[10px]">
        <Button className="font-bold">
          Careers
        </Button>

        <Button className="font-bold">
          Contact Us
        </Button>
      </div>
    </div>
  )
}
