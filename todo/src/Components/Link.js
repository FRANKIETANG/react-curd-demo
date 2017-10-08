import React from 'react'
import { Link as RouteLink } from 'react-router-dom'

const Link = ({ fliter, children }) => (
    <li>
        <RouteLink to={"/" + fliter}>{children}</RouteLink>
    </li>
)

export default Link