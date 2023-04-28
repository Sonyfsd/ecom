import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import HeaderComponent from './components/header';
import MeetingsComponent from './components/meetings';
import FooterComponent from './components/footer.component';
import HomeComponent from './components/home.component';
import ProductsComponent from './components/products.component';
import ProductDetailsComponent from './components/product-details.component';
import SpecificationsComponent from './components/specifications';
import QuestionAnswersComponent from './components/question-answers';
import RatingReviewsComponent from './components/rating-reviews';
import CartComponent from './components/cart.component';
import RegisterComponent from './components/register.component';
import LoginComponent from './components/login.component';
import UsersComponent from './components/users/users';
import CounterComponent from './components/counter.component';
import TodoListComponent from './components/todo.component';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      {/* <MeetingsComponent /> */}
      {/* <HomeComponent /> */}
      <Routes>
        <Route path="/products" element={<ProductsComponent />} ></Route>
        <Route path="/product-details/:id" element={<ProductDetailsComponent />}>
          {/* <Route path="specifications" element={<SpecificationsComponent />}/>
          <Route path="rating-reviews" element={<RatingReviewsComponent />}/>
          <Route path="question-answers" element={<QuestionAnswersComponent />}/> */}
        </Route>
        <Route path="/meetings" element={<MeetingsComponent />}/>
        <Route path="/cart" element={<CartComponent />}/>
        <Route path="/login" element={<LoginComponent />}/>
        <Route path="/register" element={<RegisterComponent />}/>
        <Route path="/users" element={<UsersComponent />} />
        <Route path="/counter" element={<CounterComponent />} />
        <Route path="/todo" element={<TodoListComponent />} />
        <Route path="/" element={<HomeComponent />}/>
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;

// /product-details/specifications
// /product-details/rating-reviews
// /product-details/question-answers
