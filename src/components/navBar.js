import React from 'react';
import '../ui-toolkit/css/nm-cx/main.css';
import { OldSchoolMenuLink } from './activeLink';

export const NavigationBar = (props) => {
    return (
        <ul className="heading-nav padding-bottom-medium">
          <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home"/>
          <OldSchoolMenuLink to="/Users" label="User"/>
          <OldSchoolMenuLink to="/Todos" label="Todos"/>
      </ul>
    );
}