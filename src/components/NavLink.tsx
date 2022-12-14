import { useRouter } from "next/router";
import type { MouseEvent } from "react";

const NavLink = ({text, href,}: {text:string, href: string,}) => {
  const router = useRouter();
  const handleClick = (evt: MouseEvent<HTMLAnchorElement>):void => {
    evt.preventDefault();
    router.push(href);
  }
  return (
    <a href={href} onClick={handleClick} className="capitalize hover:bg-green-hover py-2 px-4">
      {text}
    </a>
  )
}

export default NavLink;