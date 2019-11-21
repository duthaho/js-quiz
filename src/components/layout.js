import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import GitHubButton from 'react-github-btn';
import { Divider, Button } from 'semantic-ui-react';
import { ClearAnswerModal } from './modal';
import { rhythm, scale } from '../utils/typography';
import { clearAllPersistedAnswer } from '../utils/persistAnswers';

const Layout = props => {
  const headerRef = useRef();
  const { location, title, children } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  useEffect(() => {
    location.pathname !== '/' &&
      headerRef.current.scrollIntoView();
  }, [location]);

  const clearAnswer = () => {
    clearAllPersistedAnswer();
    window.location.reload();
    return false;
  };
  const [isOpen, openClear] = useState(false);

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          textAlign: 'center',
          fontSize: '30px',
          marginBottom: '20px',
          marginTop: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.9)'
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          textAlign: 'center',
          marginTop: 0
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(32),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
      }}
    >
      <header>{header}</header>

      <main ref={headerRef}>{children}</main>

      {
        location.pathname === rootPath && <div style={{ textAlign: 'center' }}>
          <Button className="ui red basic button" onClick={() => openClear(true)}>Xóa dữ liệu</Button>
          <ClearAnswerModal modalIsOpen={isOpen} clearAnswer={() => openClear(clearAnswer())} closeModal={() => openClear(false)} />
        </div>
      }

      <footer style={{ fontSize: '14px' }}>
        <Divider />
        <p style={{ textAlign: 'center' }}>
          <GitHubButton
            href="https://github.com/duthaho/js-quiz"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star duthaho/js-quiz on GitHub"
          >
            Tặng sao nào!
          </GitHubButton>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
