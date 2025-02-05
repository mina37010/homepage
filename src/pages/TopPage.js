import React from 'react';
import { LuPartyPopper } from "react-icons/lu";

const TopPage = () => {
  return (
    <div>
      <div className='home'>
        <div className='homeA center'>
          <h1><a className='neon-hover a-non' href='https://www.jumangoku.co.jp/'>風が語りかけます。うまい、うますぎる</a></h1>
          <h2>埼玉銘菓 十万石まんじゅう</h2>
        </div>
        <div className='homeB'></div>
        <div className='homeParty'>
          <div className='homePartybar'>
              <a className='a-non a-hover' href='/party'>
                <div className='zBarBox'>
                  <LuPartyPopper />
                </div>
              </a>
            
          </div>
        </div>
      </div> 
    </div>
  );
};

export default TopPage;
