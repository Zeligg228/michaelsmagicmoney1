import React from 'react'
import SocialIcon from '../../SocialIcons/SocialIcons'

import BtnWallet from '../../../image/wallet.svg'
import HeaderLink from '../../../image/headerlink.png'

import './Menu.scss'
import Button from '../../Button/Button'

type MenuProps = {
  isOpen: boolean
}
const Menu: React.FunctionComponent<MenuProps> = ({  isOpen }) => {
  return (
    <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
      <div className="nav-menu__btns-wrapper">
        <Button variant="secondary" src={BtnWallet} alt="wallet-icon" text="BUY $PAPER" />
        <Button src={HeaderLink} alt="game-img" />
      </div>
      <SocialIcon />
    </nav>
  )
}

export default Menu
