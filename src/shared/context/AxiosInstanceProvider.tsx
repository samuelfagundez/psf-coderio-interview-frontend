import * as React from 'react';
import axios from 'axios';

const timezonesService = axios.create({
  baseURL: `http://localhost:9000`,
});

const AxiosInstanceContext = React.createContext(timezonesService);

function AxiosInstanceProvider({ children }: any) {

  return (
    <AxiosInstanceContext.Provider value={timezonesService}>{children}</AxiosInstanceContext.Provider>
  );
}

export default AxiosInstanceProvider;

export { AxiosInstanceProvider, AxiosInstanceContext };
