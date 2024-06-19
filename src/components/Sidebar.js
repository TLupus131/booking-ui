import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import '../styles/template.css';

function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <nav>
                <ul>
                    <li>
                        <button className="toggle-sidebar-button" onClick={toggleSidebar}>
                            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                        </button>
                    </li>
                    <li>
                        <Link to="/admin/property-manager">
                            <FontAwesomeIcon icon={faCircleNotch} />
                            {isOpen && <span>Manage Properties</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/region-manager">
                            <FontAwesomeIcon icon={faCircleNotch} />
                            {isOpen && <span>Manage Regions</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/property-type-manager">
                            <FontAwesomeIcon icon={faCircleNotch} />
                            {isOpen && <span>Manage Property Type</span>}
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
