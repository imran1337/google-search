import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Results from '../Results'

const Routes = () => {
  return (
    <div className='p-4'>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/search' />
        </Route>
        <Route
          exact
          path={['/search', '/images', '/news', '/videos']}>
          <Results />
        </Route>
        {/* // Redirect all 404's to home */}
        <Redirect to='/' />
      </Switch>
    </div>
  )
}

export default Routes
