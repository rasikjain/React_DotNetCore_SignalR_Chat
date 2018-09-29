import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './css/site.css';
import { BrowserRouter } from 'react-router-dom';
import {Route} from 'react-router'
//import * as RoutesModule from './routes';
import { Layout } from './components/Layout';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Home } from './components/Home';
//let routes = RoutesModule.routes;

//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
           
ReactDOM.render(
       
    <BrowserRouter>
        <Layout>
            <Route exact path='/' component={Home} />
             <Route path='/counter' component={Counter} />
            <Route path='/fetchdata' component={FetchData} />
        </Layout>
        </BrowserRouter>
        ,
    rootElement
    );