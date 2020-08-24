import { useLocation } from "@reach/router"
import React, { FC } from "react"
import ROUTES from "../../config/routes"
import { IHeaderMenuItem } from "../../types"
import CONFIG from "./config"
import Styled from "./Header.styles"
import MenuItem from "./MenuItem"

export const PureNavigation: FC<{}> = () => {
  const { pathname } = useLocation()
  return (
    <>
      <Styled.MenuItemUl variants={Styled.NAV_VARIANTS}>
        {CONFIG.NAV_ITEMS.map((item: IHeaderMenuItem) => (
          <MenuItem
            key={`menu_item_${item.title}`}
            item={item}
            className={`${
              pathname === item.path + "/" ||
              pathname === item.path ||
              (pathname === ROUTES.root && item.path === "/")
                ? "active"
                : ""
            }`}
            title={
              pathname === item.path + "/" ||
              pathname === item.path ||
              (pathname === ROUTES.root && item.path === "/")
                ? `You're Here Now`
                : item.path
            }
          />
        ))}
      </Styled.MenuItemUl>
    </>
  )
}

const Navigation: FC<{}> = () => {
  return <PureNavigation />
}

export default Navigation
