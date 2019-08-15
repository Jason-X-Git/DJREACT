import React from 'react'
import { Route } from 'react-router-dom'
import ArticlesList from './container/ArticlesListView'
import ArticleDetail from './container/ArticleDetailsView'

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ArticlesList} />
    <Route exact path="/:articleID" component={ArticleDetail} />
  </div>
);

export default BaseRouter;