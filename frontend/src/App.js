import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/register" component={RegisterScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            {/* this means the id is optional when we go to /cart/id and /cart we would see thesame thing */}
            <Route path="/cart/:id?" component={CartScreen} />
            <Route exact path="/" component={HomeScreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
