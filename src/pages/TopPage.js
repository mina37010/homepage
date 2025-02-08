import React from 'react';
import { LuPartyPopper } from "react-icons/lu";
import { PiMountainsFill } from "react-icons/pi";

const TopPage = () => {
  return (
    <div>
      <div className='home'>
        <div className='homeA center'>
          <h1>多分テキスト</h1>
        </div>
        <div className='homeB center'>
          <h1>多分Blog</h1>
        </div>
        <div className='homeC center'>
          <h1>多分画像</h1>
        </div>
        <div className='homeD center'>
          <h1>多分他人リンク</h1>
        </div>

        <div className='homeE center'>
          <div>
            <h1>多分、風</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8lx0vLTH_yg?si=-OcWECpUX2OmoAEx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

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
