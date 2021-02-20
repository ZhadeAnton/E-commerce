import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { firestore, converCollectionSnapshotToMap } from '../../firebase/firebase.utils'
import CollectionsOverview from 'components/collection-overview/collection-overview.component'
import CollectionPage from 'pages/collection/collection.component'
import updateCollection from 'redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    collectionRef.get().then(snapshot => {
      const transformedCollections = converCollectionSnapshotToMap(snapshot)
      updateCollections(transformedCollections)
      this.setState({ loading: false })
    })
  }

  render() {
    const { match } = this.props
    const { loading } = this.state

    return (
      <div className='shop-page' >
        <Route exact path={`${match.path}`} render={props => (<CollectionOverviewWithSpinner isLoading={loading} {...props} />)} />
        <Route path={`${match.path}/:collectionId`} render={props => (<CollectionPageWithSpinner isLoading={loading} {...props} />)} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollection(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage) 