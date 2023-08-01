import { styled } from "styled-components";

import "./App.css";
import { Card, LinkCard } from "./components";
import { descriptions } from "./data";

const CardsWrapper = styled.div`
    position: relative;
    overflow-x: auto;
    overflow-y: hidden;
    z-index: 1;
    &:after {
        content: "";
        position: sticky;
        display: block;
        background: linear-gradient(
            270deg,
            #151416 0%,
            rgba(21, 20, 22, 0) 100%
        );
        padding-left: 84px;
        top: 0;
        right: 0;
        z-index: 1000;
    }
    &::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
`;

export const App = () => (
    <main className="min-h-screen bg-[#150F0D] pt-[34px] pb-[34px] pl-[50px] pr-[50px]">
        <CardsWrapper className="flex flex-nowrap 2xl:flex-wrap -m-[6px] md:-m-2 snap-x 2xl:after:invisible">
            {descriptions.map(({ title, description, price, image }, index) => (
                <Card
                    key={index}
                    promoText="Save up to 15%"
                    background={image}
                    topSeller={index > 1}
                    {...{ title, description, price }}
                />
            ))}
            <LinkCard />
        </CardsWrapper>
    </main>
);
