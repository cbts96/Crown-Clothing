  
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectShopSectionsLoaded } from '../../Redux/Shop/shopSelector';
import WithSpinner from '../../components/WithSpinner/withSpinner';
import Collection from './Collection';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectShopSectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionPageContainer;