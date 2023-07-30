import { createUseStyles } from "react-jss";

import bg from "../img/card1.png";
import dots from "../img/dots.svg";

const useCardStyles = createUseStyles({
    card: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "700",
        padding: 30,
        minHeight: 360,
        alignItems: "flex-start",
        background: `no-repeat center url(${bg})`,
        borderRadius: 12,
    },
    title: {
        paddingBottom: 10,
        color: "#FFF",
        fontSize: "20px",
        lineHeight: "normal",
    },
    description: {
        color: "#A98B89",
        fontSize: "14px",
        lineHeight: "30px",
    },
    descriptionHighlighted: {
        color: "#F09A38",
    },
    promo: {
        display: "inline-block",
        backgroundColor: "#F09A38",
        borderRadius: "4px",
        padding: "3px 9px",
        lineHeight: "30px",
    },
});

export const Card = ({
    title,
    description,
    price,
    background,
    promo,
    onClick,
}) => {
    const styles = useCardStyles();

    return (
        <div
            className={`sticky top-0 left-0 flex flex-col justify-end flex-shrink-0 lg:w-[calc(100%/5-(1rem*4/5))] ${styles.card}`}
        >
            <p className={styles.title}>{title}</p>
            <div className="flex items-center pb-[10px]">
                <img
                    src={dots}
                    alt="Decoration"
                    className="mr-2 w-[19px] h-[81px] shrink-0"
                />
                <ul>
                    {description?.map((text, index) => (
                        <li
                            key={index}
                            className={
                                index
                                    ? styles.description
                                    : `${styles.description} ${styles.descriptionHighlighted}`
                            }
                        >
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.promo}>Save up to 15%</div>
            <div className="pb-[10px]">
                <p>From</p>
                <p>{price}</p>
            </div>
            <button {...{ onClick }} />
        </div>
    );
};
