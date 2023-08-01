import "./App.css";
import { CardsWrapper, Card, LinkCard } from "./components";
import { descriptions } from "./data";

export const App = () => (
    <main className="min-h-screen bg-[#150F0D] py-[16px] px-[10px] md:py-[29px] md:px-[20px] 2xl:py-[34px] 2xl:px-[50px]">
        <CardsWrapper>
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
