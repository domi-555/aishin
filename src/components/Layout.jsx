import React from 'react'
import PropTypes from "prop-types"

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight,faChevronUp,faCircleChevronRight } from "@fortawesome/free-solid-svg-icons"

import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
                
        <div id="container">
            <section id="submain">
                {children}
            </section>
            <Sidebar />
        </div>
        <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
