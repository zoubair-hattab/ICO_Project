import React from 'react';
import './work.css';
import instruction1 from '../../assets/images/instruction-1.png';
import instruction2 from '../../assets/images/instruction-2.png';
import instruction3 from '../../assets/images/instruction-3.png';
import instruction4 from '../../assets/images/instruction-4.png';

const Work = () => {
  return (
    <section class="section instruction" aria-label="instruction" data-section>
      <div class="container">
        <h2 class="h2 section-title">How It Work</h2>

        <p class="section-text">
          Stacks is a production-ready library of stackable content blocks built
          in React Native.
        </p>

        <ul class="instruction-list">
          <li>
            <div class="instruction-card">
              <figure class="card-banner">
                <img
                  src={instruction1}
                  width="96"
                  height="96"
                  loading="lazy"
                  alt="Step 1"
                  class="img"
                />
              </figure>

              <p class="card-subtitle">Step 1</p>

              <h3 class="h3 card-title">Download</h3>

              <p class="card-text">
                Stacks Is A Production-Ready Library Of Stackable Content Blocks
                Built In React Native.
              </p>
            </div>
          </li>

          <li>
            <div class="instruction-card">
              <figure class="card-banner">
                <img
                  src={instruction2}
                  width="96"
                  height="96"
                  loading="lazy"
                  alt="Step 2"
                  class="img"
                />
              </figure>

              <p class="card-subtitle">Step 2</p>

              <h3 class="h3 card-title">Connect Wallet</h3>

              <p class="card-text">
                Stacks Is A Production-Ready Library Of Stackable Content Blocks
                Built In React Native.
              </p>
            </div>
          </li>

          <li>
            <div class="instruction-card">
              <figure class="card-banner">
                <img
                  src={instruction3}
                  width="96"
                  height="96"
                  loading="lazy"
                  alt="Step 3"
                  class="img"
                />
              </figure>

              <p class="card-subtitle">Step 3</p>

              <h3 class="h3 card-title">Start Trading</h3>

              <p class="card-text">
                Stacks Is A Production-Ready Library Of Stackable Content Blocks
                Built In React Native.
              </p>
            </div>
          </li>

          <li>
            <div class="instruction-card">
              <figure class="card-banner">
                <img
                  src={instruction4}
                  width="96"
                  height="96"
                  loading="lazy"
                  alt="Step 4"
                  class="img"
                />
              </figure>

              <p class="card-subtitle">Step 4</p>

              <h3 class="h3 card-title">Earn Money</h3>

              <p class="card-text">
                Stacks Is A Production-Ready Library Of Stackable Content Blocks
                Built In React Native.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Work;
