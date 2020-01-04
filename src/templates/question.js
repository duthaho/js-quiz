import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';
import {
  persistAnswer,
  getPersistedAnswer
} from '../utils/persistAnswers';
import { Button, Form, Grid, Divider } from 'semantic-ui-react';
import correctBg from './correct.png';
import incorrectBg from './incorrect.png';
import { gaTrackAnswer } from '../utils/gaAnswerTracking';

const QuestionTemplate = props => {
  const post = props.data.markdownRemark;
  const { title } = post.frontmatter;

  const {
    selectedAnswer: selectedAnswerFromStorage
  } = getPersistedAnswer(title);

  const [selectedAnswer, setSelectedAnswer] = useState(
    selectedAnswerFromStorage
  );
  const [submittedAnswer, setSubmittedAnswer] = useState(
    selectedAnswerFromStorage
  );

  const [postContent, explanationContent] = post.html.split(
    '<!-- explanation -->'
  );
  const { previous, next } = props.pageContext;

  let correct;
  const answers = post.frontmatter.answers.map(answer => {
    if (answer.search('// correct') > -1) {
      answer = answer.split('// correct')[0].trim();
      correct = answer;
    }
    return answer;
  });

  useEffect(() => {
    if (selectedAnswer) {
      persistAnswer(title, selectedAnswer, correct);
    }
  }, [selectedAnswer, correct, title]);

  useEffect(() => {
    const bg =
      submittedAnswer === null
        ? ''
        : submittedAnswer === correct
          ? correctBg
          : incorrectBg;
    document.body.style.backgroundImage = `url(${bg})`;
  }, [submittedAnswer, correct]);

  const buttonText =
    submittedAnswer === null
      ? 'Trả lời'
      : submittedAnswer === correct
        ? 'Chuẩn cmnr!'
        : 'Cố gắng hơn nhé!';

  return (
    <Layout location={props.location} siteMetadata={props.data.site.siteMetadata}>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
      />
      <Grid
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          marginTop: '20px'
        }}
      >
        <Grid.Column>
          <article>
            <header>
              <h1
                style={{
                  marginTop: rhythm(1),
                  marginBottom: 15
                }}
              >
                {/* {post.frontmatter.title} */}
                Câu hỏi
              </h1>
            </header>
            <Form size="large">
              <section
                dangerouslySetInnerHTML={{
                  __html: postContent
                }}
              />

              <Divider />
              {answers.map(answer => (
                <div
                  key={answer}
                  style={{ marginBottom: '5px' }}
                >
                  <input
                    type="radio"
                    name="answer"
                    value={answer}
                    id={answer}
                    onClick={() => {
                      setSelectedAnswer(answer);
                    }}
                    defaultChecked={selectedAnswer === answer}
                    disabled={submittedAnswer !== null}
                  />
                  <label
                    style={{ marginLeft: '10px' }}
                    key={answer}
                    htmlFor={answer}
                  >
                    {answer}
                    {answer === correct &&
                      submittedAnswer !== null && (
                        <React.Fragment>
                          {' '}
                          <i className="long arrow alternate left icon"></i>
                          Đáp án nè
                        </React.Fragment>
                      )}
                  </label>
                </div>
              ))}
              <br />
              <Button
                color={
                  submittedAnswer === null
                    ? 'blue'
                    : submittedAnswer === correct
                      ? 'green'
                      : 'red'
                }
                fluid
                size="large"
                onClick={() => {
                  gaTrackAnswer(
                    title,
                    selectedAnswer,
                    correct
                  );
                  setSubmittedAnswer(selectedAnswer);
                }}
                disabled={
                  selectedAnswer === null ||
                  submittedAnswer !== null
                }
              >
                {buttonText}
              </Button>
            </Form>
            {submittedAnswer !== null && (
              <React.Fragment>
                <h2>Giải thích</h2>
                <section
                  dangerouslySetInnerHTML={{
                    __html: explanationContent
                  }}
                />
              </React.Fragment>
            )}
          </article>
        </Grid.Column>
      </Grid>
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: '15px 15px 10px 15px',
            margin: '30px -14px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)'
          }}
        >
          <li>
            {next && (
              <Link to={next.fields.slug} rel="prev">
                ← {next.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="next">
                {previous.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default QuestionTemplate;

export const pageQuery = graphql`
  query QuestionBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        social {
          facebook {
            appId
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        answers
        date
      }
    }
  }
`;
