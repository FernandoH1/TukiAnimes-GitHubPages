import { faBars, faCrown, faFilm, faHeart, faRunning, faSortDown, faTimesCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useDrawer } from "../../hooks/useDrawer";


import { Button } from "./Button";
import { Dropdown } from "./Dropdown";

export const DrawerScreen = () => {

    const { click, handleClick,closeMobileMenu,dropdown,onMouseEnter,
        onMouseLeave,handleAnimeList } = useDrawer();

    return (
        <>
            <nav className="navbar">
                <Link
                onClick={()=>handleAnimeList("tv","TV")}
                to='/' className="navbar-logo">
                    <FontAwesomeIcon style={{marginRight:"10px"}} icon={faFilm} />
                    <span>TUKI</span>ANIME
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faTimesCircle : faBars} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li
                    onClick={()=>handleAnimeList("upcoming","Próximamente")}
                    className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            <FontAwesomeIcon style={{marginRight:"10px"}}  icon={faRunning} />
                            Próximamente
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/favoritesList' className="nav-links" onClick={closeMobileMenu}>
                            <FontAwesomeIcon style={{marginRight:"10px", color:"#e63946"}}  icon={faHeart} />
                            Animes Favoritos
                        </Link>
                    </li>
                    <li
                    onClick={()=>handleAnimeList("airing","Animes Más Populares")}
                    className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            <FontAwesomeIcon style={{marginRight:"10px", color:"#e9c46a"}}  icon={faCrown} />
                            Más Popular
                        </Link>
                    </li>
                    <li className="nav-item"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    >
                        <div className="nav-links" onClick={closeMobileMenu}>
                            Género
                            <FontAwesomeIcon style={{marginLeft:"10px"}}  icon={faSortDown} />
                        </div>
                        {dropdown && <Dropdown/>}
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-links-mobile" onClick={closeMobileMenu}>
                            <FontAwesomeIcon style={{marginRight:"10px"}}  icon={faUser} />
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Button/>
            </nav>
        </>
    )
}
