import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const QuestionStat = styled.div`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 7px;
  span {
    font-size: 0.7rem;
    display: block;
    font-weight: 300;
    margin-top: 4px;
  }
`;

const QuestionTitleArea = styled.div`
  padding: 0 30px;
`;

const Tag = styled.span`
  display: inline-block;
  margin-right: 3px;
  background-color: #d9b08c;
  padding: 3px;
  border-radius: 5px;
  font-size: 0.9rem;
  color: #d1e8e2;
`;

const QuestionLink = styled(Link)`
  text-decoration: none;
  color: #116466;
  font-size: 1.2rem;
  display: block;
  margin-bottom: 7px;
`;

const StyledQuestionRow = styled.div`
  background-color: #323d38;
  padding: 10px 15px 10px;
  display: grid;
  grid-template-columns: 50px 50px 50px 1fr;
  border-top: 1px solid #555;
`;

const WhoAndWhen = styled.div`
  display: inline-block;
  color: #aaa;
  font-size: 0.8rem;
  float: right;
  padding: 10px 0;
`;

const UserLink = styled.a`
  color: #116466;
`;

export default function QuestionRow({ title, id }) {
  return (
    <StyledQuestionRow>
      <QuestionStat>
        0<span>votes</span>
      </QuestionStat>
      <QuestionStat>
        0<span>answers</span>
      </QuestionStat>
      <QuestionStat>
        0<span>views</span>
      </QuestionStat>
      <QuestionTitleArea>
        <QuestionLink to={"/questions/" + id}>{title}</QuestionLink>
        <Tag>javascript</Tag>
        <Tag>parsing</Tag>
        <Tag>quotes</Tag>
        <Tag>literals</Tag>
        <WhoAndWhen>
          asked 10 mins ago <UserLink>Benediktas</UserLink>
        </WhoAndWhen>
      </QuestionTitleArea>
    </StyledQuestionRow>
  );
}

QuestionRow.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
