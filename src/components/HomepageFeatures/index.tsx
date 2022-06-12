import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Primary Develop Language',
    Svg: require('../../../static/img/ISO_C++_Logo.svg').default,
    description: (
      <>
        I mainly use C++ to develop UI with Qt Framework,
        and some Computer Graphic functionalities(e.g. Modeling, Simulation and Rendering).
      </>
    ),
  },
  {
    title: 'Secondary Develop Language',
    Svg: require('../../../static/img/python-seeklogo.com.svg').default,
    description: (
      <>
        I like to use python to write some automatic script which
        can make my work more efficient. I also use python to develop some server side app with FastAPI.
      </>
    ),
  },
  {
    title: 'Hobby',
    Svg: require('../../../static/img/Unofficial_JavaScript_logo_2.svg').default,
    description: (
      <>
        It's amazing that Javascript can do so many work(e.g. Web App, Mobile App and Desktop APP).
        There are also so many excellent open-source projects which we can use to build our APP.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
