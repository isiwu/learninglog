import { ReactElement } from "react";
import NavLink from "./NavLink";

const CustomLayout = (page: ReactElement) => {
  const user = {id: 1};
  return (
    <div className="flex items-center">

      {/* SIDE NAVS */}
      <div className="w-[30%] pl-14 py-8">
        <p className="">
          <NavLink text="topics" href={`/users/${user.id}/topics`} />
        </p>
        <p className="my-2">
          <NavLink text="change password" href={`/users/${user.id}/change-password`} />
        </p>
        <p>
          <NavLink text="chats" href={`/users/${user.id}/chats`} />
        </p>
      </div>

       {/* PAGE BODY */}
      <div className="w-[90%] md:w-[70%] border">{page}</div>
    </div>
  )
}

export default CustomLayout;