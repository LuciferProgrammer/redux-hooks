import React, { useEffect, useRef } from 'react'
import { loadActionCreator } from './Redux/text-reducer'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return (
    {
      state: state
    }
  )
}

function mapDispatchToProps(dispatch) {
  return (
    {
      loadActionCreator: () => dispatch(loadActionCreator())
    }
  )
}

function App(props) {

  useEffect(() => {
    //console.log('State has been updated.')
  })

  return (
    <>
      {props.state.textReducer.texts.map(el => {
        return (
          <div>{el.data}</div>
        )
      })}
      <button onClick={() => props.loadActionCreator()}>Add data</button>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
