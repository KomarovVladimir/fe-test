import { styled } from "styled-components";

import "./App.css";
import { Card, LinkCard } from "./components";
import { descriptions } from "./data"

const CardsWrapper = styled.div`
   position: relative;
    overflow: hidden;
    z-index: 1;
    &:after {
        content: "";
        position: absolute;
        display: block;
        background: linear-gradient(270deg, #151416 0%, rgba(21, 20, 22, 0.00) 100%);
        width: 84px;
        height: 100%;
        top: 0;
        right: -15px;
        z-index: 1000;
    }
`;


export const App = () => (
    <main className="min-h-screen bg-[#150F0D] pt-[34px] pb-[34px] pl-[50px] pr-[50px]">
        <CardsWrapper className="2xl:after:invisible">
            <div className="flex flex-nowrap 2xl:flex-wrap -m-[6px] md:-m-2 overflow-x-auto snap-x">
                {descriptions.map(({ title, description, price, image }, index) => (
                        <Card
                            key={index}
                            promoText="Save up to 15%"
                            background={image}
                            topSeller={index > 2}
                            {...{title, description, price}}
                        />
                    ))}
                <LinkCard />
            </div>
        </CardsWrapper>
    </main>
);
