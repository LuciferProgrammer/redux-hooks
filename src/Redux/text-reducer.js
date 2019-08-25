import axios from 'axios'

const LOAD = 'LOAD'

let initialState = {
   texts: [
      { data: 'Orinary text' }
   ]
}

export let textReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOAD:
         return Object.assign({}, state, { texts: state.texts.concat({ data: action.payload }) })
      default:
         return state
   }
}

export let loadActionCreator = () => {
   // axios.get('https://dog.ceo/api/breeds/image/random').then(res => {
   //    if (res)
   //       return { type: LOAD, payload: res.data.message }
   // })
   // return (() => {
   //    axios.get('https://dog.ceo/api/breeds/image/random').then(res => {
   //       if (res)
   //          return { type: LOAD, payload: res.data.message }
   //    })
   // })
   setTimeout(() => {
      return { type: LOAD, payload: '12312' }
   }, 1000)

}