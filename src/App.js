import "./App.css";

import { Card } from "./components/Card";

const description = [
    "Unlock the end-game content",
    "Unlock high-level crafting",
    "Complete the main questline",
];
export default function App() {
    return (
        <main className="min-h-screen bg-[#150F0D] pt-[34px] pb-[34px] pl-[50px] pr-[50px]">
            <div className="-m-1 flex flex-nowrap lg:flex-wrap md:-m-2 overflow-x-auto">
                {Array(14)
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
        </main>
    );
}
