import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import SignIn from './SignIn';
import Login from './Login';



function CardFunctional() {
  

  

  return (
    <div>
        <section>
        <div className="w-full flex items-center">

          <div className="bg-white p-6 flex flex-col items-center max-w-lg rounded-md w-full">

            <div>
              <p className="text-5xl text-black max-w-md font-semibold">Investir em ideias nunca foi tão fácil.</p>
            </div>

            <Tabs className="w-full">
            <div className="flex gap-5 pt-6 w-full border-b border-b-gray-200">
            <TabList>
              <Tab>Abrir conta</Tab>
              <Tab>Entrar</Tab>
            </TabList>
            </div>

            <TabPanel>

              {/*SIGN-IN FORM*/}
              <SignIn />
            
            </TabPanel>

            <TabPanel>

              {/*LOGIN FORM*/}
              <Login />
            
            </TabPanel>
          </Tabs>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CardFunctional