import './App.css';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRouter, IRouterItem } from './routes/app-route';

class App extends React.Component {

  loading = <div>loading...</div>;
  showRoute = AppRouter.map((item: IRouterItem, index: number) => {
    return (
      <Route key={index} path={item.path} element={
        <Suspense fallback={this.loading}>
          <item.element />
        </Suspense>
      } />
    )
  })

  render() {
    return (
      <Routes>
        {this.showRoute}
      </Routes>
    );
  }
}
export default App;