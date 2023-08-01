import { styled } from "styled-components";

import "./App.css";
import { Card, LinkCard } from "./components";
import { descriptions } from "./data";

const CardsWrapper = styled.div`
    position: relative;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-mask: linear-gradient(to left, transparent 25%, red 45%);
    mask: linear-gradient(to bottom, transparent 25%, black 45%);
    &::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
    @media (min-width: 1400px) {
        -webkit-mask: none;
        mask: none;
    }
`;

export const App = () => (
    <main className="min-h-screen bg-[#150F0D] py-[16px] px-[10px] md:py-[29px] md:px-[20px] 2xl:py-[34px] 2xl:px-[50px]">
        <CardsWrapper className="flex flex-nowrap -m-[6px] snap-x md:-m-2 2xl:flex-wrap">
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
