import { createUseStyles } from "react-jss";

import bg from "../img/card1.png";

const useStyles = createUseStyles({
    card: {
        padding: 30,
        minHeight: 360,
        background: `no-repeat center url(${bg})`,
        borderRadius: 12,
        // "&:after": {
        //     content: "234234",
        //     display: "block",
        //     position: "fixed",
        //     top: 0,
        //     left: 0,
        //     height: "100%",
        //     width: "100%",
        //     background: "black",
        // },
    },
    title: {
        pb: 10,
        color: "#FFF",
        fontFamily: "Montserrat",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal",
    },
});

export const Card = ({
    title,
    description,
    price,
    background,
    promoText,
    onClick,
}) => {
    const styles = useStyles();

    return (
        <div
            className={`sticky top-0 left-0 flex flex-col justify-end flex-shrink-0 lg:w-[calc(100%/5-(1rem*4/5))] ${styles.card}`}
        >
            <p className={styles.title}>{title}</p>
            <ul>
                {description?.map((text) => (
                    <li>{text}</li>
                ))}
            </ul>
            <div>
                <p>From</p>
                <p>{price}</p>
            </div>
            <button {...{ onClick }} />
        </div>
    );
};
