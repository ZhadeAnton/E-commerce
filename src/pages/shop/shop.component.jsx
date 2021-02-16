import React from 'react'
import selectShopCollections from 'redux/shop/shop.selector';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from "../../components/collection-preview/collection-previev.component";

const ShopPage = ({ shopCollections }) => (
  <div className='shop-page'>
    {
      shopCollections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />
      })
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  shopCollections: selectShopCollections
})

export default connect(mapStateToProps)(ShopPage)