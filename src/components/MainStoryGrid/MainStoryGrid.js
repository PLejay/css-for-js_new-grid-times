import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas: "main-story secondary-stories" "advertisement advertisement" "opinion-stories opinion-stories";
    grid-template-columns: 2fr 1fr;
    background: var(--color-gray-300);
    column-gap: 1px;
    row-gap: 48px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  background: var(--color-gray-100);

  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletAndUp} {
    background: var(--color-gray-100);
    padding-left: 16px;
    margin-top: -16px;
    margin-bottom: -16px;
  }
`;

const StoryList = styled.div`
  display: grid;
  background: var(--color-gray-300);
  gap: 1px;
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    background: revert;
    gap: 32px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  background: var(--color-gray-100);
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  background: var(--color-gray-100);
`;

export default MainStoryGrid;
