import { connect } from 'react-redux'
import { compose } from 'redux'
import { selectIsCollectionLoaded } from 'redux/shop/shop.selector'
import { createStructuredSelector } from 'reselect'

import CollectionPage from './collection-page.component'
import WithSpinner from 'components/with-spinner/with-spinner.component'

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state)
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage)

export default CollectionPageContainer