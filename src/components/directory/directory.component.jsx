import React from 'react';
import './directory.styles.scss';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectDirectorySection } from 'redux/directory/directory.selector';
import MenuItem from "../menu-item/menu-item.component";

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(item => {
      return <MenuItem key={item.id} item={item} />;
    })}
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory)