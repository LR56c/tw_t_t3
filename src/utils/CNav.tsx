import { FC } from "react";
import { MdArrowBackIosNew } from "react-icons/md";

interface CNavProps
{
  title: string;
  darkText: boolean;
  rightElement: JSX.Element;
  transparent: boolean;
}

export const CNav: FC<CNavProps> = ( {
  rightElement,
  darkText = true,
  title = "Your Course",
  transparent = false
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
        onClick={ () => console.log( "back click" ) }
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
        onClick={ () => console.log( "click" ) }
      >
        { rightElement }
      </div>
    </nav>
  )
}
