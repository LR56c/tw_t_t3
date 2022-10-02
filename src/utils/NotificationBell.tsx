import { FC } from "react";
import { HiOutlineBell } from "react-icons/hi";

interface NotificationBellProps
{
  darkText: boolean;
}

export const NotificationBell: FC<NotificationBellProps> = ({darkText= true}) =>
{
  return (
    <div
      className="relative pr-1"
    >
              <span className="w-2 h-2 top-0 right-1 rounded-full bg-gray-100 absolute">
                <span className="w-1 h-1 right-0.5 top-0.5 absolute rounded-full bg-yellow-300"></span>
              </span>
      <HiOutlineBell
        className={ `${ darkText ? "" : "text-white fill-current" }` }
      />
    </div>
  )
}
