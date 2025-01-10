import ReactContext from "../../ReactContext";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

import './index.css'

const Header = () => (
    <ReactContext.Consumer>
        {value => {
            const { themeValue, changeTheme } = value
            const onClicklightTheme = themeValue => {
                changeTheme(themeValue)
            }
            return (
                <div className={themeValue === 'light' ? 'main-container-header' : 'main-container-header-two main-container-header'}>
                    <div className="prime-container-header">
                        <a href='#' className={themeValue === 'light' ? "nav-elements" : 'nav-elements nav-elements-two'}>Wyge</a>
                    </div>
                    <div className={themeValue === 'light' ? "nav-elements-header-search" : 'nav-elements-header-search search-icon-header-darkmode'}>
                        <CiSearch className={themeValue === 'light' ? "search-icon-header" : 'search-icon-header search-icon-header-darkmode'} />
                        <input id='searchInput' placeholder='Search' type='search' className="search-element-header" />
                        <div className={themeValue === 'light' ? "hint-elements" : 'hint-elements search-icon-header-darkmode'}>
                            <p className="ctrl-header-search">CTRL</p>
                            <p className="ctrl-header-search">K</p>
                        </div>
                    </div>
                    <div className='prime-container-header'>
                        <a href='https://discord.gg/T5dCmjRSYA' rel="noreferrer" target="_blank" ><BsDiscord className={themeValue === 'light' ? "nav-elements icon-element-header-two" : 'nav-elements icon-element-header-two nav-elements-darkmode'} /></a>
                        <a href="https://github.com/aixplain/aiXplain" rel="noreferrer" target="_blank" ><FaGithub className={themeValue === 'light' ? "nav-elements icon-element-header-two" : 'nav-elements icon-element-header-two nav-elements-darkmode'} /></a>
                        <button type="button" style={{ backgroundColor: 'transparent', ouline: 'none', border: 'none' }}>
                            {themeValue === 'light' ?
                                <CiLight className="nav-elements icon-element-header-two" onClick={() => { onClicklightTheme('dark') }} /> :
                                <MdDarkMode className="nav-elements icon-element-header-two darkmode" onClick={() => { onClicklightTheme('light') }} />
                            }
                        </button>

                    </div>
                </div>
            )
        }
        }
    </ReactContext.Consumer>
)

export default Header