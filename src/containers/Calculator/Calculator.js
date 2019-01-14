import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../../store/actions/counter';
import * as resultActions from '../../store/actions/results';

class Calculator extends React.Component {

  render() {

    const results = this.props.storedResults.map((result) => {
      return <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>;
    });

    return (
      <>
        <button onClick={this.props.onIncrementCounter}>
          Increment
        </button>
        <button onClick={this.props.onAddCounter}>
          Increment + 4
        </button>
        <button>
          Decrement
        </button>
        <div>Result: {this.props.ctr}</div>

        <hr />

        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
        <ul>
          {results}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counterReducer.counter,
    storedResults: state.resultReducer.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(counterActions.increment()),
    onAddCounter: () => dispatch(counterActions.add(4)),
    onStoreResult: (counter) => dispatch(resultActions.storeResult(counter)),
    onDeleteResult: (resultId) => dispatch(resultActions.deleteResult(resultId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);