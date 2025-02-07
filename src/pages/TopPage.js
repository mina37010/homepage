import React from 'react';
import { LuPartyPopper } from "react-icons/lu";
import { PiMountainsFill } from "react-icons/pi";

const TopPage = () => {
  return (
    <div>
      <div className='home'>
        <div className='homeA center'>
          <h1><div className='neon-hover'>風が語りかけます。うまい、うますぎる</div></h1>
          <h2><a className='a-non' href='https://www.jumangoku.co.jp/'>埼玉銘菓 十万石まんじゅう</a></h2>
        </div>
        <div className='homeB'></div>
        <div className='homeParty'>
          <div className='homePartybar'>
              <a className='a-non a-hover' href='/shinratsu'>
                <div className='zBarBox'>
                <PiMountainsFill />
                </div>
              </a>
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
