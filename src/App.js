import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import EditPost from './components/EditPost';
import PostsContextProvider from './contexts/PostsContext';

const App = () => {
  return (
    <div className='container'>
      <PostsContextProvider>
        <Switch>
          <Route path='/edit/:id' component={EditPost} />
          <Route path='/' component={Home} />
        </Switch>
      </PostsContextProvider>
    </div>
  );
};

export default App;
