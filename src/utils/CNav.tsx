import { FC } from "react";
import { MdArrowBackIosNew } from "react-icons/md";

interface CNavProps
{
  title: string;
  darkText: boolean;
  rightElement: JSX.Element;
  transparent: boolean;
  backButtonAction: () => void;
  rightElementAction: () => void;
}

export const CNav: FC<CNavProps> = ( {
  rightElement,
  darkText = true,
  title = "Your Course",
  transparent = false,
  rightElementAction,
  backButtonAction
} ) =>
{
  return (
    <nav
      className={ `w-full flex justify-between shadow-lg items-center py-3 sticky top-0 z-10 ${ transparent
        ? 'bg-transparent'
        : 'bg-gray-100' }` }
    >
      <div
        className="ml-3 cursor-pointer"
        onClick={ backButtonAction }
      >
        <MdArrowBackIosNew
          className={ `${ darkText ? "" : "text-white fill-current" }` }
        />
      </div>
      <div
        className="font-bold dark:text-red-400"
      >
        { title }
      </div>
      <div
        className="mr-3 cursor-pointer"
        onClick={ rightElementAction }
      >
        { rightElement }
      </div>
    </nav>
  )
}
