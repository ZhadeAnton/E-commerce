import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionsOverview from 'components/collection-overview/collection-overview.component'
import CollectionPage from 'pages/collection/collection.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import { selectIsCollectionFetching, selectIsCollectionLoaded } from 'redux/shop/shop.selector'
import { fetchCollectionsStartAsync } from 'redux/shop/shop.actions'

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }

  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props

    return (
      <div className='shop-page' >
        <Route exact path={`${match.path}`} render={props => (<CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />)} />
        <Route path={`${match.path}/:collectionId`} render={props => (<CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />)} />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage) 