import React, { useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import { Divider } from 'semantic-ui-react';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { getPersistedAnswer } from '../utils/persistAnswers';
import 'semantic-ui-css/semantic.css';
import './index.css';

const BlogIndex = props => {
  const { data } = props;
  const posts = data.allMarkdownRemark.edges;

  useEffect(() => {
    document.body.style.backgroundImage = null;
  }, []);

  return (
    <Layout
      location={props.location}
      siteMetadata={data.site.siteMetadata}
    >
      <SEO title="duthaho" />
      <Bio />
      <Divider />
      <ol>
        {posts.map(({ node }) => {
          const title =
            node.frontmatter.title || node.fields.slug;
          const {
            selectedAnswer,
            correctAnswer
          } = getPersistedAnswer(title);
          let correctIndicator;
          if (selectedAnswer !== null) {
            correctIndicator =
              correctAnswer === selectedAnswer ? (
                <span style={{ color: 'green' }}>
                  <i className="check circle icon"></i>
                </span>
              ) : (
                <span style={{ color: 'red' }}>
                  <i className="times circle icon"></i>
                </span>
              );
          }
          return (
            <li key={node.fields.slug}>
              <article>
                <header>
                  <Link
                    style={{ boxShadow: `none` }}
                    to={node.fields.slug}
                  >
                    {title}
                  </Link>{' '}
                  {correctIndicator}
                </header>
              </article>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        social {
          facebook {
            appId
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
