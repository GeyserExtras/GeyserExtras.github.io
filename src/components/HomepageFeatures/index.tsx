import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate'; // 新增翻译组件
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'homepage.feature.parity',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate id="homepage.feature.parity.description">
        GeyserExtras contains many quality of life improvements to make gameplay feel as similar to
        the Java experience as possible.
      </Translate>
    ),
  },
  {
    title: 'homepage.feature.helpful',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate id="homepage.feature.helpful.description">
        With features like Resource Pack Loading, Action remapping, and Emote Chat,
        players on both sides can have a seamless gameplay experience.
      </Translate>
    ),
  },
  {
    title: 'homepage.feature.fixes',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate id="homepage.feature.fixes.description">
        Workarounds to issues that have been in Geyser for a while or wont be fixed by GeyserMC.
      </Translate>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Translate id={title}>
            {title.split('.').pop() ?? /* i18n-fallback */ ''}
          </Translate>
        </Heading>
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