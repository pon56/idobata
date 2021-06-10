import React, {useState,} from 'react';
import SignIn from './SignIn';
import Main from '../main';
import Config from '../config.json';

export default () => {
const[name, setName] = useState('')
console.log(name)

if (Config.signInEnabled && name === ""){
  return <SignIn setName={setName} />;
}else{
  return <Main name={name} />
}

};
