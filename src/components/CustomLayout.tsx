import { ReactElement } from "react";

const CustomLayout = (page: ReactElement) => {
  return (
    <div className="flex items-center">
      <div className="w-[30%]">
        <div>
          nav links
        </div>
      </div>
      <div className="w-[90%] md:w-[70%]">{page}</div>
    </div>
  )
}

export default CustomLayout;