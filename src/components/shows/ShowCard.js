import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { StarIcon } from "../common/StarIcon";
import { SearchImgWrapper, SearchCard } from "../common/SearchCard";

const ShowCard = (props) => {
  const { name, imgUrl, id, summary, onStarClick, isStarred } = props;
  const summarStripped = summary
    ? summary.replace(/<.+?>/g, "").split(" ").slice(0, 10).join(" ") + "..."
    : "No information available";

  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={imgUrl} alt={name} />
      </SearchImgWrapper>
      <h2>{name}</h2>
      <p>{summarStripped}</p>

      <ActionSection>
        <Link to={`/show/${id}`}>Read More</Link>
        <StarBtn type="button" onClick={() => onStarClick(id)}>
          <StarIcon active={isStarred} />
          {/* {isStarred ? "Unstar Me" : "Star Me"} */}
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
};

export default ShowCard;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &.animate {
    ${StarIcon} {
      animation: increase 0.75s ease-in forwards;
      @keyframes increase {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(3) rotate(45deg);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;
