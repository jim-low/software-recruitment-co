import { COMPANY_NAME } from "../../constants";
import { Button } from "../ui/button";
import NavMenu from "./navigation-menu";
import classNames from "classnames";

type ActionButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

const ActionButton = (props: ActionButtonProps) => {
  const {
    className,
    children,
  } = props;

  return (
    <Button className={classNames("font-bold text-brand-black rounded-4xl py-6 px-5", className)}>
      {children}
    </Button>
  );
};

export default function Header() {
  return (
    <div id="header" className="h-[84px] w-full px-[120px] py-[20px] flex items-center justify-between">
      <div className="brand-and-links flex items-center">
        <h1 className="font-bold mr-[46px] text-[20px] text-brand-blue">{COMPANY_NAME}</h1>
        <NavMenu />
      </div>

      <div className="action-buttons flex items-center gap-[10px]">
        <ActionButton className="bg-brand-yellow">
          Upload CV
        </ActionButton>

        <ActionButton className="bg-brand-orange">
          Contact Us
        </ActionButton>
      </div>
    </div>
  )
}
