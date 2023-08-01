import { styled } from "styled-components";

import "./App.css";
import { Card } from "./components/Card";

const description = [
    "Unlock the end-game content",
    "Unlock high-level crafting",
    "Complete the main questline",
];

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
        right: 0;
        z-index: 1000;
    }
`;


export default function App() {
    return (
        <main className="min-h-screen bg-[#150F0D] pt-[34px] pb-[34px] pl-[50px] pr-[50px]">
            <CardsWrapper className="2xl:after:invisible">
                <div className="flex flex-nowrap 2xl:flex-wrap -m-[6px] md:-m-2 overflow-x-auto snap-x">
                    {Array(10)
                        .fill(true)
                        .map((item, index) => (
                            <Card
                                key={index}
                                title="Brimstone Sands"
                                description={description}
                                promoText="Save up to 15%"
                                price="$30"
                                background=""
                            />
                        ))}
                </div>
            </CardsWrapper>
        </main>
    );
}
